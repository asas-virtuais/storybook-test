import type { Preview, StoryFn } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react'
import { poppins, nunito } from '../app/fonts'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${poppins.style.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${nunito.style.fontFamily};
  }
`

const theme = {}

export const decorators = [
  (Story: StoryFn) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  )
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview