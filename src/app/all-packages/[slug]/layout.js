import { tourPackages } from '../../data/packagesData';

export function generateStaticParams() {
  return tourPackages.map((pkg) => ({ slug: pkg.slug }));
}

export default function Layout({ children }) {
  return children;
}

export function generateMetadata({ params }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extransportservice.com/';
  const pkg = tourPackages.find((p) => p.slug === params.slug);
  const title = pkg ? `${pkg.name} | Excellent Transport Service` : `Tour Package | Excellent Transport Service`;
  const description = pkg ? pkg.description : 'Discover our Bali tour packages with private transport and curated experiences.';
  const canonical = `${site}/all-packages/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Excellent Transport Service',
      images: pkg?.image ? [{ url: pkg.image, width: 1200, height: 630, alt: pkg.name }] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: pkg?.image ? [pkg.image] : undefined,
    },
  };
}
