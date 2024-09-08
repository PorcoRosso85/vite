#

##

### TODO

- コンポーネント簡単に作りたい
  - Adobe, react aria components
- グラフビジュアライズしたい
  - react flow → 却下
  - Airbnb, visx
    - visxしかないか、、、<https://github.com/enaqx/awesome-react?tab=readme-ov-file#react-charts>
- pgliteにまとめてデータ追加できるようにしたい
  - シートインポート、<https://iddan.github.io/react-spreadsheet/>
    - バリデーションオブザーバー
      - バリデーター呼び出しラッパー → 'src/utils/validator.ts'
      - データ型をカラムごと（シートに関わるバリデーションロジック部分） → 'src/features/wyah/utils/validator.ts'
- ダウンロードしたいを叶えたい
- ユーザー側DBをレプリカとして中央DBに同期させたい
  - オフライン対応
  - データ同期
  - データバックアップ
  - データリストア

### Dir

```log
src/
├── assets          # CSSや画像などの静的コンテンツ
├── components      # グローバルに扱うコンポーネント
├── config          # APIのURLや固定値などの設定
├── features        # 機能ベースのモジュール
├── hooks           # グローバルに扱うHooks
├── lib             # ライブラリの設定と再エクスポート
├── pages           # 最終的に描画するページコンポーネント
├── providers       # アプリ全体で使用するプロバイダー
├── routes          # ルーティング設定
├── stores          # グローバルな状態管理
├── test            # テスト用の機能やモックサーバー
├── types           # アプリ全体で使用する基本的な型
└── utils           # 共通の関数

src/features/
└── wyah/
     ├── api        # 特定機能に関連するAPIリクエストとapi hooks
     ├── assets     # 特定機能で使用する静的コンテンツ
     ├── components # 特定機能のコンポーネント
     ├── hooks      # 特定機能のhooks
     ├── stores     # 特定機能の状態管理
     ├── types      # 特定機能の型
     ├── utils      # 特定機能の関数
     └── index.ts   # 特定機能のエントリーポイント（パブリックAPI）
```

```sh
#!/bin/bash

mkdir -p src/{assets,components,config,features,hooks,lib,pages,providers,routes,stores,test,types,utils}
mkdir -p src/features/wyah/{api,assets,components,hooks,stores,types,utils}

```
