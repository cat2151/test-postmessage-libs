# test-postmessage-libs

# Demo
[Postmate Demo](https://cat2151.github.io/test-postmessage-libs/postmate/)

# Features
- 2つのwebpage間の双方向通信を可能に
  - [Postmate](https://github.com/dollarshaveclub/postmate)を使っています
- シンプルな実装でわかりやすいサンプル
  - 実際動くサンプル
  - もしOS都合などで動かなくなっても、原因調査がしやすいよう、
    - console.logなどを散りばめ、ソースコードも読みやすいことを優先

# Requirement
- 動かす場合
  - ブラウザがあればOK
  - [Postmate Demo](https://cat2151.github.io/test-postmessage-libs/postmate/) がそのまま動きます
- 開発する場合
  - ブラウザがあればOK
  - VSCode の Live Server等があれば楽

# Usage
- 動かす場合
  - [Postmate Demo](https://cat2151.github.io/test-postmessage-libs/postmate/) を開きます
  - parentのtextareaに入力し、childに自動反映されることを確認します
  - childのtextareaに入力し、parentに自動反映されることを確認します
  - Chrome DevTools コンソールを開き、reloadして、consoleのlogを確認します

# Installation
- 開発する場合
  - cloneして `postmate/` を`VSCode`で開いて`Live Server`を立ち上げるだけでOK

# Note
- このprojectが目指すもの
  - Web MIDI 未対応の環境で、例えば`Sequencerのwebpage`と`Synthのwebpage`を無理やり双方向通信させて動かす（まったく動かないよりはマシなレベルで）用の
    - 技術選定
  - もしOS都合などで動かなくなっても、すぐ原因調査ができる状態にしておくことを優先
  - もし動かなくなったら、できるだけ動かすよう行動することを優先
- このprojectが目指さないもの
  - Postmateの完全なリファレンスを作成、細部まで完璧に使いこなす、未知の部分がなくなるまですべて調査する、使い倒す
  - 高速化、高機能化
- Experimental 親、子、孫、それぞれで双方向通信
  - [Demo](https://cat2151.github.io/test-postmessage-libs/postmate/grandchild/)
    - 孫の通信開始は、親のtextareaに入力したタイミングとしています、仮です。
    - ただし通信開始が早すぎると失敗します。
    - 改善は今後の課題です。
