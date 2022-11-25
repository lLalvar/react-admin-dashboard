import { Box, CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { bgBG } from '@mui/x-data-grid'
import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SidebarCtx } from './context/SidebarContext'
import { useSetWidth } from './hooks/useSetWidth'
import Bar from './pages/Bar'
import Bump from './pages/Bump'
import Calendar from './pages/Calendar'
import Contacts from './pages/Contacts'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import Form from './pages/Form'
import Geography from './pages/Geography'
import Invoices from './pages/Invoices'
import Pie from './pages/Pie'
import Team from './pages/Team'
import { ColorModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const headerWidth = useRef()

  console.log(theme.palette.mode)

  useEffect(() => {
    window.innerWidth < 599.95 && setIsSidebarOpen(false)
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <SidebarCtx.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              '::-webkit-scrollbar': {
                width: '8px',
                height: ' 8px',
              },

              '::-webkit-scrollbar-track': {
                background: `${theme.palette.bg.main}`,
              },

              '::-webkit-scrollbar-thumb': {
                background: `${theme.palette.secondary.dark}`,
              },

              '::-webkit-scrollbar-thumb:hover': {
                background: `${theme.palette.secondary.main}`,
              },
            }}
          />
          <Box
            className={`App ${theme.palette.mode}`}
            backgroundColor='bg.main'
            minHeight='100vh'
            sx={{
              display: 'flex',
              [theme.breakpoints.down('sm')]: {
                display: 'block',
                position: isSidebarOpen ? 'absolute' : 'initial',
                width: '100%',
                height: isSidebarOpen ? '100%' : 'auto',
                overflow: isSidebarOpen ? 'hidden' : 'auto',
              },
            }}
          >
            <Sidebar />
            <Box p={2} flex='1' sx={{ overflowX: 'hidden' }}>
              <Header ref={headerWidth} />
              <Box height={60} />
              <Routes>
                <Route
                  path='/'
                  element={<Dashboard headerWidth={headerWidth} />}
                />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/form' element={<Form />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/bump' element={<Bump />} />
                <Route path='/geography' element={<Geography />} />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </SidebarCtx.Provider>
    </ColorModeContext.Provider>
  )
}

export default App
