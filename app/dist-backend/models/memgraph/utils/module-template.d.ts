export interface IModuleTemplateCodeOptions {
    includeFunction: boolean;
    includeProcedure: boolean;
    includeTransformation: boolean;
}
export declare const getModuleTemplateHeaderCode: (options: IModuleTemplateCodeOptions) => string;
export declare const getModuleTemplateImportCode: (options: IModuleTemplateCodeOptions) => string;
export declare const getModuleTemplateCode: (moduleName: string, options?: IModuleTemplateCodeOptions | undefined) => string;
