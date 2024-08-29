import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 別パスにリダイレクトする。NextResponseをリターンすることに注意。
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// このパスにマッチしたときだけmiddlewareを実行する。
export const config = {
  matcher: '/about/:path*',
}
