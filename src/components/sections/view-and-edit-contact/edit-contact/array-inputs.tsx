import { useInputArrayManager } from '../../../../hooks';

export const ArrayInputs = () => {
  const emailInputs = useInputArrayManager({
    name: 'input_email',
    inputType: 'email',
    label: 'Email',
  });

  const telInputs = useInputArrayManager({
    name: 'input_tel',
    inputType: 'tel',
    label: 'Phone',
  });
  
  return (
    <>
      {emailInputs.formControlElement}
      {telInputs.formControlElement}
    </>
  );
};
