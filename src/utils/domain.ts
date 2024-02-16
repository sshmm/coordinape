import { STORAGE_URL } from '../config/env';

function hostname(): string {
  if (typeof window !== 'undefined') {
    // this will always be true until we move to nextjs
    return window.location.hostname;
  }
  // TODONEXT: if this matters and remains, we would use useRouter here -g
  return 'server-side-fixme';
}

function origin(): string {
  if (typeof window !== 'undefined') {
    // this will always be true until we move to nextjs
    return window.location.origin;
  }
  // TODONEXT: if this matters and remains, we would use useRouter here -g
  return 'fixme-origin';
}

export const DOMAIN_IS_PREVIEW = hostname().match(
  /(costaging\.co|vercel\.app)$/
);

export const DOMAIN_IS_LOCALHOST = hostname().match(
  /(localhost|127\.0\.0\.1|colinks\.local|colinks\.co\.local)/
);

export const APP_URL = origin();

export const getAvatarPath = (avatar?: string) => {
  if (!avatar) return;

  // dont transform if its already a URL
  if (avatar.startsWith('https://')) {
    return avatar;
  }

  if (avatar.startsWith('http://')) {
    return avatar;
  }

  if (avatar.startsWith('blob')) {
    return avatar;
  }

  // don't transform if it's a local image (e.g. Storybook)
  if (avatar.startsWith('../imgs') || avatar.startsWith('/imgs')) {
    return avatar;
  }

  return `${STORAGE_URL}/${avatar}`;
};

export const getInitialFromName = (name: string) => {
  const hasSpace = name.indexOf(' ') !== -1;
  const initials =
    name.substring(0, hasSpace ? 1 : 2) +
    (hasSpace ? name.charAt(name.lastIndexOf(' ') + 1) : '').toUpperCase();
  return initials.toUpperCase();
  // Returns PE if name is "Peter Edwards"
  // Returns PR if name is "Peter Edwards Roman"
  // Returns PR if name is "Preben"
};
