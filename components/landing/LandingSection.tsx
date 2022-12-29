import { classNames } from 'lib/utils/styles';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  size: 'md' | 'lg';
  children: ReactNode;
}

const LandingSection = ({ title, size, children }: Props) => {
  const titleClasses = classNames(size === 'md' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl');

  return (
    <div className="flex flex-col gap-4 md:gap-4 w-full max-w-3xl px-4">
      {title && <h2 className={titleClasses}>{title}</h2>}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default LandingSection;