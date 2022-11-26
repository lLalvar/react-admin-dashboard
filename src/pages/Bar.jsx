import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import BarChart from '../components/BarChart'
import PageHeader from '../components/PageHeader'
import { useSetWidth } from '../hooks/useSetWidth'

const Bar = () => {
  const width = useSetWidth()
  const theme = useTheme()

  return (
    <Box
      height='70vh'
      sx={{
        width,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <PageHeader title='Bar Chart' subTitle='Simple Bar Chart' />
      <BarChart />
    </Box>
  )
}

export default Bar
