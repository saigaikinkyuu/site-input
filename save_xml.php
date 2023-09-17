<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $xmlData = file_get_contents("php://input");
    $xml = new SimpleXMLElement($xmlData);
    
    $filename = "formdata_" . date("YmdHis") . ".xml"; // ファイル名を一意に生成
    $filepath = "path/to/save/" . $filename; // ファイルの保存先パス

    // XMLデータをファイルに保存
    if (file_put_contents($filepath, $xmlData) !== false) {
        echo "フォームデータが保存されました。";
    } else {
        echo "フォームデータの保存に失敗しました。";
    }
} else {
    echo "無効なリクエストです。";
}
?>
