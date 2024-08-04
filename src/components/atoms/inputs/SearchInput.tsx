import { TextInput, TextInputProps } from "./TextInput";
import { IoIosSearch } from "react-icons/io";
import { useTheme } from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClear: () => void;
  value: string;
} & TextInputProps;

export const SearchInput = ({ onClear, value, ...props }: Props) => {
  const theme = useTheme();

  const showAction = !!value;

  return (
    <TextInput
      value={value}
      icon={<IoIosSearch size={theme.typography.fontSize.xlarge} />}
      actionIcon={<IoCloseSharp size={theme.typography.fontSize.xlarge} />}
      action={showAction ? onClear : undefined}
      {...props}
    />
  );
};
