import Vue from 'vue'
import Content from '../../src/components/Content.vue'
import axios from 'axios'

const mockGetMethod = jest.fn()
const mockPostMethod = jest.fn()
jest.mock('axios', () => {
    return jest.fn().mockImplementation(() => {
        return {
            get: mockGetMethod,
            post: mockPostMethod
        }
    })
})

describe('Content.vue', () => {
    let component, vm

    beforeEach( () => {
        vm = Vue.extend(Content)
        mockGetMethod.mockClear()
        mockPostMethod.mockClear()
    })

    describe('postTweet', () => {
        it('should call PostTweet API', () => {
            component = new vm({
                data: { status: 'Hello, Takoyaki!' }
            }).$mount()

            component.postTweet()
            expect(mockPostMethod).toHaveBeenCalled()
        })
    })
})