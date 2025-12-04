import fs from "fs";
import path from "path";

// Define types for post metadata
interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  author: string;
  slug: string;
  contentPath?: string; // Will be added during generation
}

const postsDir = path.join(process.cwd(), "public", "posts");
const publicDir = path.join(process.cwd(), "public");
const outputFile = path.join(publicDir, "blog-index.json");

/**
 * Parses YAML frontmatter from a markdown file.
 * A simple regex-based parser, not a full YAML parser.
 * @param fileContent - The full content of the markdown file.
 * @returns An object with metadata and the remaining content.
 */
function parseFrontmatter(fileContent: string): {
  metadata: Partial<PostMetadata>;
  content: string;
} {
  const frontmatterMatch = fileContent.match(/^---([\s\S]*?)---/);
  if (!frontmatterMatch) {
    return { metadata: {}, content: fileContent };
  }

  const frontmatter = frontmatterMatch[1];
  const content = fileContent.substring(frontmatterMatch[0].length).trim();

  const metadata: Partial<PostMetadata> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      const value = valueParts
        .join(":")
        .trim()
        .replace(/(^"|"$)/g, ""); // Simple string unquoting

      const trimmedKey = key.trim() as keyof PostMetadata;

      if (trimmedKey === "tags") {
        metadata[trimmedKey] = value
          .replace(/[\[\]"']/g, "")
          .split(",")
          .map((tag) => tag.trim());
      } else if (trimmedKey) {
        metadata[trimmedKey] = value as any;
      }
    }
  });

  return { metadata, content };
}

/**
 * Generates a JSON index of all blog posts.
 */
function generateIndex() {
  try {
    if (!fs.existsSync(postsDir)) {
      console.log("Posts directory not found. Skipping index generation.");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
      return;
    }

    const postFiles = fs
      .readdirSync(postsDir)
      .filter((file) => file.endsWith(".md"));

    const index: PostMetadata[] = postFiles.map((fileName) => {
      const filePath = path.join(postsDir, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { metadata } = parseFrontmatter(fileContent);

      return {
        ...(metadata as PostMetadata),
        contentPath: `/${path.join("posts", fileName)}`.replace(/\\/g, "/"),
      };
    });

    // Sort posts by date, newest first
    index.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
    console.log(
      `✅ Blog index generated successfully with ${index.length} posts.`
    );
    console.log(`   Output file: ${outputFile}`);
  } catch (error) {
    console.error("❌ Error generating blog index:", error);
    process.exit(1);
  }
}

generateIndex();
