import { ChakraProvider } from "@chakra-ui/react";
import type { Decorator } from "@storybook/react";

const theme = {
  global: {
    background: "green",
  },
  components: {
    Spinner: {
      baseStyle: {
        color: "red",
        h: "40px",
        w: "40px",
      },
    },
  },
};

export const withChakra: Decorator = (Story) => {
  return <ChakraProvider theme={theme}>{Story()}</ChakraProvider>;
};
