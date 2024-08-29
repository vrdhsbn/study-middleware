import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from 'next/server'
import { middlewareChain } from './lib/middleware'

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const next = async () => {
    return NextResponse.next()
  }
  return middlewareChain(req, event, next)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
