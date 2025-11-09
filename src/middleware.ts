import { NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|favicon.png).*)",
  ],
}

export function middleware(request: NextRequest) {
  // 環境変数からパスワードを取得
  const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD

  // パスワードが設定されていない場合は認証をスキップ
  if (!PREVIEW_PASSWORD) {
    return NextResponse.next()
  }

  const basicAuth = request.headers.get("authorization")

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1]
    const [user, pwd] = atob(authValue).split(":")

    // ユーザー名は "preview"、パスワードは環境変数と比較
    if (user === "preview" && pwd === PREVIEW_PASSWORD) {
      return NextResponse.next()
    }
  }

  // 認証が必要な場合
  return new NextResponse("認証が必要です", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Preview Access"',
    },
  })
}
