'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

type StaticLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

/** Uses Next's link markup while forcing reliable static-host navigation. */
export function StaticLink({
  href,
  onClick,
  target,
  ...props
}: StaticLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const shouldUseBrowserNavigation =
      !event.defaultPrevented &&
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey &&
      (!target || target === '_self');

    if (!shouldUseBrowserNavigation) {
      return;
    }

    event.preventDefault();
    window.location.assign(href);
  };

  return <Link {...props} href={href} target={target} onClick={handleClick} />;
}
