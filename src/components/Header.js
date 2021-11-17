import React from "react";
import { container } from "./Headerstyle";

export const Header = (props) => {
  const { name, greet, who } = props;
  return (
    <div classNamec>
      <container>
        <h1>
          {name} {greet} {who}
        </h1>
      </container>
    </div>
  );
};
