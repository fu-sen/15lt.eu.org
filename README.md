## m15.lt - IchigoLatte+MixJuice コンテンツ

![スクリーンショット](/screenshot.jpg)

イチゴジャム レシピ で公開している\
IchigoLatte のプログラム・コマンド一覧をまとめた専用の短縮 URL です。\
IchigoLatte の代わりに IchigoCake JavaScript も使用可能です。\
IchigoLatte 向けの MixJuice コンテンツは他に公開されていないため、\
ソースを公開する事で製作を促します。

2019年5月2日より m15.lt で公開しています。\
2019年5月8日より IchigoLatte Ruby・IchigoLatte Forth にも対応しています。

## 使い方

lash より次のコマンドを入れます。（以後 lash> は入力不要です）

```
lash>echo MJ GET m15.lt/> uart;cat uart  (JavaScript)
lash>echo MJ GET m15.lt/r/> uart;cat uart (Ruby)
lash>echo MJ GET m15.lt/f/> uart;cat uart (Forth)
```

GET の代わりに **GETS** も使用可能です。

JavaScript では、m15.lt に入っているプログラム一覧を次で表示できます。\

```
lash>echo MJ GET m15.lt/program> uart;cat uart
```

更に PanCake＋IchigoLatte は別ファイルとして program の前に p を追加しています。

```
lash>echo MJ GET m15.lt/pprogram> uart;cat uart
```

プログラムは次のコマンドでダウンロードします。

```
lash>echo MJ GET m15.lt/プログラム> uart;cat uart > . (JavaScript)
lash>echo MJ GET m15.lt/r/プログラム> uart;cat uart > . (Ruby)
lash>echo MJ GET m15.lt/f/プログラム> uart;cat uart > . (Forth)
```

IchigoLatte JavaScript のコマンド表示は次で表示します。

```
lash>echo MJ GET m15.lt/コマンド> uart;cat uart
```

コマンド表示は現在 JavaScript のみです。\
Ruby・Forth は現在開発途中で変化する可能性があるため、\
仕様・機能が整った頃に対応する予定でいます。

## IchigoLatte 向け MixJuice コンテンツ製作の注意

- IchigoJam BASIC 向けとは異なり、コマンドの引き継ぎ（転送）を行えません。URL は短いものが良いです。
- lash では ↑ を押すと前のコマンドを表示できるため、同じコマンドが連続する状態では操作を軽減できます。
- 末尾にキャラクターコード 4（16 進数 04・Ctrl+D）を入れておくと、<br />IchigoLatte は受信を終了させ、lash へ戻ります。<br />ただし、Kidspod; で使用すると LattePlayer が動作しません。<br />[Facebook グループ IchigonQuest,IchigoLatte,etc-FAN 内](https://www.facebook.com/groups/568222796651326/permalink/856839061123030/)
- lash 動作は言語に関係なく共通です。

## 関連リンク

**IchigoLatte** http://ichigolatte.shizentai.jp/ \
**MixJuice** http://mixjuice.shizentai.jp/

**イチゴジャム レシピ** https://15jamrecipe.jimdo.com/
