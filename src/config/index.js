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
      url: '/api/user/show'
    },
    update: {
      method: 'PUT',
      url: '/api/user/:id'
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
    show: {
      method: 'GET',
      url: '/api/task/:id'
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
    },
    addComment: {
      method: 'POST',
      url: '/api/task/:id/comment'
    },
    addTag: {
      method: 'POST',
      url: '/api/task/:id/addTag'
    },
    removeTag: {
      method: 'POST',
      url: '/api/task/:id/removeTag'
    },
    showEvent: {
      method: 'GET',
      url: '/api/task/:id/event'
    }
  }
}

module.exports = {
  domain,
  api
}
