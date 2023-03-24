/*!
 * EndPoint.js
 * Copyright 2023 ActiveTK. All rights reserved.
 * Released under the MIT license
 */

"use strict";

(function(window, undefined) {

  window.endpointjs = function( ...callback ) {

    let result = {};

    result.UserAgent = navigator.userAgent;

    for (let i = 0 ; i < callback.length ; i++)
    {
      if (typeof callback[i] === 'function')
        callback[i](result);
      else
        console.error(i + "番目の引数に関数以外が指定されました。");
    }

  }

}(window));
