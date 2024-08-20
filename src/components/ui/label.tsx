import { cn } from '@/lib/utils';
import React from 'react';
interface LabelProps {
  label: React.ReactNode;
  variant?: 'gray' | 'green';
}
const Label: React.FC<LabelProps> = ({
  label,
  variant = 'green',
}) => {
  return (
    <div
      className={cn(
        'py-1 px-2 rounded-xl  w-max h-max',
        {
          'bg-gray': variant === 'gray',
        },
        {
          'bg-green': variant === 'green',
        }
      )}
    >
      {label}
    </div>
  );
};

export default Label;
