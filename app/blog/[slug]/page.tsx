import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import prisma from "../../../lib/prisma";
import BlogRating from "../../components/BlogRating";
import SocialShare from "../../components/SocialShare";
import { calculateReadTime } from "../../../lib/blog-utils";
import { marked } from "marked";

export const dynamic = "force-dynamic";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on CINORIUM.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on CINORIUM.`,
      url: `https://cinorium.com/blog/${post.slug}`,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} on CINORIUM.`,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    notFound();
  }

  const readTime = post.readTime || calculateReadTime(post.content);

  // Schema.org JSON-LD for the Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage ? [post.coverImage] : [],
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: [
      {
        "@type": "Organization",
        name: post.author,
        url: "https://cinorium.com",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          ← Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Article Content */}
          <div className="lg:w-2/3">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{readTime}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>By {post.author}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {post.coverImage && (
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-12 border border-border">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <article className="mb-16">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: marked.parse(String(post.content).trim()) }}
              />
            </article>

            {/* Rating Component */}
            <BlogRating 
              postId={post.id} 
              initialRatingSum={post.ratingSum} 
              initialRatingCount={post.ratingCount} 
            />
          </div>

          {/* Sidebar / Sharing */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 p-8 rounded-3xl bg-secondary/30 border border-border/50">
              <SocialShare 
                title={post.title} 
                url={`https://cinorium.com/blog/${post.slug}`} 
              />
              
              <div className="mt-12 pt-12 border-t border-border/50">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-4">About the Collective</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CINORIUM is a creative collective of specialized studios building brands, digital platforms, and growth systems for modern businesses.
                </p>
                <div className="mt-6">
                   <Link href="/contact" className="text-sm font-bold text-primary hover:underline">
                     Start a project with us →
                   </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

      </main>

      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

