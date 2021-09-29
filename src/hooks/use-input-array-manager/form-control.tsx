import { MdRemoveCircleOutline } from 'react-icons/md';
import { useFormState } from 'react-hook-form';

import { Input, IconButton } from '../../components';
import { FromControlContainer } from './styles';
import { formControlVariants } from './framer-motion.config';

interface FormControlProps {
  onRequestRemove: () => void;
  inputRegister: () => void;
  id: number;
  type: string;
}

export const FormControl = ({
  inputRegister,
  onRequestRemove,
  type,
  id,
}: FormControlProps) => {
  const { errors } = useFormState();
  return (
    <FromControlContainer
      variants={formControlVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <Input
          {...inputRegister()}
          type={type}
          error={errors?.[`input_${type}`]?.[id]?.value}
        />
      </div>

      <IconButton size="2.5rem" type="button" onClick={onRequestRemove}>
        <MdRemoveCircleOutline />
      </IconButton>
    </FromControlContainer>
  );
};
