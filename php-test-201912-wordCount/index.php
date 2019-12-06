<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php
 
$input_filename = 'test.srt';
$fpr = fopen($input_filename, 'r');

while ($line = fgets($fpr)) {
  $line = str_replace(["\r\n", "\r", "\n"], '', $line);
  $line = str_replace(['.', '-', '!', '?', ',', '"'], '', $line);
  if (strcmp($line, '') == 0){
    $lastline = implode( " ", $multiline );
    // echo "%%%".$lastline."%%%</br>";
    $lastline = preg_replace("/\[.*\]/", '', $lastline);

    $words = explode(" ", $lastline);
    foreach ($words as $word) {
      if(!empty($word)){
        $wordcount[] = strtolower($word);
      }
    }

    $linecount = 0;
  }

  if($linecount > 2){
    // echo "###".$line."###";
    // echo "<br />";
    $multiline[$linecount - 2] = $line;
  }

  $linecount++;
}

fclose($fpr);

$data = array_count_values($wordcount);
arsort($data);

foreach ($data as $key => $value)
{
  echo $key.":".$value."</br>";
}


?>

 </body>
</html>