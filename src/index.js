// https://coderwall.com/p/zrlulq/parsing-a-link-header-in-javascript
const LINK = /<[^>]*>\s*(\s*;\s*[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*")))*(?=,|$)/g
const PARAMS = /[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*"))/g

const parseLink = v =>
  v.match(LINK)
    .map(link => link.split(/>/g))
    .map(([url, params]) => ({
      url: url.substring(1),
      params: params.match(PARAMS)
        .map(param => param.split(/=/))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: JSON.parse(value) }), {})
    }))
    .find(link => link.params.rel === 'sunset')


const axiosSunsetHeaderInterceptor = f => response => {
  const { request, headers } = response
  if (headers['sunset']) {
    const sunset = new Date(headers['sunset'])
    if (headers['link']) {
      f(request, sunset, parseLink(headers['link']))
    } else {
      f(request, sunset)
    }

    return response
  }
}

export default axiosSunsetHeaderInterceptor
