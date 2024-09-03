// useIntersection.js
import { useInView } from 'react-intersection-observer';

const useIntersection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return { ref, inView };
};

export default useIntersection;
