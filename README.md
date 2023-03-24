<link rel="stylesheet" href="https://activetk.github.io/endpoint.js/lib/bootstrap-4.1.3.min.css">

# EndPoint.js

ユーザーに関する詳細情報を取得できるJavaScriptです。

取得できる情報は以下の通りです。

<table border="1" class="table table-striped">
<tbody><tr><th>項目名</th><th>内容</th></tr>
<tr><td>PublicIP</td><td>ユーザーのIPアドレスです。</td></tr>
<tr><td>Host</td><td>IPアドレスのホスト名です。</td></tr>
<tr><td>UserAgent</td><td>ユーザーエージェントです。</td></tr>
<tr><td>IsItTor</td><td>Torを使用している場合はtrue、それ以外はfalseです。</td></tr>
<tr><td>RealIP</td><td>プロキシを経由する前のIPアドレスです(ただし偽造可能)。</td></tr>
<tr><td>WebRTCInfo</td><td>candidate情報です。</td></tr>
<tr><td>Browser.CodeName</td><td>ブラウザの開発コードです。</td></tr>
<tr><td>Browser.Name</td><td>ブラウザのベース名です。</td></tr>
<tr><td>Browser.Version</td><td>ブラウザのバージョンです。</td></tr>
<tr><td>Browser.Language</td><td>ブラウザの言語です。</td></tr>
<tr><td>Browser.Platform</td><td>ブラウザのプラットフォームです。</td></tr>
<tr><td>Browser.Referrer</td><td>アクセス元のURLです。</td></tr>
<tr><td>Browser.ScreenWidth</td><td>スクリーンの横の長さです。</td></tr>
<tr><td>Browser.ScreenHeight</td><td>スクリーンの縦の長さです。</td></tr>
<tr><td>Browser.ScreenColorDepth</td><td>色の深度です。</td></tr>
<tr><td>Browser.ViewPortWidth</td><td>ブラウザのビュアーの横の長さです。</td></tr>
<tr><td>Browser.ViewPortHeight</td><td>ブラウザのビュアーの縦の長さです。</td></tr>
<tr><td>Browser.DevicePixelRatio</td><td>CSS解像度と物理解像度の比です。</td></tr>
<tr><td>Browser.HasPointer</td><td>ポインター機能を保持しているか否かです。</td></tr>
<tr><td>Browser.MaxTouchPoints</td><td>最大同時ポイント数です。</td></tr>
<tr><td>Headers.UserAgent</td><td>ヘッダーによるユーザーエージェントです。</td></tr>
<tr><td>Headers.AcceptLanguage</td><td>対応言語の情報です。</td></tr>
<tr><td>Headers.AcceptEncoding</td><td>対応エンコーディングの情報です。</td></tr>
<tr><td>Headers.UserAgentClientHints</td><td>User-Agent Client Hintsです。</td></tr>
</tbody></table>

## 使用方法

1. まず初めに、Scriptをhead内で読み込む必要があります。

```html
<script src="https://activetk.github.io/endpoint.js/src/client/endpoint.js"></script>
```

2. JavaScriptでwindow.endpointjsから関数を呼び出します。
```html
<script>
  window.endpointjs(function( result ) {
    console.log(result);
    console.log("IPアドレス: " + result.PublicIP);
  });
</script>
```

## サンプル

<a href="https://activetk.github.io/endpoint.js/tests/html/index.html" target="_blank">https://activetk.github.io/endpoint.js/tests/html/index.html</a>

## 注意事項

<li>IPアドレス以外の全ての情報は偽造が可能です。</li>
<li>endpointjsの実行直後はIPアドレスを取得できない場合があります。<br>その場合、以下のようにsetTimeoutで遅延処理を行ってください。</li>

```JavaScript
window.endpointjs(function( result ) {
   setTimeout(function(){DoingSomething(result)}, 100);
});

function DoingSomething(result) {
  if (!result.PublicIP)
   setTimeout(function(){DoingSomething(result)}, 100);
  else
    for(key in result) {
      if (typeof result[key] === 'object')
        for (key2 in result[key])
          console.log(key + "." + key2 + ": " + result[key][key2]);
      else
        console.log(key + ": " + result[key]);
    }
  }
```

## ライセンス

本プロジェクトは、The MIT Licenseの下に公開されています。
