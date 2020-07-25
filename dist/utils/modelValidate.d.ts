export interface ModelRuleType {
    field: string;
    valid: (value: any, errors: any[], model?: any) => void;
}
export interface ModelRuleErrorType {
    field: string;
    errors: string[];
}
declare const _default: (model: any, rules: ModelRuleType[]) => ModelRuleErrorType[];
export default _default;
