export const transition = {
  default: { type: "spring", stiffness: 100, damping: 20 },
  smooth: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.8 },
  reveal: { type: "spring", stiffness: 50, damping: 20, mass: 1 }
};

export const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: transition.reveal
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
