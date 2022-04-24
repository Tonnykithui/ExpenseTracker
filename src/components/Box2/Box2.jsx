import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Box2 = () => {

  return (
    <div className='box-cont'>
        <motion.div className='box'
        drag

        dragConstraints={{
            right:480,
            left:0,
            top:0,
            bottom:480
        }}
        whileHover={{
            scale:1.2
        }}

        whileTap={{
            scale: 0.9
        }}
        >

        </motion.div>
    </div>
  )
}

export default Box2