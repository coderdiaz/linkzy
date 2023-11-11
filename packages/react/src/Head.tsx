import * as React from 'react';
import type { CommonProps, CommonPropsWithoutChildren } from 'common/types';

/**
 * Head component
 */
interface HeadProps extends CommonProps {}

export const Head = ({ children, className }: HeadProps) => {
  return <div className={className}>{children}</div>;
};

/**
 * Avatar component
 */
interface AvatarProps extends CommonProps {}

export const Avatar = ({ children, className }: AvatarProps) => {
  return <div className={className}>{children}</div>;
};

/**
 * Content component
 */
interface ContentProps extends CommonProps {}

export const Content = ({ children, className }: ContentProps) => {
  return <div className={className}>{children}</div>;
};

/**
 * Title component
 */
interface TitleProps extends CommonPropsWithoutChildren {
  label?: string;
}

export const Title = ({ className, label }: TitleProps) => {
  return <h1 className={className}>{label}</h1>;
};

/**
 * Bio component
 */
interface BioProps extends CommonProps {}
export const Bio = ({ children, className }: BioProps) => {
  return <div className={className}>{children}</div>;
};
