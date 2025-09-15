import './GradientText.css';
import { motion } from 'framer-motion';

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <motion.div 
      className={`animated-gradient-text ${className}`}
      layout
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.4
      }}
    >
      {showBorder && (
        <motion.div 
          className="gradient-overlay" 
          style={gradientStyle}
          layout
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.4
          }}
        />
      )}
      <motion.div 
        className="text-content" 
        style={gradientStyle}
        layout
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.4
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
