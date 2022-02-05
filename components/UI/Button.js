import { useEffect } from 'react';
import { useState } from 'react';

const Button = ({ variant = 'primary', loading, children, ...rest }) => {
  const [classNames, setClassNames] = useState('');
  useEffect(() => {
    if (variant === 'primary') {
      setClassNames(
        'py-2 px-4 w-full font-bold rounded-full bg-yellow-300 text-slate-900 shadow-md active:scale-95'
      );
    } else if (variant === 'secondary') {
      setClassNames(
        'w-full py-2 px-4 bg-zinc-800 text-slate-50 rounded-full active:scale-95'
      );
    } else if (variant === 'simple') {
      setClassNames('w-full py-2 px-4 underline rounded-full active:scale-95');
    }
  }, [variant]);

  useEffect(() => {
    if (loading) {
      setClassNames((p) => p + ' bg-slate-300 scale-95 shadow-none');
    }
    if (!loading) {
      if (variant === 'primary') {
        setClassNames(
          'py-2 px-4 w-full font-bold rounded-full bg-yellow-300 text-slate-900 shadow-md active:scale-95'
        );
      } else if (variant === 'secondary') {
        setClassNames(
          'w-full py-2 px-4 bg-zinc-800 text-slate-50 rounded-full active:scale-95'
        );
      } else if (variant === 'simple') {
        setClassNames(
          'w-full py-2 px-4 underline rounded-full active:scale-95'
        );
      }
    }
  }, [loading, variant]);

  return (
    <button disabled={loading} className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
