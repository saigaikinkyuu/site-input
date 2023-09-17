<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $xmlData = file_get_contents('php://input');
    
    // ファイル名と保存先ディレクトリを指定
    $fileName = 'form_data.xml';
    $filePath = 'savedata/' . $fileName;

    // XMLデータをファイルに保存
    file_put_contents($filePath, $xmlData);
}
?>
