import { FC, useEffect, useState } from "react";
import { userService } from "../../Service/user.service";

export const ListLayout: FC<{ newData: any[] }> = ({ newData }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    newData?.length > 0
      ? setData(newData)
      : userService.getAll().then((data) => {
          setData(data.data);
        });
  }, [newData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        border: "1px solid lightgray",
        borderRadius: "0.5rem",
        maxWidth: "30rem",
        width: "100%",
        marginTop: "1rem",
      }}
      data-testid="list-wrapper"
    >
      {data.map((item) => (
        <div
          data-testid={`list-item-${item.id}`}
          key={item.id}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "0.8rem 0",
            borderBottom: "1px solid lightgray",
          }}
        >
          <div>{item.id}</div>
          <div data-testid={`list-name-${item.id}`}>{item.name}</div>
          <div>{item.username}</div>
        </div>
      ))}
    </div>
  );
};
