import type { Middleware } from '../createMiddlewareChain'

export const addCustomHeaderMiddleware: Middleware = async (
  _req,
  _event,
  next,
) => {
  const response = await next()
  response.headers.set('x-custom-header', 'some-value')
  return response
}
