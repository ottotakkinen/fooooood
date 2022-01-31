import React from 'react';

const Button = ({ variant = 'primary', children, ...rest }) => {
  let classNames;
  if (variant === 'primary') {
    classNames =
      'py-2 px-4 w-full font-bold rounded-full bg-yellow-300 text-slate-900 shadow-md';
  }
  if (variant === 'secondary') {
    classNames = 'w-full py-2 px-4 bg-zinc-800 text-slate-50 rounded-full';
  }
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
