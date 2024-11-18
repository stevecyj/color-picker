import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { ElInput } from 'element-plus'
import SearchInput from '@/components/SearchInput.vue'

let searchInputComp = null
let inputEle = null
let searchBtn = null
let resetBtn= null

beforeEach(() => {
  searchInputComp = shallowMount(SearchInput)
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
})
