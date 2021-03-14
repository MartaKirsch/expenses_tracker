import SearchInput from 'components/Expenses/Search/SearchInput';
import Wrapper from 'components/Expenses/Search/Wrapper';
import Filters from 'components/Expenses/Search/Filters/Filters';
import Context from 'components/Expenses/Main/Context.js';
import FetchContext from 'components/Expenses/Search/FetchContext.js';
import { useRef, useContext, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const {setIsPending,setErr,setExpenses,loggedIn} = useContext(Context);

  const formRef = useRef(null);

  useEffect(()=>{
    let source = axios.CancelToken.source();

    if(loggedIn)
    {
      axios.post('/expenses/load', {cancelToken: source.token})
      .then(res=>{
        if(res.statusText!=="OK")
        {
          throw Error('Could not fetch data');
        }
        setIsPending(false);
        setErr(null);
        setExpenses(res.data);
      }).catch(err=>{
        if (!axios.isCancel(err))
        {
          setErr(err.message);
          setIsPending(false);
        }
      });
    }

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[loggedIn]);

  const fetchData = () => {
    const date = formRef.current.querySelector('select[name="date"]').value;
    const type = formRef.current.querySelector('select[name="type"]').value;
    const phrase = formRef.current.querySelector('input[type="search"]').value;

    const data = {
      date: date==="newest" ? (-1) : (1),
      type: type==="all" ? ("") : (type),
      phrase:phrase==="" ? ("") : (phrase)
    };

    axios.post('/expenses/load', data)
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('Could not fetch data');
      }
      setIsPending(false);
      setErr(null);
      setExpenses(res.data);
    }).catch(err=>{
      setErr(err.message);
      setIsPending(false);
    });

    // console.log(data);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetchData();
  };

  return(
    <Wrapper onSubmit={handleSubmit} ref={formRef}>
      <SearchInput type='search' placeholder="Search"/>
      <FetchContext.Provider value={{fetchData}}>
        <Filters/>
      </FetchContext.Provider>
    </Wrapper>
  )
};

export default Search;
