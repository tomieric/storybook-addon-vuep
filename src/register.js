import React from 'react'
import Vue from 'vue'
import { VueWrapper } from 'vuera'
import codeEditor from 'vuep'
import 'vuep/dist/vuep.css'
import './style.css'
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'
import { useParameter } from '@storybook/api'

Vue.use(codeEditor)

const ADDON_ID = 'codeEditor'
const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_ID,
    render ({ active, key }) {
      const value = useParameter(ADDON_ID, null)
      const template = value ? value : 'No story parameter defined'

      return (
        <AddonPanel active={ active } key={ key }>
          {
            value
            ? <VueWrapper component={ codeEditor } template={ template } style={{ height: '100%' }} />
            : template
          }
        </AddonPanel>
      )
    }
  })
})