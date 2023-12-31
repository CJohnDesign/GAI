import type { Meta, StoryObj } from '@storybook/react'
import { MyButton } from '.'

const meta: Meta<typeof MyButton> = {
  title: 'Button',
  component: MyButton,
}

export default meta
type Story = StoryObj<typeof MyButton>

export const MyFirstButton: Story = {
  args: {
    label: 'My button',
  },
}
