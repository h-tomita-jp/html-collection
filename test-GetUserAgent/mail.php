<?php

//URLパラメタ(ua)を取得
if(isset($_GET['ua'])) { $ua = $_GET['ua']; }

//メールの情報を設定
$mailto = "gfa00161@nifty.com";
$title = "UserAgent";
$message = "UserAgent: ".$ua;
$option= "From: gfa00161@nifty.com";

//メールの送信
if(mail($mailto,$title,$message,$option)){
	echo "ユーザエージェント情報のメール送信成功";
}else{
	echo "ユーザエージェント情報のメール送信失敗";
}
?>