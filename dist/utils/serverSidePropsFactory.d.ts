export interface ServerSidePropsFactoryType {
    messageError?: any;
    redirectTo?: string;
    data?: any;
}
declare const _default: (param: ServerSidePropsFactoryType) => {
    props: {
        responseType: string;
        redirectTo: string | null;
        data: any;
        messageError: any;
    };
};
export default _default;
