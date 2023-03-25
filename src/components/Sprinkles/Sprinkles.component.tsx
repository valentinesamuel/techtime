import { FC, ReactNode } from "react";
import { Sprinkle } from "./Sprinkles.styles";

type Props = { children: ReactNode };

const Sprinkles: FC<Props> = ({ children }) => {
  return <Sprinkle>{children}</Sprinkle>;
};

export default Sprinkles;
