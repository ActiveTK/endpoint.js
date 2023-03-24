/*!
 * EndPoint.js
 * Copyright 2023 ActiveTK. All rights reserved.
 * Released under the MIT license
 */

"use strict";
(function(window, undefined) {

  window.endpointjs = function( ...callback ) {

    let result = {};

    // ユーザーエージェント
    result.UserAgent = navigator.userAgent;

    // IPアドレス取得
    fetch("https://project.activetk.jp/endpoint/")
    .then(response => response.json())
    .then(data => {
      result.PublicIP = data.PublicIP;
    });

    // WebRTC
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var rtc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
    rtc.createDataChannel('');
    rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
    rtc.onicecandidate = function(ice) {
      if (ice && ice.candidate && ice.candidate.candidate) {
        result.WebRTCInfo = ice.candidate.candidate;
        try {
          result.PrivateIPaddress = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        } catch { }
        rtc.onicecandidate = noop;
      }
    }

    // callback実行
    for (let i = 0 ; i < callback.length ; i++)
    {
      if (typeof callback[i] === 'function')
        callback[i](result);
      else
        console.error(i + "番目の引数に関数以外が指定されました。");
    }

  }

}(window));
