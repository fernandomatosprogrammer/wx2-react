export default (model, rules) => {
    model = model || {}
    const errors = []
    rules.forEach(x => {
        if(!model) return
        const valueToTest = model[x.field]
        const errosRules = []
        x.valid(valueToTest, errosRules, model)

        if(errosRules.length > 0)
            errors.push({field: x.field, errors: errosRules})
    })

    return errors
}