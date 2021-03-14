import { useContext } from 'react';
import Context from 'components/Summary/PieChart/Context.js';
import ChartWrapper from 'components/Summary/PieChart/ChartWrapper.js';
import { Doughnut } from 'react-chartjs-2';
import { getColorsArr } from 'utils/getColorsArr.js';

//this hides the labels at the top
import { Chart } from "react-chartjs-2";
Chart.defaults.global.legend.display = false;


const ChartBox = () => {

  const { data, err, isPending } = useContext(Context);

  let suma = 0;
  let types = [];
  let vals = [];
  for (let d in data){
    suma+=data[d];
    types.push(d);
    vals.push(data[d]);
  }

  const values = {
    datasets: [{
        data: vals,
        backgroundColor:getColorsArr(vals.length)
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: types,
  };

  const chart = data && suma ? (
    <Doughnut data={values} height={300} options={{ maintainAspectRatio: false, title: {
            display: true,
            text: 'EXPENSES',
            fontSize:20,
            fontColor:'white'
        } }}/>
  ) : (!err ? (<h1>No such expenses!</h1>) : (<></>) );


  return(
    <ChartWrapper>
      { isPending && <h1>Loading ...</h1> }
      { err && <h1>An error occured</h1> }
      { !isPending && chart  }
    </ChartWrapper>
  )
};

export default ChartBox;
