import type { CommonProps } from '../helpers/props/common.prop';

/**
 * Networks
 */
interface NetworksProps extends CommonProps {}
export const Networks = ({ children, className }: NetworksProps) => {
  return <div className={className}>{children}</div>;
};

/**
 * Network
 */
interface NetworkProps
  extends CommonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  url?: string;
}
export const Network = ({
  className,
  children,
  target = '_blank',
  url,
  ...props
}: NetworkProps) => {
  return (
    <a
      className={className}
      href={url}
      target={target}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
