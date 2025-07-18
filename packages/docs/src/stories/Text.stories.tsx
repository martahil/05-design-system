import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'], // testing autodocs
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorum ad, tenetur laboriosam ex labore dicta, totam, culpa vel ipsam asperiores ducimus aliquid similique magni architecto! Quod expedita esse possimus?'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
}
