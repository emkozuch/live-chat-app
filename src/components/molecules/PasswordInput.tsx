import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiLockPasswordLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TextInput, TextInputProps } from "components";

export const PasswordInput = (props: TextInputProps) => {
  const [showPass, setShowPass] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();

  const actionIcon = showPass ? (
    <AiOutlineEye size={theme.typography.fontSize.xlarge} />
  ) : (
    <AiOutlineEyeInvisible size={theme.typography.fontSize.xlarge} />
  );

  return (
    <TextInput
      {...props}
      placeholder={t("auth.inputs.password.placeholder")}
      type={showPass ? "text" : "password"}
      icon={<RiLockPasswordLine size={theme.typography.fontSize.xlarge} />}
      action={() => setShowPass((prev) => !prev)}
      actionIcon={actionIcon}
    />
  );
};
