import React, { useState } from "react";
import { SearchInput } from "./Components/Form/SearchInput";
import { ListLayout } from "./Components/Layout/ListLayout";
import { SearchLayout } from "./Components/Layout/SearchLayout";

export const App = () => {
  const [newData, setNewData] = useState<any>();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "40rem",
        width: "100%",
        margin: "1rem auto",
        border: "1px solid lightgray",
        borderRadius: "0.5rem",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <SearchLayout>
        <SearchInput
          onClick={(data) => {
            setNewData([{ id: 0, name: data, username: data }]);
          }}
        />
      </SearchLayout>
      <ListLayout newData={newData} />
    </div>
  );
};
