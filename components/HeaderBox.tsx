import React from 'react'
// classNames are mostly from globals.css

const HeaderBox = ({ type = "title", title, user, subtext }: HeaderBoxProps) => { // uses HeaderBox props from index.d.ts, declared in page.tsx
  return (
    <div className='header-box'>
      <h1 className="header-box-title">
        {title}
        {type == 'greeting' && (
            <span className='text-bankGradient'>
              &nbsp;{user}  
            </span>
        )}
      </h1>
      <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox