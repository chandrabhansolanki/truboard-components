import {
  Button,
  ButtonProps,
  useMantineTheme,
} from "@mantine/core";
import { PolymorphicComponentProps } from "@mantine/utils";
import { TRUBOARD_ACCENT_PURE, TRUBOARD_PRIMARY } from "./constants";

export interface TBButtonProps
  extends PolymorphicComponentProps<"button", ButtonProps> {
  light?: boolean;
}

function TBButton(props: TBButtonProps) {
  const theme = useMantineTheme();
  const { light, ...buttonProps } = props;
  return (
      <Button
        {...buttonProps}
        style={{
          backgroundColor: buttonProps.disabled
            ? undefined
            : light
            ? TRUBOARD_ACCENT_PURE
            : TRUBOARD_PRIMARY,
          width: "fit-content",
          color: buttonProps.disabled
            ? undefined
            : light
            ? TRUBOARD_PRIMARY
            : TRUBOARD_ACCENT_PURE,
          opacity: buttonProps.disabled ? 0.6 : 1,
          borderColor: light ? TRUBOARD_PRIMARY : undefined,
          borderWidth: "1px",
        }}
      />
  );
}

export default TBButton;
