import { useTheme } from '@emotion/react'
import { Box } from '@mui/system'
import React from 'react'
import PageHeader from '../components/PageHeader'
import PieChart from '../components/PieChart'
import { useSetWidth } from '../hooks/useSetWidth'

const Pie = () => {
  const width = useSetWidth()
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: width,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <PageHeader title='Pie Chart' subTitle='Simple Pie Chart' />

      <Box height='70vh'>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie
