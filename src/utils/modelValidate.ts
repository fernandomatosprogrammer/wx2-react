
export interface ModelRuleType {
    field: string,
    valid: (value: any, errors: any[], model?: any) => void
}

export interface ModelRuleErrorType {
    field: string,
    errors: string[]
}

export default (model: any, rules: ModelRuleType[]): ModelRuleErrorType[] => {
    model = model || {}
    const errors: ModelRuleErrorType[] = []
    rules.forEach(x => {
        if(!model) return
        const valueToTest = model[x.field]
        const errosRules: string[] = []
        x.valid(valueToTest, errosRules, model)

        if(errosRules.length > 0)
            errors.push({field: x.field, errors: errosRules})
    })

    return errors
}