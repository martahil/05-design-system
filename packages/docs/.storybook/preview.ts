import type { Preview } from '@storybook/react-vite'
import { themes } from '@storybook/theming'
import './preview.css'

const preview: Preview = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { theme: themes.dark },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview