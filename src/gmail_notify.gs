function ContactGmail() {
  // 検索条件(未読)
  var search_unread = "is:unread";
  //Date型でオブジェクト生成(初期値は現在日時)
  var date = new Date();
  //今日の日付を表示
  //Logger.log(Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy/MM/dd'));

  //1か月以内に設定
  var month = date.getMonth();
  date.setMonth(month-1);
  var onemonthbefore = Utilities.formatDate(date, 'JST', 'yyyy/MM/dd');
  Logger.log(onemonthbefore);
  var beforemonth = "after:" + onemonthbefore;

  // 最終的な文字列調整
  var search_condition = search_unread + " " + beforemonth;

  // メールでの絞り込み
  var mails = GmailApp.search(search_condition, 0, 30);
  var mail_data = GmailApp.getMessagesForThreads(mails);

  if (mail_data.length == 0) {
    post_message = "1か月以内に未読のメールはありません。";
    SendMessage(post_message)
  } else {
    for(var i = 0; i < mail_data.length; i++) {

      let date = mail_data[i][0].getDate(); // 受信日時
      let subject = mail_data[i][0].getSubject(); // 件名
      let froms = mail_data[i][0].getFrom(); // 送信者
      let link = mails[i].getPermalink(); // Gmailリンク

      let post_array = [
        [],
        ["date:" + Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy/MM/dd hh:mm:ss')],
        ["subject:" + subject],
        ["from:" + froms],
        ["link:" + link]
      ];
      
      console.log(post_array.join("\n"));
      SendMessage(post_array.join("\n"))
    }
  }
}

function SetData() {
  var message = "テスト用送信";
  SendMessage(message)
}

function SendMessage(content) {
  // トークン情報
  const TOKEN = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  const url = "https://notify-api.line.me/api/notify"

  var data = {
    "method": "post",
    "headers": {"Authorization": "Bearer " + TOKEN},
    "payload": {"message": content}
  };
  UrlFetchApp.fetch(url, data);
}
