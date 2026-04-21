'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Tailwind green-400 → green-950
const GREEN_PALETTE = ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16']

const DonutChart = ({ accounts }: DonutChartProps) => {

    const accountNames = accounts.map((a) => a.name)
    const balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                labels: 'Banks',
                data: balances,
                backgroundColor: GREEN_PALETTE.slice(0, accounts.length)
            }
        ],
        labels: accountNames
    }
    return (
        <Doughnut
            data={data}
            options={{
                cutout: '65%',
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