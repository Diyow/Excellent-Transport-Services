import { destinations } from '../../data/destinationsData';

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: toSlug(d.name) }));
}

export default function Layout({ children }) {
  return children;
}
