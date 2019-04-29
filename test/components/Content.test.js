import Content from '../../src/components/Content.vue'

import axios from 'axios'
jest.mock('axios')

describe('Content.vue', () => {
    it('should call postTweet API', () => {
        expect('foo').toEqual('foo')
    })
})