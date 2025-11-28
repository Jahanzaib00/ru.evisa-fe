/**
 * Blog Listing Page
 * Displays all published blog posts from backend API
 * NO PRISMA - Uses NestJS backend following Rails pattern
 *
 * PROFESSIONAL DESIGN:
 * - Uses YOUR Section/Container components
 * - Category filtering
 * - Pagination
 * - Search functionality
 * - Featured content
 * - Government-inspired design
 */

import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/app/lib/seo/metadata";
import { contentService } from "@/app/lib/api";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/home/Footer";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import BlogListClient from "@/app/components/content/BlogListClient";

type Props = {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
};

// Dynamic metadata generation based on filters
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const category = params.category;
  const searchQuery = params.search;

  // Build dynamic title and description
  let title = "ESTA Blog - Tips, Guides & Updates";
  let description =
    "Stay updated with the latest ESTA application tips, travel guides, and visa waiver program information. Expert advice for hassle-free US travel authorization.";

  if (searchQuery) {
    title = `Search results for "${searchQuery}" - ESTA Blog`;
    description = `Search results for "${searchQuery}" in our ESTA blog. Find tips, guides, and expert advice.`;
  } else if (category) {
    title = `${category} - ESTA Blog`;
    description = `Browse ${category} articles about ESTA applications, travel tips, and visa waiver program information.`;
  } else if (currentPage > 1) {
    title = `ESTA Blog - Page ${currentPage}`;
    description = `Browse ESTA blog articles - Page ${currentPage}. Expert travel tips and visa waiver program guides.`;
  }

  // Build canonical URL
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";
  let canonicalUrl = `${baseUrl}/blog`;
  if (category && !searchQuery && currentPage === 1) {
    canonicalUrl = `${baseUrl}/blog?category=${category}`;
  }

  const metadata = generateSEOMetadata({
    title,
    description,
    keywords: [
      "ESTA blog",
      "travel tips",
      "visa waiver",
      "US travel guide",
      "ESTA updates",
      "travel authorization tips",
    ],
    canonicalUrl,
  });

  // Add noindex for paginated/filtered pages to avoid duplicate content
  if (currentPage > 1 || searchQuery) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

export const revalidate = 3600; // Revalidate every hour

const POSTS_PER_PAGE = 12;

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const category = params.category;
  const searchQuery = params.search;

  // SERVER-SIDE PAGINATION - fetch only what we need
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const [response, categories] = await Promise.all([
    contentService.getBlogPosts({
      category,
      search: searchQuery,
      limit: POSTS_PER_PAGE,
      offset,
    }),
    contentService.getCategories("BLOG"),
  ]);

  const posts = response?.data || [];
  const total = response?.total || 0;
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Section id="blog-hero" background="primary" padding="lg">
          <Container maxWidth="lg">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                ESTA Blog & Travel Tips
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Expert guides and tips for your ESTA application and US travel.
                Stay informed with the latest updates and advice.
              </p>
            </div>
          </Container>
        </Section>

        {/* Blog List with Filters */}
        <Section id="blog-content" background="gray" padding="xl">
          <Container maxWidth="xl">
            <BlogListClient
              posts={posts}
              categories={categories}
              currentPage={currentPage}
              totalPages={totalPages}
              selectedCategory={category}
              searchQuery={searchQuery}
              totalPosts={total}
            />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
