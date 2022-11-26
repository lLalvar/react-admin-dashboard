import { useTheme } from '@emotion/react'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import PageHeader from '../components/PageHeader'
import { mockDataTeam } from '../data/mockData'
import { useSetWidth } from '../hooks/useSetWidth'

const columns = [
  { field: 'id', headerName: 'ID', width: 85 },
  {
    field: 'name',
    headerName: 'Name',
    cellClassName: 'name-column--cell',
    minWidth: 160,
    flex: 1,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    width: 85,
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    minWidth: 130,
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 250,
    flex: 1,
  },
  {
    field: 'accessLevel',
    headerName: 'Access Level',
    minWidth: 110,
    flex: 1,
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          width='96px'
          p='5px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          color='#fff'
          backgroundColor={
            // eslint-disable-next-line no-nested-ternary
            access === 'admin'
              ? 'hsl(160, 50%, 35%)'
              : access === 'manager'
              ? 'hsl(160, 50%, 25%)'
              : 'hsl(160, 50%, 18%)'
          }
          borderRadius='4px'
        >
          {access === 'admin' && (
            <AdminPanelSettingsOutlinedIcon fontSize='small' />
          )}
          {access === 'manager' && <SecurityOutlinedIcon fontSize='small' />}
          {access === 'user' && <LockOpenOutlinedIcon fontSize='small' />}

          <Typography color='text' sx={{ ml: '5px', fontSize: '14px' }}>
            {access}
          </Typography>
        </Box>
      )
    },
  },
]

const Team = () => {
  const theme = useTheme()
  const width = useSetWidth()

  return (
    <Box display='flex' flexDirection='column'>
      <PageHeader title='TEAM' subTitle='Managing the Team Members' />
      <Box
        sx={{
          height: '70vh',
          width,
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
          '& .MuiDataGrid-root': { border: 'none' },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          sx={{
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: `${theme.palette.main.main}`,
              border: 'none',
            },
            '.MuiDataGrid-row': {
              backgroundColor: `${theme.palette.bg.secondary}`,
            },
            '.name-column--cell': {
              color: `${theme.palette.secondary.light}`,
            },
            '.MuiDataGrid-footerContainer': {
              backgroundColor: `${theme.palette.main.main}`,
              borderBottomRightRadius: '4px',
              borderBottomLeftRadius: '4px',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Team
