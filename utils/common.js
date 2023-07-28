export const variant = {
  squareVariants: {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.9 },
  },
  moveLeft: {
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5} },
    hidden: { opacity: 0, translateY: -100 },
  },
  moveUp: {
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, translateY: 100 },
  },
};
