import Api from './api'

class AdvertsProvider {
  static all() {
    return Api.request('adverts', { method: 'GET' })
  }
}

export default AdvertsProvider
