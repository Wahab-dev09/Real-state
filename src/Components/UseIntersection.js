// useIntersection.js
import { useInView } from 'react-intersection-observer';

const useIntersection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when the element enters the viewport
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return { ref, inView };
};

export default useIntersection;
