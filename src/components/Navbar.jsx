import React from 'react'
import { add_btn, dropdown, help, overview, question_mark, team_logo, user } from '../assets'
import { Stack, Typography } from '@mui/material'
import { time_period } from '../data.js'

const Navbar = () => {
    return (
        <div className='pb-[35px]'>
            <Stack direction='row' className='flex justify-between  pb-1 border-b-[#F6F6FB] border-b-[1px] mb-[47px]'>
                <div className='flex flex-row place-items-center'>
                    <img src={team_logo} alt="" className='p-[15px] bg-primary rounded-[12px]' />
                    <Typography fontSize={20} fontFamily='roboto' fontWeight={500} className='px-[10px]' >Boro team </Typography>

                    <img src={dropdown} alt="" className='py-[8px] px-[6px] bg-primary rounded' />

                    <img src={add_btn} alt='add_btn' className='p-[8px] rounded-full bg-primary ml-[17px]' />
                </div>
                <div className='flex flex-row place-items-center'>
                    <img src={user} alt="" />
                    <Typography fontSize={20} fontFamily='roboto' fontWeight={500} className='px-[10px]' >Zahra hasht..</Typography>
                    <img src={dropdown} alt="" className='py-[8px] px-[6px] bg-primary rounded' />
                </div>
            </Stack>
            <Stack direction='row' className='flex justify-between place-items-center'>
                <div className='flex flex-row'>
                    <Typography fontSize={36} fontFamily='Alatsi' fontWeight={400} className='text-[#575353]' >Project statistic</Typography>
                    <img src={question_mark} alt="" className='ml-[28px]' />
                </div>
                <div className='flex flex-row justify-center'>
                    {time_period.map((time, index) => (<div className='rounded-full bg-primary ml-2'><Typography fontSize={14} fontFamily='Neuton' className='px-[20px] py-[16px] leading-8'>{time.period}</Typography></div>))}
                </div>
            </Stack>
        </div>
    )
}

export default Navbar