'use client';
import CountUp from 'react-countup' // npm package

const AnimatedCounter = ({ amount } : { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp
        duration={3} 
        decimals={2}
        decimal="."
        prefix='$'
        end={amount} />
    </div>
    // replaced div with span to fix nested <div> inside a <p> tag hydration error
  )
}

export default AnimatedCounter
