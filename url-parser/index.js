const getFomatedValue = value => isNaN(value) ? value : parseInt(value)

class urlParser {
  static parsePath(format, path) {
    const pathValues = path.split('/'),
          pathArgs = format.split('/'),
          response = {}

    // Save path params
    for (const i in pathArgs) {
      if (pathArgs[i].startsWith(':')) 
        response[pathArgs[i].slice(1)] = getFomatedValue(pathValues[i])
    }

    return response
  }

  static parseQuery(queryParams) {
    const searchParams = new URLSearchParams(queryParams),
          response = {}

    for (const [key, value] of searchParams.entries())
      response[key] = getFomatedValue(value)

    return response
  }

  static parse(format, url) {
    // Split url in path and query params
    const [path, queryParams] = url.split('?')
    const pathResponse = this.parsePath(format, path)
    const queryResponse = this.parseQuery(queryParams)

    return { ...pathResponse, ...queryResponse }
  }
}

module.exports = urlParser