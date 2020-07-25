export interface ServerSidePropsFactoryType {
    messageError?: any,
    redirectTo?: string,
    data?: any}


export default (param: ServerSidePropsFactoryType) => {
    let {messageError, redirectTo, data} = param
    data = data || undefined
    let responseType = 'success'

    if(redirectTo) responseType = 'redirect'
    else if (messageError) responseType = 'error'

    return {
        props: {
            responseType,
            redirectTo: redirectTo || null,
            data: data || null,
            messageError: messageError || null
        }
    }
}