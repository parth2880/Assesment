import React from 'react'
import { Line } from 'react-chartjs-2'
import { Typography } from '@mui/material'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    Legend,
    Tooltip

} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)


const Graph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: ` visitors`,
                data: [22000000, 30000000, 14000000, 28000000, 17000000, 22000000],
                backgroundColor: '#8E7CFD',
                pointBorderWidth: '2',
                pointHoverBorderColor: '#fff',
                pointBorderColor: '#8E7CFD',
                pointHoverBorderWidth: '6',
                borderColor: '#8E7CFD',
                fill: true,
                borderWidth: '5',
                tension: .4,
            }
        ]
    }

    const options = {
        plugins: {
            legend: true,
            customCanvasBackgroundColor: {
                color: 'blue',
            }
        },
        scales: {
            y: {
                max: 40000000,
                min: 0,
                ticks: {
                    stepSize: 10000000
                }
            }
        }
    }

    return (
        <div className='h-[48vh] w-[80vh] pt-[30px] px-[20px] rounded-[32px] bg-primary flex flex-col self-stretch' >
            <div className='flex flex-row justify-between place-items-center'>
                <Typography fontFamily='roboto' fontWeight={400} fontSize={20} >Total Visits</Typography>
                <Typography fontFamily='roboto' fontWeight={500} fontSize={32} color='#7166F9'>42,43M</Typography>
            </div>
            <div className='h-[100%] w-[100%]'>
                <Line
                    data={data}
                    options={options}
                />
            </div>
        </div >
    )
}

export default Graph