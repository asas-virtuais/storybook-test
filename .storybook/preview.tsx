import type { Preview, StoryFn } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react'

const GlobalStyles = createGlobalStyle`
  body {}
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