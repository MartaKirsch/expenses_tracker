import { useState, useRef } from 'react';
import axios from 'axios';
import { getTodaysDate } from 'utils/getTodaysDate';
import Selects from 'components/AddExpense/Selects';
import { typeOpts } from 'utils/consts';
import Input from 'components/LogIn/Form/Input';
import ErrorMssg from 'components/LogIn/Form/ErrorMssg';
import Button from 'components/AddExpense/Button';
import Wrapper from 'components/AddExpense/Wrapper';

const Form = ({redirect}) => {

  //input values
  const [title,setTitle] = useState("");
  const [shop,setShop] = useState("");
  const [date,setDate] = useState(getTodaysDate());
  const [price,setPrice] = useState("");
  const [type,setType] = useState("none");

  //refs
  const titleRef = useRef(null);
  const shopRef = useRef(null);
  const typeRef = useRef(null);
  const priceRef = useRef(null);

  //errors' states
  const [titleErr,setTitleErr] = useState(false);
  const [shopErr,setShopErr] = useState(false);
  const [addErr,setAddErr] = useState(false);
  const [typeErr,setTypeErr] = useState(false);
  const [priceErr,setPriceErr] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();

    //run test again
    handleBlur(titleRef,setTitleErr);
    handleBlur(shopRef,setShopErr);
    handleBlur(priceRef,setPriceErr);
    handleSelect();

    if(!titleErr && !shopErr && !typeErr && !priceErr)
    {
      const data = {title,shop,date,type,price:parseFloat(price)}

      //add new expense
      axios.post('/expenses/add', data).then(res=>{

        if(res.statusText!=="OK")
        {
          throw new Error("Error");
        }
        //redirect
        redirect();
      })
      .catch(err=>{
        setAddErr(true);
      });
    }
  };

  const handleBlur = (ref,errSetter,isPrice=false) => {
    const reg=/^.{1,40}$/;

    if(!reg.test(ref.current.value))
    {
      errSetter(true);
    }

    if(isPrice && parseFloat(price) <= 0)
    {
      errSetter(true);
    }
  };

  const handleFocus = (errSetter) => {
    errSetter(false);
    setAddErr(false);
  };

  const handleSelect = () => {
    const val = typeRef.current.value;
    setType(val);
    val==="none" ? (setTypeErr(true)) : (setTypeErr(false));
  };

  return(
    <Wrapper onSubmit={handleSubmit}>
      <Selects typeErr={typeErr}>
        <select name="type" value={type} onChange={handleSelect} ref={typeRef}>
          {typeOpts.map(opt=>opt==="All"? (
            <option value="none" key="type">Type</option>
          ) : (
            <option value={opt.toLowerCase()} key={opt}>{opt}</option>
          ))}
        </select>

        <input
        type="date"
        required
        value={date}
        onChange={e=>setDate(e.target.value)}
        max={getTodaysDate()}/>
      </Selects>

      <Input
      placeholder="title"
      type="text"
      name="title"
      value={title}
      ref={titleRef}
      widthS={0.6}
      onChange={e=>setTitle(e.target.value)}
      onBlur={e=>handleBlur(titleRef,setTitleErr)}
      onFocus={e=>handleFocus(setTitleErr)}
      />
      <ErrorMssg visible={titleErr}>It needs to be 1-40 characters long!</ErrorMssg>

      <Input
      placeholder="shop"
      type="text"
      name="shop"
      value={shop}
      ref={shopRef}
      widthS={0.6}
      onChange={e=>setShop(e.target.value)}
      onBlur={e=>handleBlur(shopRef,setShopErr)}
      onFocus={e=>handleFocus(setShopErr)}
      />
      <ErrorMssg visible={shopErr}>It needs to be 1-40 characters long!</ErrorMssg>

      <Input
      placeholder="price"
      type="text"
      name="price"
      value={price}
      ref={priceRef}
      widthS={0.6}
      onChange={e=>setPrice(e.target.value)}
      onBlur={e=>handleBlur(priceRef,setPriceErr,true)}
      onFocus={e=>handleFocus(setPriceErr)}
      />
      <ErrorMssg visible={priceErr}>This field cannot be empty!</ErrorMssg>

      <Button type="submit">Add expense</Button>
      <ErrorMssg visible={addErr}>Something went wrong!</ErrorMssg>
    </Wrapper>
  )
};

export default Form;
