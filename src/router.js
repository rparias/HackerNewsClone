import Navigo from 'navigo';
import Stories from './pages/stories';

const router = new Navigo('/', { hash: true });
console.log(router);

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/past', page: Stories },
      { path: '/comments', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/jobs', page: Stories },
      { path: '/submit', page: Stories },
    ];

    routes.forEach(({ page, path }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
