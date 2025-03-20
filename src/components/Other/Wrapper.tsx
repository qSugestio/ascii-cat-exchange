import React from 'react'

const Wrapper = ({
  children,
  title,
}: Readonly<{ children: React.ReactNode; title: string }>) => {
  return (
    <div className='bg-(--background-secondary) border-(--border) border-4 rounded-lg p-5 m-2'>
      <h1 className='text-2xl'>{title}</h1>
      {children}
    </div>
  )
}

export default Wrapper
