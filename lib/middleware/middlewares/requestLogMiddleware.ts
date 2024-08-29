import type { Middleware } from '../createMiddlewareChain'

export const requestLogMiddleware: Middleware = async (req, _event, next) => {
  const requestUUID = crypto.randomUUID()
  console.log(
    `[${requestUUID}][${new Date().toISOString()}] [Request ]     ${
      req.method
    } ${req.url}`,
  )

  const response = await next()

  console.log(
    `[${requestUUID}][${new Date().toISOString()}] [Response] ${
      response.status
    } ${req.method} ${req.url}`,
  )

  return response
}
