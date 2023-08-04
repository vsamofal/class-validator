import { Validator } from '../../src/validation/Validator';
import { isNotEmpty, registerSchema, ValidationTypes } from '../../src';

const validator = new Validator();

describe('validation schema', () => {
  it("shouldn't validate a property when the condition is false", () => {
    expect.assertions(1);

    registerSchema({
      name: 'TEST',
      properties: {
        test: [
          {
            type: ValidationTypes.CUSTOM_VALIDATION,
            constraintCls: isNotEmpty,
            message: 'common.errors.isNotEmpty',
          },
        ],
      },
    });

    return validator
      .validate('TEST', {
        test: '',
      })
      .then(errors => {
        expect(errors.length).toEqual(1);
      });
  });
});
