# Axios Sunset Header Interceptor

[The Sunset HTTP Header draft](https://tools.ietf.org/html/draft-wilde-sunset-header-05)

```javascript
import sunsetHeaderInterceptor from 'axios-sunset-header-interceptor'

const sunsetHandler = (request, sunset, extra) = {
  // Soon Thomas won't be really useful anymore.
}

axios.interceptors.response.use(sunsetHeaderInterceptor(sunsetHandler))
```

👋