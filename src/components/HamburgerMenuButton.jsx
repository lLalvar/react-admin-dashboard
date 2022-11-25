import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { SidebarCtx } from '../context/SidebarContext'

const HamburgerMenuButton = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarCtx)

  const clickHandler = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <IconButton onClick={clickHandler}>
      <MenuOutlinedIcon />
    </IconButton>
  )
}

export default HamburgerMenuButton
