import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Box1 = () => {

    const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className='box-cont'>
        <motion.div className='box'
        animate={{
            x: isAnimating ? "700px" : 0,
            opacity: isAnimating ? 1 : 0.4,
            backgroundColor: isAnimating ? "blue" : "bg-slate-300",
            rotate:isAnimating ? 360 : 0
        }}

        initial={{
            opacity:"0.1"
        }}

        transition={{
            type:'spring',
            stiffness:"200"
        }}

        onClick = {() => setIsAnimating(!isAnimating)}
        >

        </motion.div>
    </div>
  )
}

export default Box1