document.getElementById("githubForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const accessToken = "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"; // 1.で取得したアクセストークン
  const repoOwner = "saigaikinkyuu"; // リポジトリの所有者のGitHubユーザー名
  const repoName = "site-input"; // リポジトリ名
  const filePath = "path/to/data.xml"; // ファイルのパス
  const data = document.getElementById("data").value;

  // GitHub APIを使用してファイルを更新
  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
    method: "GET",
    headers: {
      "Authorization": `token ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((fileData) => {
      // 現在のファイルデータを取得

      const currentData = atob(fileData.content);
      const newData = `${currentData}\n${data}`;

      // 新しいデータをファイルに書き込み
      return fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        method: "PUT",
        headers: {
          "Authorization": `token ${accessToken}`,
        },
        body: JSON.stringify({
          message: "データを更新",
          content: btoa(newData),
          sha: fileData.sha,
        }),
      });
    })
    .then(() => {
      alert("データが更新されました。");
    })
    .catch((error) => {
      console.error("エラー:", error);
    });
});
