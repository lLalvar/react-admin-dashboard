import { useTheme } from '@emotion/react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import Collapse from '@mui/material/Collapse'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarCtx } from '../context/SidebarContext'
import { useCurrentWidth } from '../hooks/useCurrentWidth'
import HamburgerMenuButton from './HamburgerMenuButton'

const Item = ({ title, icon, to }) => {
  const theme = useTheme()
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarCtx)

  const handleCLick = () => {
    if (window.innerWidth < 599.95) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <ListItem disablePadding onClick={handleCLick}>
      <NavLink
        to={to}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: 'none',
                color: `${theme.palette.main.light}`,
                width: '100%',
              }
            : { textDecoration: 'none', color: 'inherit', width: '100%' }
        }
      >
        <ListItemButton
          sx={{
            paddingInline: isSidebarOpen ? 5 : '19px',
            transition: 'padding 300ms ease-in-out',
            '&:hover': {
              color: 'main.light',
              backgroundColor: 'transparent',
            },
          }}
        >
          <ListItemIcon
            sx={{
              fontSize: '22px',
              color: 'inherit',
            }}
          >
            {icon}
          </ListItemIcon>
          <Collapse in={isSidebarOpen}>
            <ListItemText
              primary={title}
              primaryTypographyProps={{
                fontSize: '12px',
              }}
            />
          </Collapse>
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarCtx)
  const [opacity, setOpacity] = useState(0)
  const currentWidth = useCurrentWidth()

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 1200)
  }, [])

  return (
    <Box
      sx={{
        minWidth: isSidebarOpen ? 260 : 60,
        [theme.breakpoints.down('sm')]: {
          minWidth: isSidebarOpen ? 260 : 0,
        },
        overflow: 'hidden',
        backgroundColor: 'bg.secondary',
        whiteSpace: 'nowrap',
        transition: 'min-width 300ms ease-in-out',
        opacity: 1,
        [theme.breakpoints.down('sm')]: {
          opacity,
        },
      }}
    >
      <Box
        sx={{
          zIndex: 100,
          position: 'absolute',
          height: '100%',
          backgroundColor: 'bg.secondary',
          width: isSidebarOpen ? 260 : 60,
          [theme.breakpoints.down('sm')]: {
            width: isSidebarOpen ? 260 : 0,
          },
          transition: 'width 300ms ease-in-out',
        }}
      >
        <Box
          display='flex'
          px={isSidebarOpen ? 3 : 0}
          height={70}
          position='relative'
          alignItems='center'
          justifyContent={isSidebarOpen ? 'space-between' : 'center'}
        >
          <Collapse in={isSidebarOpen}>
            <Typography
              variant='h3'
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                transition: 'width 300ms ease-in-out',
                width: isSidebarOpen ? '150px' : 0,
                overflow: 'hidden',
                left: 24,
                fontSize: 24,
              }}
            >
              ADMIN
            </Typography>
          </Collapse>
          <Box
            sx={{
              position: 'absolute',
              opacity: isSidebarOpen || currentWidth > 599.95 ? '1' : '0',
              transform: 'translateY(-50%)',
              top: '50%',
              pointerEvents:
                isSidebarOpen || currentWidth > 599.95 ? 'auto' : 'none',
              left: isSidebarOpen ? 'calc(100% - 64px)' : '10px',
              transition: 'left 300ms ease-in-out, opacity 300ms ease-in-out',
            }}
          >
            <HamburgerMenuButton />
          </Box>
        </Box>
        <Collapse in={isSidebarOpen}>
          <Box display='flex' flexDirection='column' alignItems='center' pb={2}>
            <Avatar
              alt='admin'
              src='/assets/avatar.jpg'
              sx={{
                width: 82,
                height: 82,
                outline: `4px solid ${theme.palette.bg.main}`,
                marginBottom: 2,
                cursor: 'pointer',
              }}
            />
            <Typography variant='h3' fontSize={32} fontWeight={800}>
              Lalvar
            </Typography>
            <Typography variant='subtitle2' color='secondary'>
              VP Fancy Admin
            </Typography>
          </Box>
        </Collapse>
        <nav aria-label='main mailbox folders'>
          <List
            sx={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '70vh' }}
          >
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon fontSize='inherit' />}
            />
            <Typography
              variant='caption'
              display='block'
              color='gray'
              mt={1}
              ml={isSidebarOpen ? 4 : '16px'}
              sx={{
                transition: 'margin 300ms ease-in-out',
              }}
            >
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='team'
              icon={<PeopleAltOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='Contacts Information'
              to='contacts'
              icon={<ContactsOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='Invoices Balances'
              to='invoices'
              icon={<ReceiptOutlinedIcon fontSize='inherit' />}
            />
            <Typography
              variant='caption'
              display='block'
              color='gray'
              ml={isSidebarOpen ? 4 : '12px'}
              mt={1}
              sx={{
                transition: 'margin 300ms ease-in-out',
              }}
            >
              Pages
            </Typography>
            <Item
              title='Profile Form'
              icon={<PersonOutlinedIcon fontSize='inherit' />}
              to='form'
            />
            <Item
              title='Calendar'
              to='calendar'
              icon={<CalendarMonthOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='FAQ Page'
              to='faq'
              icon={<HelpOutlineOutlinedIcon fontSize='inherit' />}
            />
            <Typography
              variant='caption'
              display='block'
              color='gray'
              mt={1}
              ml={isSidebarOpen ? 4 : '11px'}
              sx={{
                transition: 'margin 300ms ease-in-out',
              }}
            >
              Charts
            </Typography>
            <Item
              title='Bar Chart'
              to='bar'
              icon={<BarChartOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='Pie Chart'
              to='pie'
              icon={<PieChartOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='Bump Chart'
              to='bump'
              icon={<TimelineOutlinedIcon fontSize='inherit' />}
            />
            <Item
              title='Geography Chart'
              to='geography'
              icon={<MapOutlinedIcon fontSize='inherit' />}
            />
          </List>
        </nav>
      </Box>
      {isSidebarOpen && (
        <Box
          onClick={() => setIsSidebarOpen(false)}
          sx={{
            zIndex: 99,
            width: '100%',
            height: '100%',
            backdropFilter: isSidebarOpen ? 'blur(8px)' : 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
      )}
    </Box>
  )
}

export default Sidebar
