## 15jr.ml - IchigoLatte+MixJuice コンテンツ

![スクリーンショット](/screenshot.jpg)

イチゴジャム レシピ で公開している IchigoLatte のプログラム・コマンド一覧をまとめた\
専用の短縮 URL です。\
IchigoLatte 向けの MixJuice コンテンツは他に公開されていないため、\
ソースを公開する事で製作を促します。

## 注意事項

1 文字違う別のコンテンツ [15j**a**.ml](https://github.com/fu-sen/15ja.ml) が存在します。

## 使い方

**15jr.ml の GETS は MixJuice 1.2.2 以降 または MicJack で使用可能です。**\
MixJuice 1.2.1 以前では GET に変更して参照できますが、\
イチゴジャム レシピ MixJuice コンテンツは MixJuice 1.2.2 以降・MicJack 必須ですので\
MixJuice を使用している場合は最新バージョンに更新して下さい。

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
- 末尾にキャラクターコード 4（16 進数 04・Ctrl+D）を入れておくと、IchigoLatte は受信を終了させ、lash へ戻ります。<br />ただし、Kidspod; で使用すると LattePlayer が動作しません。<br />[Facebook グループ IchigonQuest,IchigoLatte,etc-FAN 内](https://www.facebook.com/groups/568222796651326/permalink/856839061123030/)

## 関連リンク

**IchigoLatte** http://ichigolatte.shizentai.jp/ \
**MixJuice** http://mixjuice.shizentai.jp/

**イチゴジャム レシピ** https://15jamrecipe.jimdo.com/
