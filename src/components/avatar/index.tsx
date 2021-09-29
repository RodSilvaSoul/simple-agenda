import { HtmlHTMLAttributes, useState } from 'react';
import { MdPerson } from 'react-icons/md';

import { Container } from './styles';

interface AvatarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size: string | number;
  alt: string;
  src?: string | null;
}

export const Avatar = ({ size, alt, src = null, ...rest }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(!!src);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container isLoading={isLoading} size={size} {...rest}>
      {src ? (
        <img src={src} alt={alt} onLoad={onLoad} />
      ) : (
        <MdPerson role="figure" />
      )}
    </Container>
  );
};
