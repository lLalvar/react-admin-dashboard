import { createTheme } from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useMode = () => {
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                bg: {
                  main: 'hsl(0, 0%, 100%)',
                  secondary: 'hsl(0, 0%, 95%)',
                },

                main: {
                  dark: 'hsl(240, 60%, 80%)',
                  main: 'hsl(240, 50%, 70%)',
                  light: 'hsl(240, 40%, 55%)',
                },

                secondary: {
                  dark: 'hsl(164, 55%, 65%)',
                  main: 'hsl(164, 55%, 55%)',
                  light: 'hsl(170, 55%, 45%)',
                },

                text: {
                  main: 'hsl(0, 0%, 0%)',
                },

                button: {
                  main: 'hsl(240, 50%, 70%)',
                  hover: 'hsl(0, 0%, 95%)',
                },
              }
            : {
                bg: {
                  main: 'hsl(220, 40%, 15%)',
                  secondary: 'hsl(220, 35%, 20%)',
                },

                main: {
                  light: 'hsl(240, 50%, 60%)',
                  main: 'hsl(240, 40%, 40%)',
                  dark: 'hsl(240, 40%, 35%)',
                },

                secondary: {
                  light: 'hsl(164, 55%, 65%)',
                  main: 'hsl(164, 55%, 55%)',
                  dark: 'hsl(170, 55%, 45%)',
                },

                text: {
                  main: 'hsl(0, 0%, 98%)',
                },

                button: {
                  main: 'hsl(240, 40%, 40%)',
                  hover: 'hsl(220, 40%, 15%)',
                },
              }),
        },
      }),
    [mode]
  )
  return [theme, colorMode]
}
