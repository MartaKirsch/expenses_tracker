import gsap from 'gsap';

const animate = (ref) => {
  const elements = ref.current;

  const leaves = elements.querySelector('#leaves');
  const stem = elements.querySelector('#stem');
  const petals = elements.querySelector('#petals');
  const tl = gsap.timeline();

  tl.set(petals,{position:'relative'});

  tl.pause();

  tl.addLabel('grow')
    .to(stem,{duration:1,scaleY:1.2,scaleX:1.3,transformOrigin:"50% 100%"})
    .to(petals,{duration:1,scale:1.2, transformOrigin:"50% 50%", y:"-=1vw"},"grow")
    .to(leaves,{duration:1, y:"-=.5vw"},"grow")
    .to(leaves.children,{duration:1,stagger:0.25,scale:1.2,transformOrigin:"50% 50%"},"grow")
    ;

  return tl;
}

export default animate;
