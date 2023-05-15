import { Select, SelectProps } from "@mantine/core";
import { TRUBOARD_PRIMARY } from "./constants";

function TBSelect(props: SelectProps) {
  return (
    <Select
      {...props}
      styles={theme => ({
        item: {
          // applies styles to selected item
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: TRUBOARD_PRIMARY,
              color: theme.white,
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          "&[data-hovered]": {},
        },
      })}
    />
  );
}

export default TBSelect;
