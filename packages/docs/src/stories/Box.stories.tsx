import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'], // testing autodocs
  args: {
    children: <Text>Testing the Box element</Text>
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
