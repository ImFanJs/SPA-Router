class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadRoute(window.location.pathname);
  }

  matchedRoute(path) {
    return this.routes.find(route => route.path === path);
  }

  loadRoute(path) {
    const isMatched = this.matchedRoute(path);
    window.history.pushState({}, 'my title', path);

    if (isMatched) {
      document.querySelectorAll('[data-outlet]')[0].innerHTML =
        isMatched.template;
    } else {
      document.querySelectorAll('[data-outlet]')[0].innerHTML =
        '<h1>Page Not Found!</h1>';
    }
  }
}
