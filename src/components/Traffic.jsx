import React from 'react'
import { Traffic_data } from '../data.js'
import { Typography } from '@mui/material'
import { circle } from '../assets/index.js'

const Traffic = () => {
    return (
        <div className='flex flex-row justify-between'>
            {Traffic_data.map((item, index) => <div className='w-[590px] h-[180px] bg-primary rounded-[32px] p-[30px] relative'>
                <div className='border-gray-300 border-b-[1px]'>
                    <Typography fontFamily='roboto' fontWeight={400} fontSize={20} sx={{}} >{item.titile}</Typography>
                </div>
                <div>
                    <div className='bg-gray-200 rounded-[12px] w-[266px] my-[20px] flex flex-row justify-around text-gray-500'>
                        <span>sources</span>
                        <span>Traffic Sources,%</span>
                    </div>
                </div>
                <div className='w-[230px]'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row place-items-center'>
                            <div className='h-[10px] w-[20px] bg-[#4CD7F6] rounded mr-2'></div>
                            <span>Direct</span>
                        </div>
                        <span>50</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row place-items-center'>
                            <div className='h-[10px] w-[20px] bg-[#E17CFD] rounded mr-2'></div>
                            <span>Direct</span>
                        </div>
                        <span>50</span>
                    </div>
                </div>
                <div>
                    <img src={circle} alt="" className='w-[100px] absolute bottom-3 right-7 ' />
                </div>
            </div>)}
        </div>
    )
}

export default Traffic