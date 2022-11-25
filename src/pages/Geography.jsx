import { Box, useTheme } from '@mui/material'
import React from 'react'
import GeographyChart from '../components/GeographyChart'
import PageHeader from '../components/PageHeader'
import { useSetWidth } from '../hooks/useSetWidth'

const Geography = () => {
  const theme = useTheme()
  const width = useSetWidth()
  return (
    <Box>
      <PageHeader title='Geography Chart' subTitle='Simple Geography Chart' />
      <Box
        height='75vh'
        border={`1px solid ${theme.palette.text.main}`}
        borderRadius='4px'
        sx={{
          width: width,
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
