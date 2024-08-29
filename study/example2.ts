import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 特定のパスへのアクセス時にURLをリライトして別ページを表示する。
// リライトではページ遷移は起こらず（URLは変化せず）、表示されるページの中身が変わる。
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
