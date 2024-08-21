import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'py-2 w-max text-white px-3 flex items-center justify-center rounded-2xl bg-dark hover:opacity-80 transition-all',
        {
          'w-full': fullWidth,
        }
      )}
    >
      {label}
    </button>
  );
};

export default Button;
