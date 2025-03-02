import {motion} from 'framer-motion'

const ZigZagAnimation = () => {
  return (
    <motion.div className='w-32 h-32 rounded-full bg-amber-500' 
     animate={{x: [0, 50, 0, -50, 0], y: [0, 50, 0, 50, 0]}}
     transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
     }}
    />
  )
}

export default ZigZagAnimation