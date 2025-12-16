/**
 * Destination Blog Hub Page
 * /blog/united-states - All US ESTA content
 * /blog/united-kingdom - All UK ETA content
 * SEO-optimized destination-specific content hub
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import { contentService } from "@/app/lib/api";
import { getServiceBySlug } from "@/app/lib/config/services";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import BlogListClient from "@/app/components/content/BlogListClient";

type Props = {
  params: Promise<{ destination: string }>;
  searchParams: Promise<{ page?: string; category?: string }>;
};

// Map destination slugs to display names and service configs
const DESTINATION_MAP: Record<
  string,
  { name: string; slug: string; description: string }
> = {
  "united-states": {
    name: "United States",
    slug: "united-states",
    description:
      "Complete guides and tips for US ESTA applications, travel requirements, and visa waiver program information.",
  },
  "united-kingdom": {
    name: "United Kingdom",
    slug: "united-kingdom",
    description:
      "Everything you need to know about UK ETA applications, requirements, and traveling to the United Kingdom.",
  },
  canada: {
    name: "Canada",
    slug: "canada",
    description:
      "Comprehensive guides for Canadian travel authorization, eTA applications, and visitor requirements.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination } = await params;
  const destInfo = DESTINATION_MAP[destination];

  if (!destInfo) {
    return {
      title: "Destination Not Found",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";

  return generateSEOMetadata({
    title: `${destInfo.name} Travel Blog - Guides, Tips & Requirements`,
    description: destInfo.description,
    keywords: [
      `${destInfo.name} blog`,
      `${destInfo.name} travel`,
      `${destInfo.name} visa`,
      `${destInfo.name} requirements`,
      `${destInfo.name} travel guide`,
      `${destInfo.name} travel tips`,
    ],
    canonicalUrl: `${baseUrl}/blog/${destination}`,
  });
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const POSTS_PER_PAGE = 12;

export default async function DestinationBlogHub({
  params,
  searchParams,
}: Props) {
  const { destination } = await params;
  const destInfo = DESTINATION_MAP[destination];

  if (!destInfo) {
    notFound();
  }

  const searchParamsData = await searchParams;
  const currentPage = parseInt(searchParamsData.page || "1");
  const category = searchParamsData.category;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // Fetch destination-specific posts
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

  // Get service info for CTA
  const serviceSlug =
    destination === "united-states"
      ? "esta"
      : destination === "united-kingdom"
      ? "uk-eta"
      : "canada-eta";
  const service = getServiceBySlug(serviceSlug);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Destination Specific */}
        <Section id="destination-hub-hero" background="primary" padding="lg">
          <Container maxWidth="lg">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {destInfo.name} Travel Hub
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                {destInfo.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Blog Posts */}
        <Section id="destination-blog-content" background="gray" padding="xl">
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
                <li>
                  <a href="/blog" className="hover:text-blue-600">
                    Blog
                  </a>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">{destInfo.name}</li>
              </ol>
            </nav>

            <BlogListClient
              posts={posts}
              categories={categories}
              currentPage={currentPage}
              totalPages={totalPages}
              selectedCategory={category}
              totalPosts={total}
              destination={destination}
            />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
