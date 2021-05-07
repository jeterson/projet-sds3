import axios from 'axios'
import Chart from 'react-apexcharts'
import { BASE_URL } from '../../utils/request'
import { SaleSum } from '../../types/sale'
import { useEffect, useState } from 'react'

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })


    useEffect(() => {
        axios.get<SaleSum[]>(`${BASE_URL}/sales/sum-by-seller`)
            .then(res => {
                const data = res.data;
                const myLabels = data.map(sale => sale.sellerName)
                const mySeries = data.map(sale => sale.sum);
                setChartData({ labels: myLabels, series: mySeries });


            })
    },[])

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
        <Chart options={{ ...options, labels: chartData.labels }} series={chartData.series} type="donut" height="240"></Chart>
    );
}

export default DonutChart;