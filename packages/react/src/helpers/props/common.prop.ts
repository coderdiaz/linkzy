export type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

export type CommonPropsWithoutChildren = Omit<CommonProps, 'children'>;
