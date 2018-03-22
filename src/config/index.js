const domain =
  process.env.NODE_ENV === 'production'
    ? 'https://api.hteam.url.com'
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
    },
    all: {
      method: 'GET',
      url: '/api/user'
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
    },
    show: {
      method: 'GET',
      url: '/api/project/:id'
    },
    create: {
      method: 'POST',
      url: '/api/project'
    },
    update: {
      method: 'PUT',
      url: '/api/project/:id'
    },
    delete: {
      method: 'DELETE',
      url: '/api/project/:id'
    }
  },
  task: {
    list: {
      method: 'GET',
      url: '/api/task'
    },
    page: {
      method: 'GET',
      url: '/api/task/page'
    },
    create: {
      method: 'POST',
      url: '/api/task'
    },
    update: {
      method: 'PUT',
      url: '/api/task/:id'
    },
    delete: {
      method: 'DELETE',
      url: '/api/task/:id'
    }
  }
}

module.exports = {
  domain,
  api
}
