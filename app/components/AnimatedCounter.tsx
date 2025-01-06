'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
   

        <CountUp 
       start={0}
       duration={2.75}
       decimals={2}
       decimal=","
       prefix="$ "
       end={amount} />
       )
}

export default AnimatedCounter