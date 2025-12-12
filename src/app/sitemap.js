import { tourPackages } from './data/packagesData';
import { activities } from './data/activitiesData';
import { destinations } from './data/destinationsData';

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

export default function sitemap() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extransportservice.com/';
  const now = new Date().toISOString();

  const baseRoutes = [
    { url: `${site}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${site}/all-packages`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site}/all-activities`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site}/all-destinations`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site}/transportation`, changeFrequency: 'monthly', priority: 0.7 },
  ].map((r) => ({ ...r, lastModified: now }));

  const packageRoutes = tourPackages.map((p) => ({
    url: `${site}/all-packages/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const activityRoutes = activities.map((a) => ({
    url: `${site}/all-activities/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${site}/all-destinations/${toSlug(d.name)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...baseRoutes, ...packageRoutes, ...activityRoutes, ...destinationRoutes];
}

