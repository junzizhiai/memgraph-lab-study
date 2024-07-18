import { ValidationOptions } from 'class-validator';
export declare type ValidationWrapper = (object: Object, propertyName: string) => void;
export interface IValidationContextOptions {
    isSkipped: boolean;
}
export declare const IsNotBlank: (validationOptions?: ValidationOptions | undefined) => ValidationWrapper;
export declare const IsFQDNorIP: (validationOptions?: ValidationOptions | undefined, context?: Partial<IValidationContextOptions> | undefined) => ValidationWrapper;
export declare const OptionalMaxLength: (maxLength: number, validationOptions?: ValidationOptions | undefined, context?: Partial<IValidationContextOptions> | undefined) => ValidationWrapper;
