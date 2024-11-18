import React from 'react';

const PageTemplate = ({
  children,
  title,
}: {
  children?: any;
  title?: string;
}) => {
  return (
    <div className='w-full px-5'>
      <h1 className='text-5xl font-thin'>{title}</h1>
      <div className='mt-14'>{children}</div>
    </div>
  );
};

export default PageTemplate;
