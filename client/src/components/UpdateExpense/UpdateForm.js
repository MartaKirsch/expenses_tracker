import { useState, useRef, useEffect } from 'react'
import useIsMounted from 'ismounted';
import axios from 'axios';
import { getTodaysDate } from 'utils/getTodaysDate';
import { typeOpts } from 'utils/consts';
import Selects from 'components/AddExpense/Selects';
import Input from 'components/LogIn/Form/Input';
import ErrorMssg from 'components/LogIn/Form/ErrorMssg';
import Button from 'components/AddExpense/Button';
import Wrapper from 'components/AddExpense/Wrapper';
import DeleteOpts from 'components/UpdateExpense/DeleteOpts';

const UpdateForm = ({redirect,id}) => {

  const isMounted = useIsMounted();

  //input values
  const [title,setTitle] = useState("");
  const [shop,setShop] = useState("");
  const [date,setDate] = useState("");
  const [price,setPrice] = useState("");
  const [type,setType] = useState("none");

  //refs
  const titleRef = useRef(null);
  const shopRef = useRef(null);
  const typeRef = useRef(null);
  const priceRef = useRef(null);

  const deleteRef = useRef(null);

  //errors' states
  const [titleErr,setTitleErr] = useState(false);
  const [shopErr,setShopErr] = useState(false);
  const [addErr,setAddErr] = useState(false);
  const [typeErr,setTypeErr] = useState(false);
  const [priceErr,setPriceErr] = useState(false);


  useEffect(()=>{
    let source = axios.CancelToken.source();

    axios.get(`/expenses/get/${id}`, {cancelToken: source.token})
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw new Error("Error");
      }
      const { exp } = res.data;

      if (isMounted.current) {
        setTitle(exp.title);
        setShop(exp.shop);
        setDate(exp.date.match(/\d{4}-\d{2}-\d{2}/));
        setPrice(exp.price);
        setType(exp.type);
      }
    })
    .catch(err=>{
      if (isMounted.current) {
        setAddErr(true);
      }
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);


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
      axios.post(`/expenses/update/${id}`, {data}).then(res=>{

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
    const reg=/\w{1,40}/;

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

  const handleDelete = () => {
    axios.delete(`/expenses/${id}`).then(res=>{

      if(res.statusText!=="OK" || !res.data.deleted)
      {
        throw new Error("Error");
      }
      //redirect
      redirect();
    })
    .catch(err=>{
      setAddErr(true);
    });
  };

  return(
    <Wrapper onSubmit={handleSubmit}>
      <Button
       type="button"
       delete
       onClick={e=>deleteRef.current.classList.toggle('visible')}
       > DELETE EXPENSE </Button>

      <DeleteOpts ref={deleteRef}>
        <button type="button" onClick={handleDelete}>Delete</button>
        <button
        type="button"
        onClick={e=>deleteRef.current.classList.toggle('visible')}
        >Don't</button>
      </DeleteOpts>

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
      onChange={e=>setPrice(e.target.value)}
      onBlur={e=>handleBlur(priceRef,setPriceErr,true)}
      onFocus={e=>handleFocus(setPriceErr)}
      />
      <ErrorMssg visible={priceErr}>This field cannot be empty!</ErrorMssg>

      <Button type="submit">Update expense</Button>
      <ErrorMssg visible={addErr}>Something went wrong!</ErrorMssg>
    </Wrapper>
  )
};

export default UpdateForm;
