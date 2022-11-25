import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import PageHeader from '../components/PageHeader'
import { mockDataInvoices } from '../data/mockData'
import { useSetWidth } from '../hooks/useSetWidth'

const columns = [
  { field: 'id', headerName: 'ID', width: 85 },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 160,
    flex: 1,
    cellClassName: 'name-column--cell',
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
    field: 'cost',
    headerName: 'Cost',
    minWidth: 85,
    flex: 1,
    renderCell: (params) => (
      <Typography fontSize='small' color='secondary'>
        ${params.row.cost}
      </Typography>
    ),
  },
  {
    field: 'date',
    headerName: 'Date',
    minWidth: 100,
    flex: 1,
  },
]

const Invoices = () => {
  const theme = useTheme()
  const width = useSetWidth()

  return (
    <Box
      sx={{
        width: width,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
        '& .MuiDataGrid-root': { border: 'none' },
      }}
    >
      <PageHeader title='INVOICES' subTitle='List of Invoice Balances' />

      <Box height='70vh'>
        <DataGrid
          rows={mockDataInvoices}
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

export default Invoices
