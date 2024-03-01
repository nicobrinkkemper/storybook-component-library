import { Spinner } from "@chakra-ui/react";

type TestFn = (props: { size: string; color: string }) => JSX.Element;

export const TestComponent: TestFn = ({ size = "md", color = "red" }) => {
  return <Spinner size={size} color={color} />;
};
