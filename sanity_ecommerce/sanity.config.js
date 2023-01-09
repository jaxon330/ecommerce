import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import { banner } from './schemas/banner'
import { product } from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'sanity_ecommerce',

  projectId: 'i56ln993',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [ banner, product]
  },
})
