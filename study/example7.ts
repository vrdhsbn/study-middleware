import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, event: NextFetchEvent) {
  // waitUntil()はPromiseを引数に取り、それがsettleするまで待つ。
  // この例ではリクエストされたパスをアナリティクスプラットフォームに送信して、
  // それが完了するのを待ってレスポンスを返している。
  event.waitUntil(
    fetch('https://my-analytics-platform.com', {
      method: 'POST',
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    }),
  )

  return NextResponse.next()
}
