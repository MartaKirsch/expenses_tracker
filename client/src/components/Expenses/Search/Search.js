import SearchInput from 'components/Expenses/Search/SearchInput';
import Wrapper from 'components/Expenses/Search/Wrapper';
import Filters from 'components/Expenses/Search/Filters/Filters';
import Context from 'components/Expenses/Main/Context.js';
import FetchContext from 'components/Expenses/Search/FetchContext.js';
import { useRef, useContext, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const {setIsPending,setErr,setExpenses,loggedIn,howManyExpenses,expenses,isUpdate, setIsUpdate} = useContext(Context);

  const formRef = useRef(null);

  useEffect(()=>{
    let source = axios.CancelToken.source();
    if(loggedIn)
    {
      let data = {};
      if(isUpdate)
      {
        const date = formRef.current.querySelector('select[name="date"]').value;
        const type = formRef.current.querySelector('select[name="type"]').value;
        const phrase = formRef.current.querySelector('input[type="search"]').value;
        
        data = {
          date: date==="newest" ? (-1) : (1),
          type: type==="all" ? ("") : (type),
          phrase:phrase==="" ? ("") : (phrase)
        };

        setIsUpdate(false);
      }

      axios.post('/expenses/load', {...data,howMany:howManyExpenses,cancelToken: source.token})
      .then(res=>{
        if(res.statusText!=="OK")
        {
          throw Error('Could not fetch data');
        }
        if(expenses && expenses.length)
        {
          let arr = [...expenses,...res.data];
          setExpenses(arr);
        }
        else
        {
          setExpenses(res.data);
        }
          setIsPending(false);
          setErr(null);
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
  },[loggedIn,howManyExpenses]);

  const fetchData = () => {
    const date = formRef.current.querySelector('select[name="date"]').value;
    const type = formRef.current.querySelector('select[name="type"]').value;
    const phrase = formRef.current.querySelector('input[type="search"]').value;

    const data = {
      date: date==="newest" ? (-1) : (1),
      type: type==="all" ? ("") : (type),
      phrase:phrase==="" ? ("") : (phrase),
      howMany:0
    };

    axios.post('/expenses/load', data)
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('Could not fetch data');
      }
        setExpenses(res.data);
        setIsPending(false);
        setErr(null);
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
