import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { sidebar_data } from '../data.js'
import { search_btn } from '../assets/index.js'

const Sidebar = () => {
    const [select, setSelect] = useState('Overview')
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: "auto",
                height: '100vh',
                bgcolor: '#F6F6FB',
                flexDirection: 'column',
            }}
        >
            <div className='flex flex-row place-items-center ml-8 mt-[36px] my-[38px]'>
                <div className='w-[52px] h-[51px] bg-[#E17CFD] rounded-full relative mr-[22px]'>
                    <img src={search_btn} alt="search btn" className='absolute top-[14px] left-[14px] z-10' />
                    <div className='w-[36px] h-[36px] absolute top-[4px] left-[14px]' style={{ background: '#4CD7F6', filter: 'blur(11.5px)' }}></div>
                </div>
                <Typography fontSize={20} fontFamily='roboto' fontWeight={500} >Concured</Typography>
            </div>

            {sidebar_data.map(item => (

                <button key={item.id} className={`flex place-items-center ${item.id == sidebar_data.length - 3 ? 'mb-[120px]' : ''} ${item.id == sidebar_data.length - 0 ? 'mt-[18px]' : ''} ${item.id == sidebar_data.length - 7 ? 'after:content[] bg-[#e2e2ff] opacity-90' : ''} pr-[110px] pl-[38px] py-[20px] `}>
                    <span className='pr-4'>
                        <img src={item.icon} alt={item.title} className={`${item.id == sidebar_data.length - 7 ? 'w-[36px] h-[36px] -ml-1' : 'w-[24px] h-[24px]'}`} />
                    </span>
                    <Typography>{item.title}</Typography>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar