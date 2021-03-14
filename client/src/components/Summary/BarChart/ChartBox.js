import { useContext, useEffect, useState } from 'react';
import Context from 'components/Summary/BarChart/Context.js';
import ChartWrapper from 'components/Summary/PieChart/ChartWrapper.js';
import { Bar } from 'react-chartjs-2';
import { getColorsArr } from 'utils/getColorsArr.js';

//this hides the labels at the top
import { Chart } from "react-chartjs-2";
Chart.defaults.global.legend.display = false;


const ChartBox = () => {

  const { data, err, isPending } = useContext(Context);

  const [prices,setPrices] = useState([]);
  const [months,setMonths] = useState([]);

  useEffect(()=>{
    if(data)
    {
      let arrP = [];
      let arrM = [];

      data.forEach((item,i) => {
        for (const [key, value] of Object.entries(item)) {
          arrP.push(value);
          arrM.push(key);
        }
      });
      setPrices(arrP);
      setMonths(arrM);
    }
  },[data]);




  const values = {
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 4,
        data: prices,
        backgroundColor:getColorsArr(prices.length)
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels:months,
  };


  return(
    <ChartWrapper>
      { isPending && <h1>Loading ...</h1> }
      { err && <h1>An error occured</h1> }
      {data && <Bar data={values} width={600} height={300} options={{ maintainAspectRatio: false }}/>}
    </ChartWrapper>
  )
};

export default ChartBox;
