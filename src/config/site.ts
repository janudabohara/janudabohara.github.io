export type ProfileDestination = {
  label: string;
  href?: string;
};

export const siteConfig = {
  name: 'Januda Bohara',
  fullName: 'Bohara Satharasinghe',
  role: 'Pre-University Research Assistant',
  organization: 'Multidisciplinary AI Research Centre, University of Peradeniya',
  location: 'Peradeniya, Sri Lanka',
  email: 'bohara.sat@gmail.com',
  description:
    'Research-minded work across machine learning, software, electronics, mobile interfaces, and collaborative projects.',
  connect: [
    { label: 'GitHub' },
    { label: 'Email', href: 'mailto:bohara.sat@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/janudaa' },
    { label: 'Discord' },
  ] satisfies ProfileDestination[],
  credentials: [
    { label: 'Credly' },
    { label: 'Google Developer Program' },
  ] satisfies ProfileDestination[],
  affiliations: {
    marc: 'https://marc.pdn.ac.lk/',
    university: 'https://www.pdn.ac.lk/',
  },
} as const;

type PublishedDestination = ProfileDestination & { href: string };

const hasHref = (destination: ProfileDestination): destination is PublishedDestination =>
  typeof destination.href === 'string' && destination.href.length > 0;

export const publishedConnect = (siteConfig.connect as readonly ProfileDestination[]).filter(hasHref);
export const publishedCredentials = (siteConfig.credentials as readonly ProfileDestination[]).filter(hasHref);
