import Card from '.'
import TopLeft from './top-left'
import BottomLeft from './bottom-left'
import Contents from './contents'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'CardStory',
  component: Card,
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>

export const CardStory: Story = {
  render: () => (
    <Card>
      <TopLeft>
        <img width={183} height={172.5} src='/top-left.png' />
      </TopLeft>
      <BottomLeft>
        <img width={183} height={160} src='/bottom-left.png' />
      </BottomLeft>
      <Contents>
        <h3>Photography</h3>
        <ul>
          <li>Drone Photography</li>
          <li>Interiors</li>
          <li>Exteriors / Architectural</li>
        </ul>
        <p>Every photograph we produce finds the beauty in your property while serving as a profitable asset.</p>
      </Contents>
    </Card>
  ),
}

export default meta