/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Components
import { VBtn } from 'vuetify/components'

export default createVuetify({
  aliases: {
    VBtnAlt: VBtn,
  },
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'primary',
      height: 44,
      minWidth: 190,
    },
    VBtnAlt: {
      color: 'primary',
      height: 48,
      minWidth: 190,
      variant: 'outlined',
    },
    VSheet: {
      color: 'white',
    },
  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#00C756',
          secondary: '#00A170',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#00a86b',
          secondary: '#0090a8',
          accent: '#00a817',
          error: '#a8003c',
          info: '#1600a8',
          success: '#00a817',
          warning: '#a8003c',
        },
      },
    },
  },
})
