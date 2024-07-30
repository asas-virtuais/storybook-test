import type { Meta, StoryObj } from '@storybook/react'
import Card from '.'

const meta = {
  title: 'Card/Story',
  component: Card,
  // Interesting, I have never seen "satisfies" before
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>

export const Story: Story = {}

export default meta
