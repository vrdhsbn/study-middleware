import { NextResponse } from 'next/server'
import type { Middleware } from '../createMiddlewareChain'

export const authMiddleware: Middleware = async (req, _event, next) => {
  const sessionId = req.cookies.get('sessionId')
  const NO_AUTH_PATHS = ['/']
  if (!sessionId && !NO_AUTH_PATHS.includes(req.nextUrl.pathname)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return next()
}
