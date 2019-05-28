import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

import Content from '../../src/components/Content.vue'

import axios from 'axios'
const mockPost = jest.fn()
jest.mock('axios', () => {
    return jest.fn().mockImplementation(() => {
        return {
            post: mockPost
        }
    })
})


describe('Content.vue', () => {
    let getters

    describe('Before login', () => {
        beforeEach(() => {
            getters = {
                check: () => false,
                userId: jest.fn()
            }
        })

       it('should display Login button', () => {
            let store = new Vuex.Store({
                modules: {
                    auth: {
                        namespaced: true,
                        getters
                    }
                }
            })

            let content = shallowMount(Content, {
                store, localVue
            })

            expect(content.html()).toContain('Login')
        })
    })

    describe('After Login', () => {
        beforeEach(() => {
            getters = {
                check: () => true,
                userId: () => 'takoyaki_san'
            }
        })

        it('should not display Login button', () =>{
            let store = new Vuex.Store({
                modules: {
                    auth: {
                        namespaced: true,
                        getters
                    }
                }
            })

            let content = shallowMount(Content, {
                store, localVue
            })

            expect(content.html()).toContain('Hi, takoyaki_san')
            expect(content.html()).not.toContain('Login')
        })
    })
})