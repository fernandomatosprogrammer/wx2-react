export declare const useForm: (param: import("./hooks/useForm").UseFormParamType) => any[];
export declare const mapResponseError: (err: any) => {
    type: string;
    message: string;
} | undefined, modelValidate: (model: any, rules: import("./utils/modelValidate").ModelRuleType[]) => import("./utils/modelValidate").ModelRuleErrorType[], serverSidePropsFactory: (param: import("./utils/serverSidePropsFactory").ServerSidePropsFactoryType) => {
    props: {
        responseType: string;
        redirectTo: string | null;
        data: any;
        messageError: any;
    };
}, stringUtil: {
    emailIsValid: (email: string) => boolean;
    getDatetimeString: (value: Date) => string;
};
declare const _default: {
    useForm: (param: import("./hooks/useForm").UseFormParamType) => any[];
    mapResponseError: (err: any) => {
        type: string;
        message: string;
    } | undefined;
    modelValidate: (model: any, rules: import("./utils/modelValidate").ModelRuleType[]) => import("./utils/modelValidate").ModelRuleErrorType[];
    serverSidePropsFactory: (param: import("./utils/serverSidePropsFactory").ServerSidePropsFactoryType) => {
        props: {
            responseType: string;
            redirectTo: string | null;
            data: any;
            messageError: any;
        };
    };
    stringUtil: {
        emailIsValid: (email: string) => boolean;
        getDatetimeString: (value: Date) => string;
    };
};
export default _default;
