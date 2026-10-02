import React from 'react'
import {
  AnimatePresence,
  motion,
  type AnimatePresenceProps,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
} from 'framer-motion'

const DEFAULT_TRANSITION: Transition = { duration: 0.15, ease: 'easeOut' }

export interface AnimatedContainerProps {
  children?: React.ReactNode
  activeKey?: string | number | null
  mode?: AnimatePresenceProps['mode']
  initialPresence?: boolean
  className?: string
  initial?: boolean | TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels | boolean
  exit?: TargetAndTransition | VariantLabels
  transition?: Transition
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  activeKey = 'animated-container',
  mode = 'wait',
  initialPresence = false,
  className = '',
  initial = { opacity: 0, y: 8 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -8 },
  transition = DEFAULT_TRANSITION,
}) => {
  return (
    <AnimatePresence mode={mode} initial={initialPresence}>
      {activeKey ? (
        <motion.div
          key={activeKey}
          className={className}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default AnimatedContainer
