import * as React from 'react';
import type { CommonProps } from 'common/types';
import { Head, Avatar, Content, Title, Bio } from './Head';
import { Group, Link } from './Elements';

interface RootProps extends CommonProps {
  background?: React.ReactNode;
  backgroundClassName?: string;
}

const Root = ({
  className,
  children,
  background,
  backgroundClassName,
}: RootProps) => {
  return (
    <div className={className}>
      <div className="content">{children}</div>
      <div className={backgroundClassName}>{background}</div>
    </div>
  );
};

export { Root, Head, Avatar, Content, Title, Bio, Group, Link };
