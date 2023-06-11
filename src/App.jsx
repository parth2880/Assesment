import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'
import Feed from './components/Feed'


const App = () => {
  return (
    <Box className='flex flex-row w-full'>
      <Sidebar />
      <Feed />
    </Box>
  )
}

export default App