const router = function (routes) {
  const path = window.location.pathname;
  let ret;
  Object.keys(routes).forEach((route) => {
    if (path === route) {
      const page = routes[route];
      ret = page;
      return;
    }
  });
  return ret;
};

export default router;
