import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import customTheme from './theme';

const ChakraThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: ChakraThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

