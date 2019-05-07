import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

import Content from '../../src/components/Content.vue'

import axios from 'axios'
import { exportAllDeclaration } from '@babel/types';
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
                check: jest.fn().mockImplementation(() => true ),
                userId: jest.fn()
            }
        })

       it('should call postTweet API', () => {
            let store = new Vuex.Store({
                modules: {
                    auth: {
                        namespaced: true,
                        getters
                    }
                }
            })

            shallowMount(Content, {
                store, localVue
            })

            expect(getters.check).toHaveBeenCalled()
        })
    })
})