# Axios Sunset Header Interceptor

[The Sunset HTTP Header draft](https://tools.ietf.org/html/draft-wilde-sunset-header-05)

### Fetch Interceptor

```javascript
import sunsetInterceptor from 'sunset-header-interceptor'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

fetch('https://foo.com/bar', { /* init props */ })
  .then(sunsetInterceptor(sunsetHandler))
  .then(...)
```

#### With [fetch-interceptors](https://www.npmjs.com/package/fetch-interceptors)

```javascript
import fetchInterceptors = from 'fetch-interceptors'
import sunsetInterceptor from 'sunset-header-interceptor'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

const myFetch = fetchInterceptors(fetch, sunsetInterceptor(sunsetHandler))

myFetch('https://httpbin.org/get?foo=bar', { /* init props */ )
```

### Axios

```javascript
import sunsetInterceptor from 'sunset-header-interceptor'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

axios.interceptors.response.use(sunsetInterceptor(sunsetHandler))
```

### Roll your own

```javascript
import interceptor from 'sunset-header-interceptor/interceptor'

const myDankSunsetInterceptor = (( // Sunset header handler, called if Sunset header found
  response, // Response from teh HTTP request if available
  sunset, // Date representing Thomas' inevitable demise
  { link, params } // link URI, and whatever other params were passed through
) => {
  // Tell someone about Thomas.
  // Note: Anything returned from here is thrown away. Like Thomas.
}) => interceptor(( // Extract headers from an arb response
  response // Response object returned by your HTTP request library
) => {
  return ... // Logic to extract header information from the response
}, f);
```

👋