import { useState, useEffect } from "react"
import modelValidate, {ModelRuleType} from "../utils/modelValidate"

export interface UseFormParamType {
    initialModelValue: any,
    modelRules: ModelRuleType[],
    asyncSubmit: () => Promise<any>,
    submitSucessCallback?: () => void,
    submitErrorCallback?: () => void,
    asyncLoadModel?: () => Promise<any>
}

export default (param: UseFormParamType) => {    
    const {initialModelValue, modelRules, asyncSubmit, submitSucessCallback, submitErrorCallback, asyncLoadModel} = param
    const [model, setModel] = useState(initialModelValue || {})
    const [modelDirty, setModelDirty] = useState(false)
    const [errors, setErrors] = useState([])
    const [hasSubmit, setHasSubmit] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [modelLoaded, setModelLoaded] = useState(false)

    useEffect(() => {
        if(asyncLoadModel){
            asyncLoadModel().then(m => {
                setModel(m)
                setModelLoaded(true)
                setModelDirty(false)
            }, () => {
                setModelLoaded(true)
            })
        }
        else{
            setModelLoaded(true)
        }           

    }, [])

    useEffect(() => {
        if(modelLoaded) setModelDirty(true)
    }, [model])    

    useEffect(() => {
        if(hasSubmit) validate()
    }, [hasSubmit, model])

    const validate = () => {
        const errors = modelValidate(model, modelRules)
        setErrors(<[]>errors)
        return errors
    }

    const submit = async (event: Event) => {
        event.preventDefault()

        setHasSubmit(true)
        setSubmitLoading(true)

        if(validate().length > 0) {
            setSubmitLoading(false)
            return;
        }        

        asyncSubmit()
            .then(x => {
                setSubmitLoading(false)         
                setModelDirty(false)
                if(submitSucessCallback) submitSucessCallback()
            }, () => {
                setSubmitLoading(false)
                if(submitErrorCallback) submitErrorCallback()
            })
    }

    return [
        model,
        setModel,
        {
            errors,
            submitLoading,
            modelLoaded,
            modelDirty,
            hasSubmit,
            submit
        }                
    ]
}