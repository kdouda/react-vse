import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps,
} from 'react-router-dom';

import { NavLink, NavLinkProps } from 'src/shared/design-system';

type Props = Omit<NavLinkProps, 'as'> & ReactRouterNavLinkProps;

export function RouterNavLink(props: Props) {
  return <NavLink {...props} as={ReactRouterNavLink} />;
}
