<?php
//メールの情報を設定
$mailto = "gfa00161@nifty.com";
$title = "タイトルテスト";
$message = "本文のテストです。";
$option= "From: h.tomita.jp@gmail.com";

//メールの送信
if(mail($mailto,$title,$message,$option)){
	echo "送信成功";
}else{
	echo "送信失敗";
}
?>