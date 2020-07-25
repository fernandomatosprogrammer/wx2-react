"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _modelValidate = _interopRequireDefault(require("../utils/modelValidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = param => {
  const {
    initialModelValue,
    modelRules,
    asyncSubmit,
    submitSucessCallback,
    submitErrorCallback,
    asyncLoadModel
  } = param;
  const [model, setModel] = (0, _react.useState)(initialModelValue || {});
  const [modelDirty, setModelDirty] = (0, _react.useState)(false);
  const [errors, setErrors] = (0, _react.useState)([]);
  const [hasSubmit, setHasSubmit] = (0, _react.useState)(false);
  const [submitLoading, setSubmitLoading] = (0, _react.useState)(false);
  const [modelLoaded, setModelLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (asyncLoadModel) {
      asyncLoadModel().then(m => {
        setModel(m);
        setModelLoaded(true);
        setModelDirty(false);
      }, () => {
        setModelLoaded(true);
      });
    } else {
      setModelLoaded(true);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (modelLoaded) setModelDirty(true);
  }, [model]);
  (0, _react.useEffect)(() => {
    if (hasSubmit) validate();
  }, [hasSubmit, model]);

  const validate = () => {
    const errors = (0, _modelValidate.default)(model, modelRules);
    setErrors(errors);
    return errors;
  };

  const submit = async event => {
    event.preventDefault();
    setHasSubmit(true);
    setSubmitLoading(true);

    if (validate().length > 0) {
      setSubmitLoading(false);
      return;
    }

    asyncSubmit().then(x => {
      setSubmitLoading(false);
      setModelDirty(false);
      if (submitSucessCallback) submitSucessCallback();
    }, () => {
      setSubmitLoading(false);
      if (submitErrorCallback) submitErrorCallback();
    });
  };

  return [model, setModel, {
    errors,
    submitLoading,
    modelLoaded,
    modelDirty,
    hasSubmit,
    submit
  }];
};

exports.default = _default;