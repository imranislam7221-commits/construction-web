'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

/**
 * Client-side motion wrapper so page files can stay Server Components
 * while still using scroll/entrance animations.
 */
export default function FadeIn({ children, ...props }: HTMLMotionProps<'div'>) {
  return <motion.div {...props}>{children}</motion.div>
}
