import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Box3 = () => {

    const boxVr = {
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:"0",
            transition:{
                delay:0.5,
                when:"beforeChildren"
            }
        }
    }

    const listV = {
        hidden:{
            x:-10,
            opacity:0
        },
        visible:{
            x:"0",
            opacity:1,
            staggerChildren: 2
        }
    }
  return (
    <div className='box-cont'>
        <motion.div className='box'
        variants={boxVr}
        animate="visible"
        initial="hidden"
        >
            {
                [1,2,3].map(box => {
                    return(
                        <motion.li 
                        className='boxItem'
                        variants={listV}
                        >
                        </motion.li>
                    )
                    
                })
            }
        </motion.div>
    </div>
  )
}

export default Box3