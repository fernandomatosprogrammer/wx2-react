export default (err: any) => {
    if(!err.response) 
        return mapToErrorMessage('Aparentemente você está sem internet. Caso esse não seja o problema, entre em contato conosco.')
    
    const {response} = err;

    switch(response.status){
        case 409:
            return mapToAlertMessage(response.data)
        case 500:
            return mapToErrorMessage('ops! Um erro inesperado ocorreu :(') 
        case 404:
            return mapToErrorMessage('recurso não foi localizado.')    
        case 401:
            return mapToErrorMessage('não autorizado');                 
    }
}

const mapToAlertMessage = (message: string) => {
    return mapToMessage('alert', message)
}

const mapToErrorMessage = (message: string) => {
    return mapToMessage('error', message)
}

const mapToMessage = (type: string, message: string) => {
    return {
        type,
        message
    }
}