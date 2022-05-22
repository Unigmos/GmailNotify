# GmailNotify
Gmailからの通知をLINEに送信するプログラム

## 送信イメージ(文字)
```
date:2022/05/20 12:00:00
subject:タイトル
from:〇〇<xxxxx@xx.co.jp>
link:https://xxxxxxxxxxxxxxx.com
```

## 環境
実行環境はGoogle Driveを利用しています。<br>
Google DriveにログインしたアカウントのGmailアカウントからの内容送信になるので使用時はご注意ください。<br>
プログラム実行のトリガーを設定することで定期的(毎日・毎週等)にプログラムを実行することができます。

## トークンについて
トークンはプログラム上では```const TOKEN="xxxxxxxxxxxxxxxxxxxxxxxxxx"```と伏せてあります。<br>
実際に利用する際はLINE上でトークンを取得し、変数「TOKEN」に置き換えてください。
