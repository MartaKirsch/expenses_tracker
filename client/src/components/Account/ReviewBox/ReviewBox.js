import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Wrapper from 'components/Account/ReviewBox/Wrapper';
import Button from 'components/AddExpense/Button';
import Header from 'components/Account/ReviewBox/Header';
import Textarea from 'components/Account/ReviewBox/Textarea';
import ErrorMssg from 'components/LogIn/Form/ErrorMssg';


const ReviewBox = () => {
  let history = useHistory();

  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [errVisible, setErrVisible] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const textareaRef = useRef(null);


  useEffect(()=>{
    let source = axios.CancelToken.source();
    axios.get('/review/count', {cancelToken: source.token})
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('could not fetch data');
      }
      if(res.data.length>=3)
      {
        setIsSent(true);
        textareaRef.current.placeholder="You have already submitted 3 reviews!";
      }
    }).catch(err=>{
      setErrVisible(true);
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);


  const handleChange = e => {
    setIsVisible(false);
    setErrVisible(false);

    let reg = /^.{0,500}$/;
    if(reg.test(e.target.value))
    {
      setText(e.target.value);
    }
    else {
      setIsVisible(true);
      setText(e.target.value.slice(0,500));
    }
  };


  const handleClick = () => {
    setErrVisible(false);
    let reg = /^.{20,500}$/;
    if(reg.test(text) && !isSent)
    {
      axios.post('/review', {body:text}).then(res=>{

        if(res.statusText!=="OK")
        {
          throw new Error("Error");
        }
        setIsSent(true);
      })
      .catch(err=>{
        setErrVisible(true);
      });
    }
    else
    {
      setIsVisible(true);
    }
  };

  return(
    <Wrapper>
      <Header>Give us your feedback</Header>
      <Textarea
      ref={textareaRef}
      placeholder="Let us know what didn’t meet your expectations and what you liked!"
      maxlength="500"
      value={text}
      onChange={e=>handleChange(e)}
      />
      <ErrorMssg visible={isVisible}>You must enter at least 20 and maximum of 500!</ErrorMssg>
      <Button disabled={isSent} onClick={handleClick}>Send!</Button>
      <ErrorMssg underButton visible={errVisible}>Something went wrong!</ErrorMssg>
    </Wrapper>
  )
}
export default ReviewBox;
