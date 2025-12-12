import { activities } from '../../data/activitiesData';

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export default function Layout({ children }) {
  return children;
}

export function generateMetadata({ params }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extransportservice.com/';
  const act = activities.find((a) => a.slug === params.slug);
  const title = act ? `${act.name} | Excellent Transport Service` : `Activity | Excellent Transport Service`;
  const description = act ? act.description : 'Explore Bali activities with private transport and local guidance.';
  const canonical = `${site}/all-activities/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Excellent Transport Service',
      images: act?.image ? [{ url: act.image, width: 1200, height: 630, alt: act.name }] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: act?.image ? [act.image] : undefined,
    },
  };
}
