import { Icon, TransparentButton, TransparentButtonProps } from '../atoms';
import { SyncIcon } from '../icons';

type Props = TransparentButtonProps & {
  isLoading?: boolean;
};

export function ReloadButton({ isLoading, ...restProps }: Props) {
  return (
    <TransparentButton bg="gray.100" {...restProps}>
      <Icon as={SyncIcon} isSpinning={isLoading} mr="2" fontSize="xs" />
      Reload
    </TransparentButton>
  );
}
