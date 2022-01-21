import { memo } from "react";

export const Message = memo(({ message }) => {
  return (
    <div>
      <div>{message.author}</div>
      <div>{message.message}</div>
      <hr />
    </div>
  );
});