import React from 'react'
import { boxes_data } from '../data.js'
import { Typography } from '@mui/material'
import { up } from '../assets'

const Fourbox = () => {
  return (
    <div className='grid grid-cols-2 '>
          {boxes_data.map((item, index) => (<div key={item.id} className={`${item.id == '12%' ? 'bg-[#4CD7F6] text-white shadow-[#E17CFD] shadow-xl' : 'bg-primary'} relative rounded-[32px] ml-[30px] my-[10px] w-[251px] h-[180px] overflow-hidden`}>

            {item.id == '12%' && <><div className='absolute bg-[#E17CFD] rounded-full w-[208px] h-[191px] blur-[49px] top-[50px] left-[110px] z-0'></div> <div className='absolute bg-[#E17CFD] rounded-full w-[208px] h-[191px] blur-[49px] top-[-90px] left-[-120px] z-0'></div></>}
            <div className='p-[26px] flex flex-col gap-9 z-10'>
              <div className='flex flex-row justify-between z-10'>
                <img src={item.icon} alt="" className='ml-7' />
                <span className='flex flex-row'><img src={item.smicon} alt="" /><Typography className='px-2'>{item.id}</Typography></span>
              </div>
              <div className='z-10'>
                <Typography fontFamily='roboto' fontWeight={500} fontSize={32}>{item.numbers}</Typography>
                <Typography fontFamily='roboto' fontWeight={500} fontSize={14} color={`${item.id == '12%' && 'white'}`} >{item.caption}</Typography>
              </div>
            </div>
          </div>))}
        </div>
  )
}

export default Fourbox