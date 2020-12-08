import React from "react";
import Drawer from "@material-ui/core/Drawer";

export default function WorldItem(props) {
  return (
    <React.Fragment>
      {props.items.map(item => {
        return (
          <div className="world-item">
            {item.meta.thumbnail && <img src={item.meta.thumbnail} />}
            <label>{item.name}</label>
            <p>{item.description}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}
