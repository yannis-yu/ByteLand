import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Loader, AlertTriangle, ArrowLeft } from "lucide-react";
import Page from "../components/Page";
import { FooterConfig } from "../components/Footer";
import MarkdownRenderer from "../components/MarkdownRenderer";

interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  author: string;
  slug: string;
  contentPath: string;
}

/**
 * Strips the YAML frontmatter from the beginning of a markdown file.
 * @param markdown The raw markdown content.
 * @returns The markdown content without the frontmatter.
 */
function stripFrontmatter(markdown: string): string {
  const frontmatterRegex = /^---([\s\S]*?)---/;
  const match = markdown.match(frontmatterRegex);
  if (match) {
    return markdown.substring(match[0].length).trim();
  }
  return markdown;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{
    metadata: PostMetadata;
    content: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPostData() {
      try {
        setLoading(true);
        // Step 1: Fetch the index
        const indexResponse = await fetch("/blog-index.json");
        if (!indexResponse.ok) throw new Error("Could not fetch blog index.");
        const index: PostMetadata[] = await indexResponse.json();

        // Step 2: Find the post metadata by slug
        const metadata = index.find((p) => p.slug === slug);
        if (!metadata) throw new Error("Post not found.");

        // Step 3: Fetch the markdown content
        const contentResponse = await fetch(metadata.contentPath);
        if (!contentResponse.ok)
          throw new Error("Could not fetch post content.");
        const rawContent = await contentResponse.text();

        // Step 4: Strip frontmatter before setting state
        const content = stripFrontmatter(rawContent);

        setPost({ metadata, content });
      } catch (e: any) {
        setError(e.message);
        console.error("Failed to fetch post:", e);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPostData();
    }
  }, [slug]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-32">
          <Loader className="w-16 h-16 text-rgb-blue animate-spin" />
        </div>
      );
    }

    if (error || !post) {
      return (
        <div className="flex flex-col items-center justify-center py-32 bg-red-50 text-red-700 rounded-lg">
          <AlertTriangle className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">
            {error ? "Error Loading Post" : "Post Not Found"}
          </h2>
          <p>{error || "The requested blog post could not be found."}</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center px-6 py-2 rounded-full bg-rgb-blue text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      );
    }

    return (
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Post Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {post.metadata.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-md text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.metadata.author}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {post.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-semibold text-slate-600 bg-slate-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <MarkdownRenderer
          content={post.content}
          basePath={post.metadata.contentPath.substring(
            0,
            post.metadata.contentPath.lastIndexOf("/")
          )}
        />
      </motion.article>
    );
  };

  const footerConfig: FooterConfig = {
    variant: "grid",
    brand: {
      title: "ByteLog",
      description: "Insights and updates from the ByteLand team.",
      icon: "/assets/images/bytelog-icon.svg",
    },
    links: [
      {
        title: "Links",
        items: [
          { label: "Home", to: "/" },
          { label: "Products", to: "/#products" },
        ],
      },
    ],
    socials: true,
  };

  return (
    <Page footerConfig={footerConfig} className="bg-white">
      <div className="pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </div>
    </Page>
  );
}
