import { activities } from '../../data/activitiesData';

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export default function Layout({ children }) {
  return children;
}
