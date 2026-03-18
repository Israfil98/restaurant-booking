import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface IAnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'p';
  mode?: 'load' | 'scroll';
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedElement = ({
  children,
  delay = 0,
  className = '',
  as = 'div',
  mode = 'load',
}: IAnimatedElementProps) => {
  const Tag = motion[as];

  const animationProps =
    mode === 'scroll'
      ? {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true },
        }
      : {
          initial: 'hidden',
          animate: 'visible',
        };

  return (
    <Tag
      variants={variants}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...animationProps}
    >
      {children}
    </Tag>
  );
};

export default AnimatedElement;
