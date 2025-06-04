import React from 'react'

const DottedDivider = () => {
  return (
    <>
      <div 
        className="my-3 border-t-3 border-dotted opacity-25 w-full" 
        style={{ borderColor: 'var(--foreground)' }}
      />
      <div 
        className="my-3 border-t-3 border-dotted opacity-25 w-full" 
        style={{ borderColor: 'var(--foreground)' }}
      />
    </>
  )
}

export default DottedDivider