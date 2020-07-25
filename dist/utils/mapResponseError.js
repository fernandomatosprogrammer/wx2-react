"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = err => {
  if (!err.response) return mapToErrorMessage('Aparentemente você está sem internet. Caso esse não seja o problema, entre em contato conosco.');
  const {
    response
  } = err;

  switch (response.status) {
    case 409:
      return mapToAlertMessage(response.data);

    case 500:
      return mapToErrorMessage('ops! Um erro inesperado ocorreu :(');

    case 404:
      return mapToErrorMessage('recurso não foi localizado.');

    case 401:
      return mapToErrorMessage('não autorizado');
  }
};

exports.default = _default;

const mapToAlertMessage = message => {
  return mapToMessage('alert', message);
};

const mapToErrorMessage = message => {
  return mapToMessage('error', message);
};

const mapToMessage = (type, message) => {
  return {
    type,
    message
  };
};