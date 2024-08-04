import { MdErrorOutline } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { useTheme } from "styled-components";
import { TiTick } from "react-icons/ti";

enum DeliveryStatuses {
  delivered = "delivered",
  pending = "pending",
  error = "error",
}

type Props = {
  status?: DeliveryStatuses;
};

export const DeliveryStatus = ({ status }: Props) => {
  const theme = useTheme();

  switch (status) {
    case DeliveryStatuses.delivered:
      return <TiTick color={theme.colors.success} />;

    case DeliveryStatuses.pending:
      return <MdOutlinePending color={theme.colors.info} />;

    case DeliveryStatuses.error:
      return <MdErrorOutline color={theme.colors.error} />;

    default:
      return null;
  }
};
