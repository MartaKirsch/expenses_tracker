import { useState, useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from 'components/Navbar/Nav';
import NavButton from 'components/Navbar/NavButton';
import Img from 'components/Navbar/Img';
import Panel from 'components/Navbar/Panel/Panel';

const Navbar = () =>{
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef(null);

  const handleDocumentClick = e => {
    if(!panelRef.current.contains(e.target) && isVisible)
    {
      setIsVisible(!isVisible);
    }
  };

  useEffect(()=>{
    document.addEventListener('click',handleDocumentClick);

    return () => {
      document.removeEventListener('click',handleDocumentClick);
    }
  },[isVisible]);

  return(
    <Nav>
      <NavButton>
        <Link to='/'>
          Home
        </Link>
      </NavButton>

      <NavButton>
        <Link to='/expenses'>
          Expenses
        </Link>
      </NavButton>

      <NavButton ref={panelRef} isVisible={isVisible}>
        <Img url={"../imgs/circle.png"} onClick={()=>setIsVisible(!isVisible)}></Img>
        <Panel isVisible={isVisible}/>
      </NavButton>
    </Nav>
  )
}

export default withRouter(Navbar);
