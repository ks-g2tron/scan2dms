import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scan2dms.com";

  const routes = [
    "",
    "/solutions/scan-to-sharepoint",
    "/solutions/scan-to-onedrive",
    "/solutions/scan-to-network-folder",
    "/solutions/scan-to-email",
    "/industries/legal",
    "/industries/finance",
    "/industries/healthcare",
    "/industries/education",
    "/products/escan-a450-pro",
    "/guides/what-is-scan-to-dms",
    "/guides/why-pc-free-scanning",
    "/guides/sharepoint-scanner-setup",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/solutions/scan-to-sharepoint" ? 0.9 : 0.7,
  }));
}
