import { Link as ReactRouterLink } from 'react-router-dom';

import { forwardRef, Link, LinkProps } from 'src/shared/design-system';

type Props = Omit<LinkProps, 'as'>;

export const RouterLink = forwardRef(function RouterLink(props: Props, ref) {
  return <Link as={ReactRouterLink} ref={ref} {...props} />;
});
