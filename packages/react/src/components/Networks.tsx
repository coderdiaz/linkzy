import type { CommonProps } from '../helpers/props/common.prop';

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
