import { expect, test } from 'vitest'
import { classnames } from '../src/classnames.res.mjs'

test("classnames", () => {
    expect(classnames(['foo', 'bar'])).toEqual('foo bar')
    expect(classnames(['foo'], {bar: true})).toEqual('foo bar')
    expect(classnames(['foo'], {bar: false})).toEqual('foo')
})