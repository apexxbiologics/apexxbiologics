import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.apexxbiolabs.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/terms",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/refunds",
      lastModified: new Date(),
    },
    {
      url: "https://www.apexxbiolabs.com/shipping",
      lastModified: new Date(),
    },
  ];
}