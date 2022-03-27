import { mount } from '@vue/test-utils'

describe('test', () => {
  test('example test', () => {
    const example = ['Mo', 'Austin']
    expect(example).toHaveLength(2)
  })
  test('example test 2', () => {
    const example = 'Austin'
    expect(example).toBe('Austin')
  })
})
