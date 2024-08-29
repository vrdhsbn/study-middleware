import { isAuthenticated } from '@lib/auth'
import type { NextRequest } from 'next/server'

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  // 関数内でrequestからcookie(JWT)を取得するなどして認証済みか確認することを想定しているのかな。
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    // NextResponseじゃなくてResponseでもレスポンスを返せるのか。
    // ResponseはWeb標準のAPIで、Node.js組み込みのAPIのようだ。
    // Next.jsで使うならそれに最適化されたNextResponseを使うのが良さそうだけど。
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 },
    )
  }
}
