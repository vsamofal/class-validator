import { ValidationOptions } from '../ValidationOptions';
import { ValidationMetadataArgs } from '../../metadata/ValidationMetadataArgs';
import { ValidationTypes } from '../../validation/ValidationTypes';
import { ValidationMetadata } from '../../metadata/ValidationMetadata';
import { getMetadataStorage } from '../../metadata/MetadataStorage';

/**
 * Resolve promise before validation
 */
export function ValidatePromise(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (object: object, propertyName: string | symbol): void {

    if(typeof propertyName === 'symbol') {
      throw new Error('ValidatePromise does not support symbol properties');
    }

    const args: ValidationMetadataArgs = {
      type: ValidationTypes.PROMISE_VALIDATION,
      target: object.constructor,
      propertyName: propertyName,
      validationOptions: validationOptions,
    };
    getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
  };
}
