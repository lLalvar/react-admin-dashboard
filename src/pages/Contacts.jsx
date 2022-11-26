import { useTheme } from '@emotion/react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import PageHeader from '../components/PageHeader'
import { mockDataContacts } from '../data/mockData'
import { useSetWidth } from '../hooks/useSetWidth'

const columns = [
  { field: 'id', headerName: 'ID', width: 85 },
  { field: 'registrarId', headerName: 'Registrar ID' },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 160,
    flex: 1,
    cellClassName: 'name-column--cell',
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    width: 85,
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
    field: 'address',
    headerName: 'Address',
    minWidth: 280,
    flex: 1,
  },
  {
    field: 'city',
    headerName: 'City',
    minWidth: 100,
    flex: 1,
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    minWidth: 90,
    flex: 1,
  },
]

const Contacts = () => {
  const theme = useTheme()
  const width = useSetWidth()

  return (
    <Box>
      <PageHeader
        title='CONTACTS'
        subTitle=' List of Contacts for Future Reference'
      />
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
          rows={mockDataContacts}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
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
            '.MuiButtonBase-root': {
              color: `${theme.palette.text.main}`,
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Contacts
