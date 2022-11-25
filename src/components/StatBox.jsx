import { Box, Typography, useTheme } from '@mui/material'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()

  return (
    <Box p={3} backgroundColor='bg.secondary'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography
            variant='h4'
            fontSize={20}
            fontWeight='bold'
            sx={{ color: `${theme.palette.text.main}` }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' gap='4px'>
        <Typography
          variant='h5'
          fontSize={16}
          mt={1}
          sx={{ color: `${theme.palette.secondary.light}` }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h5'
          fontSize={16}
          fontStyle='italic'
          sx={{ color: `${theme.palette.secondary.light}` }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
