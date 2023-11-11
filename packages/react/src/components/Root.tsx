import * as React from 'react';
import type { CommonProps } from '../helpers/props/common.prop';

interface RootProps extends CommonProps {
  background?: React.ReactNode;
  backgroundClassName?: string;
}

export const Root = ({
  className,
  children,
  background,
  backgroundClassName,
}: RootProps) => {
  return (
    <div className={className}>
      {children}
      {background && <div className={backgroundClassName}>{background}</div>}
    </div>
  );
};
