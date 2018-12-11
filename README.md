## 15jr.ml - IchigoLatte+MixJuice コンテンツ

![スクリーンショット](/screenshot.jpg)

イチゴジャム レシピ で公開している IchigoLatte のプログラム・コマンド一覧をまとめた\
専用の短縮 URL です。\
IchigoLatte 向けの MixJuice コンテンツは他に公開されていないため、\
ソースを公開する事で製作を促します。

## 使い方
lash より次のコマンドを入れます。（以後 lash> は入力不要です）

```
lash>echo MJ GETS 15jr.ml/> uart;cat uart
```

15jr.ml は入っているプログラム一覧は次で表示できます。

```
lash>echo MJ GETS 15jr.ml/program> uart;cat uart
```

プログラムは次のコマンドでダウンロードします。

```
lash>echo MJ GETS 15jr.ml/プログラム> uart;cat uart > .
```

IchigoLatte のコマンド表示は次で表示します。

```
lash>echo MJ GETS 15jr.ml/コマンド> uart;cat uart
```

## IchigoLatte 向け MixJuice コンテンツ製作の注意

- IchigoJam BASIC 向けとは異なり、コマンドの引き継ぎ（転送）を行えません。URL は短いものが良いです。
- lash では ↑ を押すと前のコマンドを表示できるため、同じコマンドが連続する状態では操作を軽減できます。
- 末尾にキャラクラーコード 4（16 進数 04）を入れておくと、IchigoLatte は受信を終了させ、lash へ戻ります。ただし、Kidspod; で使用すると LattePlayer が動作しません。[Facebook グループ IchigonQuest,IchigoLatte,etc-FAN 内](https://www.facebook.com/groups/568222796651326/permalink/856839061123030/)

## 関連リンク

- **IchigoLatte** http://ichigolatte.shizentai.jp/ \
- **MixJuice** http://mixjuice.shizentai.jp/

- **イチゴジャム レシピ** https://15jamrecipe.jimdo.com/
