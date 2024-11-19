import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { ElInput } from 'element-plus'
import SearchInput from '@/components/SearchInput.vue'

let searchInputComp = null
let inputEle = null
let searchBtn = null
let resetBtn = null

beforeEach(() => {
  searchInputComp = mount(SearchInput, {
    props: { modelValue: 'search input test' },
    'onUpdate:modelValue': (value) => {
      searchInputComp.setProps({ modelValue: value })
    },
  })

  inputEle = searchInputComp.findComponent('.input')
  searchBtn = searchInputComp.findComponent('.search')
  resetBtn = searchInputComp.findComponent('.reset')
})

afterEach(() => {
  searchInputComp.unmount()
})

describe('Search Input', () => {
  it('render search input', () => {
    expect(inputEle.exists()).toBe(true)
    expect(searchBtn.exists()).toBe(true)
    expect(resetBtn.exists()).toBe(true)
  })

  it('modelValue should be updated', async () => {
    expect(inputEle.props('modelValue')).toBe('search input test')

    await inputEle.setValue('new search input')
    expect(inputEle.props('modelValue')).toBe('new search input')
  })

  it('reset search input', async () => {
    await inputEle.setValue('new search input')
    await resetBtn.trigger('click')
    expect(inputEle.props('modelValue')).toBe('')
  })
})
