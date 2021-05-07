
import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale'
import { BASE_URL } from 'utils/request'
import { round } from '../../utils/format'
type SeriesData = {
    name: string;
    data: number[]
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[]

}
const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "% Sucesso",
                data: []
            }
        ]
    })

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    useEffect(() => {
        axios.get<SaleSuccess[]>(`${BASE_URL}/sales/success-by-seller`)
            .then(res => {
                const data = res.data;
                const myLabels = data.map(sale => sale.sellerName)
                const mySeries = data.map(sale => round(100.0 * sale.deals / sale.visited, 1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries
                        }
                    ]
                })



            })
    }, [])

   
    return (
        <Chart options={{ ...options, xaxis: chartData.labels }} series={chartData.series} type="bar" height="240"></Chart>
    );
}

export default BarChart;