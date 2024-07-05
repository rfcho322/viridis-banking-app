'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DonutChartProps = {
    accounts: [],
}

const DonutChart = ({ accounts }: DonutChartProps) => {

    // const accountNames = accounts.map((a) => a.name)
    // const balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                labels: 'Banks',
                data: [1250, 2500, 3750],//balances,
                backgroundColor: ['#15803d', '#16a34a', '#22c55e']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']//accountNames
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