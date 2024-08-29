import { NextResponse } from 'next/server'
import type { Middleware } from '../createMiddlewareChain'

export const blockBotMiddleware: Middleware = async (req, _event, next) => {
  const userAgent = req.headers.get('user-agent')
  if (userAgent?.includes('bot')) {
    return new NextResponse('Access denied', { status: 403 })
  }

  return next()
}
