import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {ReactComponent as Flower} from 'imgs/flowerpot.svg';
import Column from 'components/Home/NotSure/Column/Column';
import Wrapper from 'components/Home/NotSure/Wrapper';
import animate from 'components/Home/NotSure/animation';

const NotSureRow = () => {
  const flowerRef = useRef(null);
  let tl = 0;

  useEffect(()=>{
    tl = animate(flowerRef);

    return ()=>{
      tl.restart();
      tl.kill();
    }
  });

  return(
    <Wrapper>
      <Column/>
      <Flower ref={flowerRef} onClick={()=>{}} onMouseEnter={() => tl!==0 && tl.play()} onMouseLeave={() => tl!==0 && tl.reverse()}   />
    </Wrapper>
  )
}

export default NotSureRow;
