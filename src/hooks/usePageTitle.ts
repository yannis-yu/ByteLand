import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageConfig, DEFAULT_TITLE } from "../config/pages";

export function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const config = getPageConfig(location.pathname);

    // If we have a config with a metaTitle, use it
    if (config?.metaTitle) {
      document.title = config.metaTitle;
    } else if (config?.title) {
      // Fallback to simple title if metaTitle isn't defined but title is
      document.title = `${config.title} - ByteLand Technology`;
    } else if (location.pathname === "/") {
      // Home page
      document.title = DEFAULT_TITLE;
    }
    // For other cases (like specific blog posts or projects),
    // we assume the page component itself will handle the more specific title update
    // or we leave the previous title (which might be suboptimal,
    // but usually user navigates from a known page).
    // Actually, it's safer to not set a default "Unknown" title
    // to avoid overwriting a specific title set by a component
    // if this effect runs later or in conflict.
    // However, for clean navigation, resetting to a default if unknown is often good
    // IF we are sure we cover all static bases.
  }, [location]);
}
