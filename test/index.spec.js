import test from 'ava'
import interceptor from '../'

test('correctly parses sunset time', (t) => {
  const date = 'Sun, 08 Feb 2020 08:00:00 GMT'
  const f = (request, sunset, extra) => {
    t.deepEqual(sunset, new Date(date))
    t.is(extra, undefined)
  }
  interceptor(f)({
    headers: {
      sunset: date,
    }
  })
})

test('correctly parses sunset time with related link', (t) => {
  const date = 'Sun, 08 Feb 2020 08:00:00 GMT'
  const f = (request, sunset, extra) => {
    t.deepEqual(sunset, new Date(date))
    t.deepEqual(extra, {
      url: 'https://foo.com/bar',
      params: { rel: 'sunset' },
    })
  }
  interceptor(f)({
    headers: {
      sunset: date,
      link: '<https://foo.com/bar>; rel="sunset", <https://irrelevant.com/baz>; rel="baz"'
    }
  })
})