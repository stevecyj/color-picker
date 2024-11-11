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
        expect(swatches[index].attributes('style')).toContain(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')})`,
        )
      })
    })
  })
})
