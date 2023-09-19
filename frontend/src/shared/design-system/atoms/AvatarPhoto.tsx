import { Image, ImageProps } from '@chakra-ui/react';

type Props = ImageProps & {
  size?: string;
};

export function AvatarPhoto({ src, alt, size = '16', ...restProps }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      borderRadius="md"
      border="1px"
      borderColor="gray.100"
      w={size}
      h={size}
      maxW={size}
      {...restProps}
    />
  );
}
