import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Label from '../ui/label';
interface ServicecardProps {
  title1: string;
  title2: string;
  link: string;
  img: string;
  variant: 'gray' | 'green' | 'dark';
}
const Servicecard: React.FC<ServicecardProps> = ({
  title1,
  title2,
  link,
  img,
  variant,
}) => {
  return (
    <div
      className={cn(
        'p-5 rounded-2xl border border-dark flex flex-col  lg:grid grid-cols-2 gap-5 shadow-[0px_5px_0px_0px_rgb(0,0,0)]',
        {
          'bg-green': variant === 'green',
        },
        {
          'bg-gray': variant === 'gray',
        },
        {
          'bg-dark': variant === 'dark',
        }
      )}
    >
      <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col">
          <Label
            label={<h3>{title1}</h3>}
            variant={
              variant === 'dark' || variant === 'gray'
                ? 'green'
                : 'gray'
            }
          />
          <Label
            label={<h3>{title2}</h3>}
            variant={
              variant === 'dark' || variant === 'gray'
                ? 'green'
                : 'gray'
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-5 w-full items-end">
          <Link
            href={link}
            className={cn('opacity-80 hover:opacity-100', {
              'text-white': variant === 'dark',
            })}
          >
            Learn more
          </Link>
          <div className="w-full aspect-square relative lg:hidden">
            <Image
              objectFit="contain"
              layout="fill"
              alt="service"
              src={img}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full relative hidden lg:flex">
        <Image
          objectFit="contain"
          layout="fill"
          alt="service"
          src={img}
        />
      </div>
    </div>
  );
};

export default Servicecard;
