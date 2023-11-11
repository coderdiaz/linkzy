import * as React from 'react';
import type { CommonProps } from 'common/types';

/**
 * Group
 */
interface GroupProps extends CommonProps {}
export const Group = ({ children, className }: GroupProps) => {
  return <div className={className}>{children}</div>;
};

/**
 * Link
 */
interface LinkProps {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}
export const Link = ({ label, href, icon }: LinkProps) => {
  return (
    <a href={href} rel="noreferrer noopener">
      {icon && icon}
      {label}
    </a>
  );
};
