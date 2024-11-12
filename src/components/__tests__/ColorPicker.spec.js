import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ColorPicker from '../ColorPicker.vue'
import convert from 'color-convert'

let wrapper = null
const propsData = { swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff'] }

beforeEach(() => {
  wrapper = shallowMount(ColorPicker, { propsData })
})

afterEach(() => {
  wrapper.unmount()
})

describe('ColorPicker', () => {
  describe('Swatches', () => {
    it('displays each color as an individual swatch', () => {
      const swatches = wrapper.findAll('.swatch')
      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')});`,
        )
      })
    })

    it('sets the first swatch as the selected one by default', () => {
      const firstSwatch = wrapper.find('.swatch')
      expect(firstSwatch.classes()).toContain('active')
    })

    it('makes the swatch active when clicked', async () => {
      const targetSwatch = wrapper.findAll('.swatch').at(2)
      await targetSwatch.trigger('click')
      // console.log('targetSwatch >>>>> ', targetSwatch.classes())
      expect(targetSwatch.classes()).toContain('active')
    })
  })

  describe('Color model', () => {
    it('displays each mode as an individual button', () => {
      const buttons=wrapper.findAll('.color-mode')
      buttons.forEach((button) => {
        expect(button.classes()).toEqual(
          expect.arrayContaining([expect.stringMatching(/color-mode-\w{1,}/)])
        )
      })
    })

    it('sets the first mode as the selected one by default', () => {
      const firstButton = wrapper.find('.color-mode')
      expect(firstButton.classes()).toContain('active')
    })
  })
})
