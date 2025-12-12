import { destinations } from '../../data/destinationsData';

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: toSlug(d.name) }));
}

export default function Layout({ children }) {
  return children;
}

export function generateMetadata({ params }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extransportservice.com/';
  const dest = destinations.find((d) => toSlug(d.name) === params.slug);
  const title = dest ? `${dest.name} | Excellent Transport Service` : `Destination | Excellent Transport Service`;
  const description = dest ? dest.description : 'Discover top Bali destinations with comfortable private transport.';
  const canonical = `${site}/all-destinations/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Excellent Transport Service',
      images: dest?.image ? [{ url: dest.image, width: 1200, height: 630, alt: dest.name }] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: dest?.image ? [dest.image] : undefined,
    },
  };
}
