const domain =
  process.env.NODE_ENV === 'production'
    ? 'http://api.hteam.url.com'
    : 'http://127.0.0.1:7001'

const api = {
  user: {
    register: {
      method: 'POST',
      url: '/api/account/register'
    },
    login: {
      method: 'POST',
      url: '/api/account/wxlogin'
    },
    bind: {
      method: 'POST',
      url: '/api/account/wxbind'
    },
    show: {
      method: 'GET',
      url: '/api/account/show'
    }
  },
  team: {
    create: {
      method: 'POST',
      url: '/api/team/create'
    }
  },
  project: {
    list: {
      method: 'GET',
      url: '/api/project'
    }
  }
}

module.exports = {
  domain,
  api
}
