export const pageVariants = {
  initial: {
    overflow: 'hidden',
    '--translate': '210%',
    transform: 'translateY(var(--translate))',
    opacity: '0%',
  },
  in: {
    '--translate': '0%',
    opacity: '100%',
  },
  out: {
    '--translate': '-210%',
    opacity: '0%',
  },
};

export const shadowVariants = {
  initial: {
    boxShadow: '23px 23px 0px -8px rgba(0, 0, 0, 0.45)',
  },
  in: {
    boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
  },
  out: {
    boxShadow: '23px 23px 0px -8px rgba(0, 0, 0, 0.45)',
  },
};
