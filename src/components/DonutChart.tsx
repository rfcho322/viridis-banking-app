'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts }: DonutChartProps) => {

    const accountNames = accounts.map((a) => a.name)
    const balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                labels: 'Banks',
                data: balances,//balances,
                backgroundColor: ['#15803d', '#16a34a', '#22c55e']
            }
        ],
        labels: accountNames//accountNames
    }
    return (
        <Doughnut
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    )
}

export default DonutChart