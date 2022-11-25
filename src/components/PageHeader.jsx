import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PageHeader = ({ title, subTitle }) => {
  return (
    <Box mb={4}>
      <Typography
        variant='h1'
        marginBottom={1}
        fontSize={32}
        fontWeight={700}
        color='text.main'
        // height='70vh'
      >
        {title}
      </Typography>
      <Typography variant='subtitle' color='secondary.light'>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default PageHeader
