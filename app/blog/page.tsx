import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import prisma from "../../lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | CINORIUM",
  description: "Insights, updates, and stories from the CINORIUM collective.",
  openGraph: {
    title: "Blog | CINORIUM",
    description: "Insights, updates, and stories from the CINORIUM collective.",
    url: "https://cinorium.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, updates, and stories from the CINORIUM collective.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground border border-border rounded-3xl bg-secondary/30">
            No posts found. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:border-primary/30"
              >
                {post.coverImage ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-sm uppercase tracking-widest font-bold">CINORIUM</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-muted-foreground mb-3 flex items-center justify-between">
                    <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="font-semibold text-primary">{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt ?? "Read this post..."}
                  </p>
                  <div className="mt-auto text-sm font-bold flex items-center gap-2 transition-transform group-hover:translate-x-1">
                    Read Post →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
