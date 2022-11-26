import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React, { useEffect, useState } from 'react'
import BarChart from '../components/BarChart'
import BumpChart from '../components/BumpChart'
import GeographyChart from '../components/GeographyChart'
import PageHeader from '../components/PageHeader'
import ProgressCircle from '../components/ProgressCircle'
import StatBox from '../components/StatBox'
import { mockTransactions } from '../data/mockData'
import { useSetWidth } from '../hooks/useSetWidth'

const Dashboard = ({ headerWidth }) => {
  const theme = useTheme()
  const currentWidth = useSetWidth()
  const [width, setWidth] = useState(currentWidth)

  useEffect(() => {
    setWidth(`${headerWidth.current.clientWidth}px`)
  }, [currentWidth])

  return (
    <Box
      sx={{
        width,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='space-between'
        gap={2}
      >
        <PageHeader title='DASHBOARD' subTitle='  Welcome to your dashboard' />
        <Button
          variant='contained'
          color='button'
          startIcon={<GetAppOutlinedIcon />}
          sx={{
            '&:hover': {
              backgroundColor: 'button.hover',
            },
          }}
        >
          DOWNLOAD REPORTS
        </Button>
      </Box>

      {/* Row-1 */}
      <Grid container spacing={2} columns={{ xs: '2', sm: '4' }}>
        <Grid xs={1}>
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{
                  color: `${theme.palette.secondary.light}`,
                  fontSize: '26px',
                }}
              />
            }
          />
        </Grid>

        <Grid xs={1}>
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{
                  color: `${theme.palette.secondary.light}`,
                  fontSize: '26px',
                }}
              />
            }
          />
        </Grid>

        <Grid xs={1}>
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{
                  color: `${theme.palette.secondary.light}`,
                  fontSize: '26px',
                }}
              />
            }
          />
        </Grid>

        <Grid xs={1}>
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{
                  color: `${theme.palette.secondary.light}`,
                  fontSize: '26px',
                }}
              />
            }
          />
        </Grid>
      </Grid>

      {/* Row-2 */}
      <Grid container spacing={2} pt={1} columns={{ xs: '1', sm: '10' }}>
        <Grid xs={1} sm={6}>
          <Box backgroundColor='bg.secondary' p={3} sx={{ height: '320px' }}>
            <Box
              display='flex '
              justifyContent='space-between'
              alignItems='center'
            >
              <Box>
                <Typography
                  variant='h5'
                  fontSize={16}
                  fontWeight='600'
                  color='text'
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant='h3'
                  fontSize={24}
                  fontWeight='bold'
                  color='secondary'
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{
                      fontSize: '26px',
                      color: `${theme.palette.secondary.main}`,
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height='250px' m='-20px 0 0 0'>
              <BumpChart isDashboard />
            </Box>
          </Box>
        </Grid>
        <Grid xs={1} sm={4}>
          <Box
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor='bg.secondary'
            sx={{ height: '320px', overflow: 'auto' }}
          >
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom='4px solid'
              borderColor='bg.main'
              colors='red'
              p='15px'
            >
              <Typography
                color='text'
                variant='h5'
                fontWeight='600'
                fontSize={16}
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom='4px solid'
                borderColor='bg.main'
                p='15px'
              >
                <Box>
                  <Typography
                    color='secondary.dark'
                    variant='h5'
                    fontWeight='600'
                    fontSize={12}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color='text.main' fontSize={12}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color='text.main' fontSize={12}>
                  {transaction.date}
                </Box>
                <Box
                  backgroundColor='secondary.dark'
                  p='5px 10px'
                  borderRadius='4px'
                  fontSize={12}
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Row-3 */}
      <Grid container spacing={2} pt={1} columns={{ xs: '1', sm: '3' }}>
        <Grid xs={1}>
          <Box backgroundColor='bg.secondary' p={3} height='100%'>
            <Typography variant='h5' fontSize={16} fontWeight='600'>
              Campaign
            </Typography>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              textAlign='center'
              mt='25px'
            >
              <ProgressCircle size='125' />
              <Typography
                variant='h5'
                fontSize={16}
                color='secondary.dark'
                sx={{ mt: '15px' }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography fontSize={12}>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={1}>
          <Box backgroundColor='bg.secondary' height='100%'>
            <Typography
              variant='h5'
              fontSize={16}
              fontWeight='600'
              sx={{ padding: '30px 30px 0 30px' }}
            >
              Sales Quantity
            </Typography>
            <Box height='250px'>
              <BarChart isDashboard />
            </Box>
          </Box>
        </Grid>
        <Grid xs={1}>
          <Box backgroundColor='bg.secondary' padding={3} height='100%'>
            <Typography
              variant='h5'
              fontWeight='600'
              fontSize={16}
              sx={{ marginBottom: '15px' }}
            >
              Geography Based Traffic
            </Typography>
            <Box height='200px'>
              <GeographyChart isDashboard />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
