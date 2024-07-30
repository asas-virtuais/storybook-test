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
        <img src='/top-left.png' />
      </TopLeft>
      <BottomLeft>
        <img src='/bottom-left.png' />
      </BottomLeft>
      <Contents>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate laborum quod porro dignissimos, velit beatae deleniti, labore culpa ad maxime reprehenderit quidem ea minus eaque doloremque voluptas vitae optio illum possimus asperiores animi. Unde expedita dignissimos ex dicta! Dignissimos est expedita sunt, libero quasi consequuntur architecto quis error impedit repudiandae quaerat numquam voluptates?
      </Contents>
    </Card>
  ),
}

export default meta