import { ReactNode } from 'react';

export default interface FullRoundButtonProps {
  children?: ReactNode;
  label?: string;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  active?: boolean;
  onClick?: (params: any) => any;
}
