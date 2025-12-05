import { tourPackages } from '../../data/packagesData';

export function generateStaticParams() {
  return tourPackages.map((pkg) => ({ slug: pkg.slug }));
}

export default function Layout({ children }) {
  return children;
}
