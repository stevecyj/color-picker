import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { ElInput } from 'element-plus'
import SearchInput from '@/components/SearchInput.vue'

let searchInputComp = null
let inputEle = null
let searchBtn = null
let resetBtn = null

beforeEach(() => {
  searchInputComp = shallowMount(SearchInput, {
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

  it('input value is set to the modelValue prop', () => {
    expect(inputEle.props('modelValue')).toBe('search input test')

    // inputEle.find('input').setValue('new search input')
    // expect(inputEle.props('modelValue')).toBe('new search input')
  })
})
