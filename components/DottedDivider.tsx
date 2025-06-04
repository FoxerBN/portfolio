import React from 'react'

const DottedDivider = () => {
  return (
    <>
      <div 
        className="my-3 border-t-3 border-dotted opacity-45 w-full" 
        style={{ borderColor: 'var(--foreground)' }}
      />
      <div 
        className="my-3 border-t-3 border-dotted opacity-35 w-full" 
        style={{ borderColor: 'var(--foreground)' }}
      />
    </>
  )
}

export default DottedDivider