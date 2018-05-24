# Axios Sunset Header Interceptor

[The Sunset HTTP Header draft](https://tools.ietf.org/html/draft-wilde-sunset-header-05)

### Fetch Interceptor

```javascript
import sunsetInterceptor from 'sunset-header-interceptor/fetch'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

fetch('https://foo.com/bar')
  .then(sunsetInterceptor(sunsetHandler))
  .then(...)
```

#### With `fetch-interceptors`

```javascript
import fetchInterceptors = from 'fetch-interceptors'
import sunsetInterceptor from 'sunset-header-interceptor/fetch'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

const myFetch = fetchInterceptors(fetch, sunsetInterceptor(sunsetHandler))

myFetch('https://httpbin.org/get?foo=bar')
```

### Axios

```javascript
import sunsetInterceptor from 'sunset-header-interceptor/axios'

const sunsetHandler = (response, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

axios.interceptors.response.use(sunsetInterceptor(sunsetHandler))
```

👋