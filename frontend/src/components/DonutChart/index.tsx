import axios from 'axios'
import Chart from 'react-apexcharts'
import {BASE_URL} from '../../utils/request'
import {SaleSum} from '../../types/sale'

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    // forma errada
    let chartData: ChartData = {labels: [], series: []}

    axios.get<SaleSum[]>(`${BASE_URL}/sales/sum-by-seller`)
        .then(res => {
            const data = res.data;
            const myLabels = data.map(sale => sale.sellername)
            const mySeries = data.map(sale => sale.sum);
            chartData.labels = myLabels
            chartData.series = mySeries;
            
        })
    /*const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }*/
    
    const options = {
        legend: {
            show: true
        }
    }


    return (
        <Chart options={{...options, labels: chartData.labels}} series={chartData.series} type="donut" height="240"></Chart>
    );
}

export default DonutChart;