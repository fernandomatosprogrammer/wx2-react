import { ModelRuleType } from "../utils/modelValidate";
export interface UseFormParamType {
    initialModelValue: any;
    modelRules: ModelRuleType[];
    asyncSubmit: () => Promise<any>;
    submitSucessCallback?: () => void;
    submitErrorCallback?: () => void;
    asyncLoadModel?: () => Promise<any>;
}
declare const _default: (param: UseFormParamType) => any[];
export default _default;
