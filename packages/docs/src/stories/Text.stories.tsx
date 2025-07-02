import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'], // testing autodocs
  args: {
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolorum ad, tenetur laboriosam ex labore dicta, totam, culpa vel ipsam asperiores ducimus aliquid similique magni architecto! Quod expedita esse possimus?'
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
}
