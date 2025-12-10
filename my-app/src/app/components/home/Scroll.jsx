import ScrollComponent from '../gsap/Scrollcomponent';
  
export default function Scroll({ texts, velocity, className, numCopies, logo = null }) {
  return (
    <ScrollComponent
      texts={texts} 
      velocity={velocity} 
      className={className}
      numCopies={numCopies}
      logo={logo}
    />
  );
}