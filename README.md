## 15lt.eu.org - IchigoLatte+MixJuice コンテンツ

![スクリーンショット](/screenshot.jpg)

イチゴジャム レシピ で公開している\
IchigoLatte のプログラム・コマンド一覧をまとめた専用の短縮 URL です。\
IchigoLatte の代わりに IchigoCake JavaScript も使用可能です。\
IchigoLatte 向けの MixJuice コンテンツは他に公開されていないため、\
ソースを公開する事で製作を促します。

2019年5月8日より IchigoLatte Ruby・IchigoLatte FORTH にも対応しています。\
2022年10月26日より、ドメインを `15lt.eu.org` にして、\
GitHub Pages を用いる事で MixJuice でダウンロードできるようにしています。

___

## 使い方

lash より次のコマンドを入れます。（以後 lash> は入力不要です）\
GET の代わりに GETS も使用可能です。（GETS は MixJuice 1.2.2 以降で有効です）

```
lash>echo MJ GET 15lt.eu.org/> uart;cat uart
```

___

### プログラム

プログラムは次で一覧できます。

```
lash>echo MJ GET 15lt.eu.org/j> uart;cat uart (JavaScript)
lash>echo MJ GET 15lt.eu.org/jp> uart;cat uart (JavaScript+PanCake)
lash>echo MJ GET 15lt.eu.org/r> uart;cat uart (Ruby)
lash>echo MJ GET 15lt.eu.org/f> uart;cat uart (FORTH)
lash>echo MJ GET 15lt.eu.org/p> uart;cat uart (Python)
```

プログラムは次のコマンドでダウンロードします。\
2021年2月11日より、`.js` `.rb` `.fs` `.py` の拡張子が付いています。

```
lash>echo MJ GET m15.lt/プログラム> uart;cat uart > .
```

___

## IchigoLatte 向け MixJuice コンテンツ製作の注意

- IchigoJam BASIC 向けとは異なり、コマンドの引き継ぎ（転送）を行えません。URL は短いものが良いです。
- lash では ↑ を押すと前のコマンドを表示できるため、同じコマンドが連続する状態では操作を軽減できます。
- 末尾にキャラクターコード 4（16 進数 04・Ctrl+D）を入れておくと、<br />IchigoLatte は受信を終了させ、lash へ戻ります。<br />ただし、Kidspod; で使用すると LattePlayer が動作しません。<br />[Facebook グループ IchigonQuest,IchigoLatte,etc-FAN 内](https://www.facebook.com/groups/568222796651326/permalink/856839061123030/)
- lash 動作は言語に関係なく共通です。

___

## 関連リンク

**IchigoLatte** http://ichigolatte.shizentai.jp/ \
**MixJuice** http://mixjuice.shizentai.jp/ \
**Kidspod;** http://kidspod.club/

**イチゴジャム レシピ** https://15jamrecipe.jimdofree.com/

Powered by GitHub Pages https://pages.github.com/
