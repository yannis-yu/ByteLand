import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Code,
  Loader2,
} from "lucide-react";
import Page from "../components/Page";
import { FooterConfig } from "../components/Footer";
import { projects, Project } from "../data/projects";
import MarkdownRenderer from "../components/MarkdownRenderer";

export default function OpenLandProject() {
  const params = useParams<{ projectId: string; "*": string }>();
  const projectId = params.projectId;
  const subPath = params["*"];

  const [project, setProject] = useState<Project | null>(null);
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject || null);

    if (foundProject) {
      document.title = `${foundProject.name} - ByteLand OpenLand`;

      // Determine URL to fetch
      // Base raw URL (directory of README)
      const baseRawUrl = foundProject.readmeUrl.substring(
        0,
        foundProject.readmeUrl.lastIndexOf("/")
      );

      let fetchUrl = foundProject.readmeUrl;
      if (subPath) {
        // If we have a subpath, append it to base raw URL
        // Ensure subPath doesn't start with / to avoid double slashes if base ends with one
        const cleanSubPath = subPath.startsWith("/")
          ? subPath.substring(1)
          : subPath;
        fetchUrl = `${baseRawUrl}/${cleanSubPath}`;
      }

      // Fetch content from GitHub
      setIsLoading(true);
      setError(null);
      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch content: ${response.status}`);
          }
          return response.text();
        })
        .then((content) => {
          setReadmeContent(content);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [projectId, subPath]);

  const footerConfig: FooterConfig = {
    variant: "grid",
    brand: {
      title: "OpenLand",
      description: "Open Source contributions from ByteLand.",
      icon: "/assets/images/logo.svg", // Using main logo for now, or could use specific icon
    },
    links: [
      {
        title: "Links",
        items: [
          { label: "Home", to: "/" },
          { label: "Products", to: "/#products" },
          { label: "Open Source", to: "/opensource" },
          { label: "About", to: "/about" },
        ],
      },
    ],
    socials: true,
  };

  // Derive base paths for renderer
  const getRendererProps = () => {
    if (!project) return {};

    const baseRawUrl = project.readmeUrl.substring(
      0,
      project.readmeUrl.lastIndexOf("/")
    );

    // Calculate relative directory of current file
    let currentDirRel = "";
    if (subPath) {
      // e.g., "docs/api/README.md" -> "docs/api"
      const lastSlash = subPath.lastIndexOf("/");
      if (lastSlash !== -1) {
        currentDirRel = subPath.substring(0, lastSlash);
      }
    }

    // Current file raw directory (already correct in previous code, but clarifying logic)
    const currentFileDir = currentDirRel
      ? `${baseRawUrl}/${currentDirRel}`
      : baseRawUrl;

    // Link base path (blob) needs to point to current directory too
    const repoBlobRoot = baseRawUrl
      .replace("raw.githubusercontent.com", "github.com")
      .replace(/\/([^/]+)\/([^/]+)\/([^/]+)/, "/$1/$2/blob/$3");

    const currentLinkBase = currentDirRel
      ? `${repoBlobRoot}/${currentDirRel}`
      : repoBlobRoot;

    // Route base for internal navigation needs to point to current directory
    const currentRouteBase = currentDirRel
      ? `/opensource/${project.id}/${currentDirRel}`
      : `/opensource/${project.id}`;

    return {
      basePath: currentFileDir,
      linkBasePath: currentLinkBase,
      routeBase: currentRouteBase,
    };
  };

  if (!project) {
    if (!projectId) return null; // Or loading state

    return (
      <Page footerConfig={footerConfig} className="bg-white">
        <div className="flex flex-col items-center justify-center py-32 bg-red-50 text-red-700 rounded-lg max-w-3xl mx-auto mt-20">
          <AlertTriangle className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
          <p>The requested open source project could not be found.</p>
          <Link
            to="/opensource"
            className="mt-8 inline-flex items-center px-6 py-2 rounded-full bg-rgb-blue text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Open Source
          </Link>
        </div>
      </Page>
    );
  }

  const rendererProps = getRendererProps();

  return (
    <Page footerConfig={footerConfig} className="bg-white">
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/opensource"
            className="inline-flex items-center text-slate-500 hover:text-rgb-blue mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Open Source
          </Link>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Project Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-rgb-blue">
                  <project.icon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-2 text-slate-600">
                    <div className="flex items-center gap-1.5 text-sm font-medium bg-slate-100 px-2.5 py-0.5 rounded-full">
                      <Code className="w-3.5 h-3.5" />
                      {project.language}
                    </div>
                  </div>
                </div>
              </div>

              {/* Show description only on main project page */}
              {!subPath && (
                <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                  {project.description}
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-rgb-blue transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </header>

            <div className="h-px bg-slate-200 w-full mb-12"></div>

            {/* Project Content (README) */}
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-rgb-blue" />
                <span className="ml-3 text-slate-500">Loading Content...</span>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-16 text-red-600">
                <AlertTriangle className="w-8 h-8 mb-2" />
                <p>Failed to load content: {error}</p>
              </div>
            ) : (
              <MarkdownRenderer
                content={readmeContent}
                basePath={rendererProps.basePath}
                linkBasePath={rendererProps.linkBasePath}
                routeBase={rendererProps.routeBase}
              />
            )}
          </motion.article>
        </div>
      </div>
    </Page>
  );
}
