import mapResponseError from './mapResponseError';
import stringUtil from './stringUtil';
import serverSidePropsFactory from './serverSidePropsFactory';
import modelValidate from './modelValidate';
export { mapResponseError, stringUtil, serverSidePropsFactory, modelValidate };
declare const _default: {
    mapResponseError: (err: any) => {
        type: string;
        message: string;
    } | undefined;
    stringUtil: {
        emailIsValid: (email: string) => boolean;
        getDatetimeString: (value: Date) => string;
    };
    serverSidePropsFactory: (param: import("./serverSidePropsFactory").ServerSidePropsFactoryType) => {
        props: {
            responseType: string;
            redirectTo: string | null;
            data: any;
            messageError: any;
        };
    };
    modelValidate: (model: any, rules: import("./modelValidate").ModelRuleType[]) => import("./modelValidate").ModelRuleErrorType[];
};
export default _default;
