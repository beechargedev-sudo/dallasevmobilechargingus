import NextLink from 'next/link';
import type { ComponentProps } from 'react';

/** Site link. Prefetch is off: menus and footers list 200+ URLs and must not trigger a prefetch storm. */
export function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
