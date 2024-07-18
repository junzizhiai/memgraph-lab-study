export interface IFunctionArgument {
    name: string;
    type: string;
    default?: any;
}
export interface IFunctionResult {
    name: string;
    type: string;
}
export interface IFunction {
    name: string;
    namespace: string;
    signature: string;
    inputs: IFunctionArgument[];
    outputs: IFunctionResult[];
}
/**
 * Parses the signature text in the following format:
 * <namespace>.<name>(<arg-name> (= <default-value) :: <type>, ...) :: (<result-name> :: <type>, ...)
 * @param signature
 */
export declare const parseFunctionSignature: (signature: string) => IFunction;
