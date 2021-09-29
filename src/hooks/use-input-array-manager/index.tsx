import { useEffect } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { MdAddCircleOutline } from 'react-icons/md';

import { IconButton } from '../../components';
import { FormControl } from './form-control';
import { FormGroup } from './styles';

type UseInputArrayManagerProps = {
  name: string;
  inputType?: 'email' | 'tel' | 'text';
  label: string;
};

export const useInputArrayManager = ({
  name,
  inputType = 'text',
  label,
}: UseInputArrayManagerProps) => {
  const { control, register } = useFormContext();

  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(
        {
          value: '',
        },
        {
          shouldFocus: false,
        },
      );
    }
  }, [append, fields]);

  const formControlElement = (
    <FormGroup>
      <label>{label}</label>

      {fields.map((field, index) => {
        return (
          <FormControl
            key={field.id}
            inputRegister={() => register(`${name}.${index}.value`)}
            id={index}
            type={inputType}
            onRequestRemove={() => remove(index)}
          />
        );
      })}

      <IconButton
        type="button"
        size="2.5rem"
        onClick={() =>
          append({
            value: '',
          })
        }
      >
        <MdAddCircleOutline />
      </IconButton>
    </FormGroup>
  );

  return {
    formControlElement,
  };
};
