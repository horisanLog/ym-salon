# Y'm 整体サロン 公式 Web サイト

AI 姿勢診断と整体・エステを組み合わせた総合ケアサロン「Y'm（ワイム）」の公式 Web サイトです。

## プロジェクト概要

埼玉県戸田市に位置する整体サロンの Web サイト。AI 技術を活用した姿勢診断と、整体・エステを融合したサービスを提供しています。

### 主な特徴

- **AI 姿勢診断**: 最新の AI 技術で姿勢を数値化・可視化
- **整体 × エステの融合**: 姿勢改善と美容ケアの両立
- **モバイルファースト設計**: スマートフォンでの予約・閲覧を最適化
- **LINE 予約システム**: LINE 公式アカウントからの簡単予約
- **SEO 最適化**: 地域密着型のローカル SEO 対策

## 技術スタック

- **フレームワーク**: [Next.js 14](https://nextjs.org/) (Pages Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS v4](https://tailwindcss.com/)
- **フォーム管理**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **アイコン**: [Lucide React](https://lucide.dev/)
- **デプロイ**: [Vercel](https://vercel.com/)

## 環境構築

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd ym-salon

# 依存パッケージのインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルドしたアプリケーションの起動
npm start
```

### リンティング

```bash
npm run lint
```

## プロジェクト構成

```
ym-salon/
├── src/
│   ├── components/       # Reactコンポーネント
│   │   ├── common/      # 共通コンポーネント
│   │   ├── home/        # ホームページ用コンポーネント
│   │   └── layout/      # レイアウトコンポーネント
│   ├── data/            # JSONデータファイル
│   ├── lib/             # ユーティリティ関数
│   ├── pages/           # Next.jsページ
│   ├── styles/          # グローバルスタイル
│   └── types/           # TypeScript型定義
├── public/              # 静的ファイル
└── docs/                # ドキュメント
```

## 主要機能

### ページ構成

- **トップページ** (`/`): サロンの特徴、メニュー概要、お客様の声
- **メニュー・料金** (`/menu`, `/menu/[category]`): 施術メニューと料金詳細
- **AI 姿勢診断** (`/ai-diagnosis`): AI 診断の詳細説明
- **お客様の声** (`/voice`): 実際の利用者の声
- **サロン紹介** (`/about`): スタッフ紹介、サロン情報
- **アクセス** (`/access`): 店舗情報、地図
- **ブログ** (`/blog`, `/blog/[slug]`): コラム記事
- **予約** (`/reservation`): 予約フォーム

### デザインシステム

カスタムカラーパレット:

- **Crown Gold** (`#c7a253`): ブランドカラー
- **Accent Navy** (`#1f3a5f`): アクセントカラー
- **Highlight** (`#fdf8ee`): ハイライト背景

### データ管理

- ローカル JSON ファイルでコンテンツ管理
- TypeScript 型定義による型安全性
- SSG (Static Site Generation) による高速化

## パフォーマンス目標

- **LCP**: < 2.5 秒
- **FID**: < 100ms
- **CLS**: < 0.1
- **PageSpeed Insights**: 90 点以上

## アクセシビリティ

WCAG 2.1 レベル AA 準拠を目指した実装

## ライセンス

このプロジェクトは**非商用ライセンス**の下でライセンスされています。

### 許可される使用

- 個人的な学習、研究目的
- ポートフォリオとしての使用
- 非商用目的での改変

### 禁止事項

- 商用利用
- 販売・再配布
- 本ソフトウェアを使用した有償サービスの提供

詳細は [LICENSE](LICENSE) ファイルをご覧ください。商用利用についてのお問い合わせは info@ym-salon.com までご連絡ください。

## お問い合わせ

- **サロン名**: Y'm 整体サロン
- **所在地**: 埼玉県戸田市本町 1-2-3 サンプルビル 2F
- **メール**: info@ym-salon.com
- **LINE**: @ym-salon

---

© 2025 Y'm 整体サロン. All rights reserved.
