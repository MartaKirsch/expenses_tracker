export const getTodaysDate = (lastYear=false) => {
  let val = lastYear ? (2) : (1);
  let d = new Date();
  let  month = '' + (d.getMonth() + val);
  let  day = '' + d.getDate();
  let  year = d.getFullYear();

  if (month.length < 2)
  {
    month = '0' + month;
  }
  if (day.length < 2)
  {
    day = '0' + day;
  }


  if(lastYear)
  {
    return [year-1, month, day].join('-');
  }
  else
  {
    return [year, month, day].join('-');
  }
};


export const changeYear = (current,val,mval=0) => {
  let d = new Date(current);
  let  month = '' + (d.getMonth() + mval);
  let  day = '' + d.getDate();
  let  year = d.getFullYear();

  if (month.length < 2)
  {
    month = '0' + month;
  }
  if (day.length < 2)
  {
    day = '0' + day;
  }


  return [year+val, month, day].join('-');
};

export const dateToStr = (d) =>
{
  let  month = '' + (d.getMonth());
  let  day = '' + d.getDate();
  let  year = d.getFullYear();

  if (month.length < 2)
  {
    month = '0' + month;
  }
  if (day.length < 2)
  {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}

export const getMin = (d) => {
  let  month = '' + (d.getMonth()+3);
  let  day = '' + d.getDate();
  let  year = d.getFullYear();

  if (month.length < 2)
  {
    month = '0' + month;
  }
  if (day.length < 2)
  {
    day = '0' + day;
  }
  return [year-1, month, day].join('-');
};

export const getMax = (d) => {
  let  month = '' + (d.getMonth());
  let  day = '' + d.getDate();
  let  year = d.getFullYear();

  if (month.length < 2)
  {
    month = '0' + month;
  }
  if (day.length < 2)
  {
    day = '0' + day;
  }

  return [year+1, month, day].join('-');
};
