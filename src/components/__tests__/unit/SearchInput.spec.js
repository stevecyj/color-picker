import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { ElInput } from 'element-plus'
import SearchInput from '@/components/SearchInput.vue'

let searchInputComp = null
let inputEle = null

beforeEach(() => {
  searchInputComp = shallowMount(SearchInput)
  inputEle = searchInputComp.findComponent(ElInput)
})

afterEach(() => {
  searchInputComp.unmount()
})

describe('Search Input', () => {

  it('render search input', () => {
    expect(inputEle.exists()).toBe(true)
  })
})
