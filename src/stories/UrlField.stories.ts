import type { Meta, StoryObj } from '@storybook/react'

import UrlField from '../components/shared/UrlField'

const meta = {
  title: 'Url field',
  component: UrlField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UrlField>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  name: 'Common link with _blank',
  args: {
    source: 'website',
    href: 'https://google.com/',
    color: '#222',
    target: '_blank',
  },
}

export const H1: Story = {
  name: 'H1 link',
  args: {
    source: 'website',
    href: 'https://google.com/',
    color: '#555',
    variant: 'h1',
  },
}
