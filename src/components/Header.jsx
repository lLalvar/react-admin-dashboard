import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Box, IconButton, InputBase, useTheme, Zoom } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext } from '../theme'
import HamburgerMenuButton from './HamburgerMenuButton'

const Header = React.forwardRef((props, ref) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Box
      zIndex={98}
      sx={{
        position: 'initial',
        [theme.breakpoints.down('sm')]: {
          position: 'fixed',
        },
        top: '0',
        left: '0',
        width: '100%',
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        height={60}
        p={1}
        backgroundColor='bg.main'
        justifyContent='space-between'
        ref={ref}
      >
        <Box
          backgroundColor='bg.secondary'
          borderRadius='5px'
          sx={{
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        >
          <InputBase sx={{ marginLeft: 2 }} placeholder='Search...' />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'block',
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
          }}
        >
          <HamburgerMenuButton />
        </Box>
        <Box>
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{ position: 'relative' }}
          >
            <Zoom in={theme.palette.mode === 'dark'} timeout={400}>
              <DarkModeOutlinedIcon
                sx={{
                  position: 'absolute',
                }}
              />
            </Zoom>
            <Zoom in={theme.palette.mode === 'light'} timeout={400}>
              <LightModeOutlinedIcon />
            </Zoom>
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
})

export default Header
