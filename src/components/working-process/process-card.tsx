import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Icons } from '../icons';

interface ProcesscardProps {
  title: string;
  index: number;
  desc: string;
}

const Processcard: React.FC<ProcesscardProps> = ({
  title,
  index,
  desc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'p-5 bg-gray shadow-[5px_5px_0px_0px_rgb(0,0,0)] rounded-xl border border-dark',
        {
          'bg-green transition-all': isOpen,
        }
      )}
    >
      <div
        className={cn(
          'flex flex-row justify-between items-center',
          {
            'pb-3': isOpen,
          }
        )}
      >
        <div className="flex flex-row gap-2 items-center">
          <h2>{index + 1}</h2>
          <h3 className="line-clamp-1">{title}</h3>
        </div>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="flex justify-center items-center p-1 h-[30px] w-[30px] lg:h-[38px] lg:w-[38px] bg-gray rounded-full border border-dark"
        >
          {isOpen ? (
            <Icons.minus_icon />
          ) : (
            <Icons.plus_icon />
          )}
        </button>
      </div>
      {isOpen && (
        <p className="pt-3 border-t border-dark">{desc}</p>
      )}
    </div>
  );
};

export default Processcard;
