import * as React from 'react';
import type { CommonProps } from '../helpers/props/common.prop';

/**
 * Group
 */
interface GroupProps extends CommonProps {}
export const Group = ({ children, className }: GroupProps) => {
  return (
    <div className={className} data-testid="group">
      {children}
    </div>
  );
};

/**
 * Link
 */
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: React.ReactNode;
}
export const Link = ({
  label,
  icon,
  target = '_blank',
  ...props
}: LinkProps) => {
  return (
    <a rel="noreferrer noopener" target={target} data-testid="link" {...props}>
      {icon && <div data-testid="icon">{icon}</div>}
      {label}
    </a>
  );
};
