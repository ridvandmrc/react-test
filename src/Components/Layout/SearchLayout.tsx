import { FC, ReactNode } from "react";

export const SearchLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h3>Sarch a Country</h3>
      <div>{children}</div>
    </div>
  );
};
