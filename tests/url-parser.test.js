const urlParser = require('../url-parser')

describe('urlParser Class', () => {

  it('Should parse example url', () => {
    const format = "/:version/api/:collection/:id"
    const url = "/6/api/listings/3?sort=desc&limit=10"
    const response = urlParser.parse(format, url)

    expect(response).toMatchObject({
      version: 6,
      collection: 'listings',
      id: 3,
      sort: 'desc',
      limit: 10
    })
  })

  it.each([
    {
      format: '/:album_id/photos', 
      url: '/45896/photos?resolution=high', 
      expected: {
        album_id: 45896,
        resolution: 'high'
      }
    },
    {
      format: '/api/user/:id/profile', 
      url: '/api/user/3652/profile?mode=edit&page=2&language=en', 
      expected: {
        id: 3652,
        mode: 'edit',
        page: 2,
        language: 'en'
      }
    },
  ])('Should parse common urls', ({format, url, expected}) => {
    const response = urlParser.parse(format, url)

    expect(response).toMatchObject(expected)
  })

  it('Should parse url without query params', () => {
    const format = "/:version/api/:collection/:id"
    const url = "/6/api/listings/3"
    const response = urlParser.parse(format, url)

    expect(response).toMatchObject({
      version: 6,
      collection: 'listings',
      id: 3
    })
  })

  it('Should parse url without path params', () => {
    const format = "/api/listings"
    const url = "/api/listings?sort=desc&limit=10"
    const response = urlParser.parse(format, url)

    expect(response).toMatchObject({
      sort: 'desc',
      limit: 10
    })
  })

  it('Should parse url without params', () => {
    const format = "/api/listings"
    const url = "/api/listings"
    const response = urlParser.parse(format, url)

    expect(response).toMatchObject({})
  })
})