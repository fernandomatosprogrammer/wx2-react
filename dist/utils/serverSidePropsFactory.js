"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = param => {
  let {
    messageError,
    redirectTo,
    data
  } = param;
  data = data || undefined;
  let responseType = 'success';
  if (redirectTo) responseType = 'redirect';else if (messageError) responseType = 'error';
  return {
    props: {
      responseType,
      redirectTo: redirectTo || null,
      data: data || null,
      messageError: messageError || null
    }
  };
};

exports.default = _default;