import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import BumpChart from '../components/BumpChart'
import PageHeader from '../components/PageHeader'
import { useSetWidth } from '../hooks/useSetWidth'

const Bump = () => {
  const width = useSetWidth()
  const theme = useTheme()

  return (
    <Box
      sx={{
        width,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <PageHeader title='Bump Chart' subTitle='Simple Bump Chart' />
      <Box height='70vh'>
        <BumpChart />
      </Box>
    </Box>
  )
}

export default Bump
