export default ({messageError, redirectTo, data}) => {
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