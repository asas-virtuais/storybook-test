import type { Preview, StoryFn } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react'
import { poppins, nunito } from '../app/fonts'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${nunito.style.fontFamily};
    background-color: #F5F5F8;
    color: #353844;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${poppins.style.fontFamily};
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  ul {
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    ::marker {
      color: #D2AD81;
    }
  }
  p {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
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
      }
    }
  }
}

export default preview