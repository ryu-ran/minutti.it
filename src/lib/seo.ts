import type { Metadata } from "next";
import { site } from "@/data/site";

type PageSeo = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function createMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/images/og-editorial.svg",
  noIndex = false,
}: PageSeo = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : site.name;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: canonical,
      siteName: site.name,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} editorial cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}
