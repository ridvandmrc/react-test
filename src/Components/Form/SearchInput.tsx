import { CSSProperties, FC, useRef } from "react";

const inputStyle: CSSProperties = {
  maxWidth: "30rem",
  minWidth: "20rem",
  width: "100%",
  height: "2rem",
  border: "1px solid lightgray",
  borderRadius: "0.5rem",
};

export const SearchInput: FC<{ onClick: (data?: string) => void }> = ({
  onClick,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input ref={inputRef} style={inputStyle} />
      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => onClick(inputRef.current?.value)}
      >
        Search
      </button>
    </div>
  );
};
