import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy redirects for backward compatibility
      {
        source: "/apply",
        destination: "/united-states/apply",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/countries",
        destination: "/",
        permanent: true,
      },
      {
        source: "/countries/:country",
        destination: "/united-states/countries/esta-for-:country",
        permanent: true,
      },
      // ESTA guides (contain "esta" in slug)
      {
        source: "/guides/what-is-esta",
        destination: "/united-states/guide/what-is-esta",
        permanent: true,
      },
      {
        source: "/guides/esta-:slug",
        destination: "/united-states/guide/esta-:slug",
        permanent: true,
      },
      {
        source: "/guides/how-to-apply-esta",
        destination: "/united-states/guide/how-to-apply-esta",
        permanent: true,
      },
      {
        source: "/guides/check-esta-status",
        destination: "/united-states/guide/check-esta-status",
        permanent: true,
      },
      {
        source: "/guides/renew-esta",
        destination: "/united-states/guide/renew-esta",
        permanent: true,
      },
      {
        source: "/guides/passport-requirements-esta",
        destination: "/united-states/guide/passport-requirements-esta",
        permanent: true,
      },
      // UK ETA guides (contain "uk-eta" or "uk eta" in slug)
      {
        source: "/guides/what-is-uk-eta",
        destination: "/united-kingdom/guide/what-is-uk-eta",
        permanent: true,
      },
      {
        source: "/guides/uk-eta-:slug",
        destination: "/united-kingdom/guide/uk-eta-:slug",
        permanent: true,
      },
      {
        source: "/guides/how-to-apply-uk-eta",
        destination: "/united-kingdom/guide/how-to-apply-uk-eta",
        permanent: true,
      },
      {
        source: "/guides/check-uk-eta-status",
        destination: "/united-kingdom/guide/check-uk-eta-status",
        permanent: true,
      },
      {
        source: "/guides/renew-uk-eta",
        destination: "/united-kingdom/guide/renew-uk-eta",
        permanent: true,
      },
      {
        source: "/guides/passport-requirements-uk-eta",
        destination: "/united-kingdom/guide/passport-requirements-uk-eta",
        permanent: true,
      },
      // Global /guides index → redirect to homepage or US guides as default
      {
        source: "/guides",
        destination: "/united-states/guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
