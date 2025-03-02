import {motion} from 'framer-motion'

const WaveEffects = () => {
    const boxes = Array.from({length: 5})
  return (
    <div className='flex space-x-2'>
        {boxes.map((_, index) => (
            <motion.div key={index} className='w-32 h-32 bg-teal-500'
             animate={{y: [0, -20, 0]}}
             transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: index * 0.1
             }}
            />
        ))}
    </div>
  )
}

export default WaveEffects