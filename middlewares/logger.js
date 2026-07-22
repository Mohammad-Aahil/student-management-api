export function logger(req, res, next) {
  const { method, url } = req;
  const endpoint = `${method} ${url}`;
  console.log(endpoint);

  next();
}
