/**
 * Global Blog Hub Page
 * /blog - ALL content from ALL destinations
 *
 * SEO STRATEGY:
 * - Single authoritative blog hub (better than redirect)
 * - Internal linking to all destination hubs
 * - Showcases content breadth for Google
 * - Proper structured data for blog aggregation
 *
 * UX STRATEGY:
 * - Destination tabs (US, UK, Canada)
 * - Category filters
 * - Search functionality
 * - Featured posts from each destination
 */

import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import { contentService } from "@/app/lib/api";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import BlogListClient from "@/app/components/content/BlogListClient";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    destination?: string;
  }>;
};

const DESTINATIONS = [
  { slug: "united-states", name: "United States", abbr: "US" },
  { slug: "united-kingdom", name: "United Kingdom", abbr: "UK" },
  { slug: "canada", name: "Canada", abbr: "CA" },
];

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  return generateSEOMetadata({
    title:
      "Travel Authorization Blog - Expert Guides for ESTA, UK ETA & Canada eTA",
    description:
      "Comprehensive travel authorization guides, tips, and requirements for the United States, United Kingdom, and Canada. Expert advice for ESTA, UK ETA, and Canada eTA applications.",
    keywords: [
      "travel blog",
      "ESTA guide",
      "UK ETA guide",
      "Canada eTA guide",
      "travel authorization",
      "visa requirements",
      "travel tips",
      "immigration news",
    ],
    canonicalUrl: `${baseUrl}/blog`,
  });
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const POSTS_PER_PAGE = 12;

export default async function GlobalBlogHub({ searchParams }: Props) {
  const searchParamsData = await searchParams;
  const currentPage = parseInt(searchParamsData.page || "1");
  const category = searchParamsData.category;
  const destination = searchParamsData.destination;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // Fetch posts (all destinations or filtered)
  const [response, categories] = await Promise.all([
    contentService.getBlogPosts({
      destination,
      category,
      limit: POSTS_PER_PAGE,
      offset,
    }),
    contentService.getCategories("BLOG", destination),
  ]);

  const posts = response?.data || [];
  const total = response?.total || 0;
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Get post counts per destination for tabs
  const destinationCounts = await Promise.all(
    DESTINATIONS.map(async (dest) => {
      const count = await contentService.getBlogPosts({
        destination: dest.slug,
        limit: 1,
      });
      return { slug: dest.slug, count: count?.total || 0 };
    })
  );

  const destinationCountMap = Object.fromEntries(
    destinationCounts.map((d) => [d.slug, d.count])
  );

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Section id="blog-hub-hero" background="primary" padding="lg">
          <Container maxWidth="lg">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Travel Authorization Hub
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Expert guides, tips, and updates for US ESTA, UK ETA, and Canada
                eTA applications. Everything you need for hassle-free travel.
              </p>
            </div>
          </Container>
        </Section>

        {/* Destination Tabs + Content */}
        <Section id="blog-hub-content" background="gray" padding="xl">
          <Container maxWidth="xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">Blog</li>
              </ol>
            </nav>

            {/* Destination Filter Tabs */}
            <div className="mb-8 border-b border-gray-300">
              <div className="flex flex-wrap gap-2 -mb-px">
                <Link
                  href="/blog"
                  className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                    !destination
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300"
                  }`}
                >
                  All Destinations
                  <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {total}
                  </span>
                </Link>
                {DESTINATIONS.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/blog/${dest.slug}`}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                      destination === dest.slug
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300"
                    }`}
                  >
                    {dest.name}
                    <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-full">
                      {destinationCountMap[dest.slug]}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog List */}
            <BlogListClient
              posts={posts}
              categories={categories}
              currentPage={currentPage}
              totalPages={totalPages}
              selectedCategory={category}
              totalPosts={total}
              destination={destination}
            />

            {/* Destination Quick Links - SEO internal linking */}
            <div className="mt-16 pt-12 border-t border-gray-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Browse by Destination
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {DESTINATIONS.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/blog/${dest.slug}`}
                    className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {destinationCountMap[dest.slug]} articles
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {dest.slug === "united-states" &&
                        "ESTA requirements, application guides, and travel tips for the United States."}
                      {dest.slug === "united-kingdom" &&
                        "UK ETA application help, requirements, and travel information for the United Kingdom."}
                      {dest.slug === "canada" &&
                        "Canada eTA guides, requirements, and tips for traveling to Canada."}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      View all articles
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
