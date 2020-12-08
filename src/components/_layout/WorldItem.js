import React from "react";
import Drawer from "@material-ui/core/Drawer";
import readWorldData from "../../helpers/readWorldData";

export default function WorldItem(props) {
  const [state, setState] = React.useState(true);

  return (
    <React.Fragment>
      {props.items.map(item => {
        return (
          <div
            key={item.id}
            style={{ pointerEvents: state }}
            className="world-item"
            onClick={() => {
              if (state) {
                console.log("in");
                setState(false);
                (async function() {
                  await readWorldData();
                })();
              }
            }}
          >
            {item.meta.thumbnail && <img src={item.meta.thumbnail} />}
            <label>{item.name}</label>
            <p>{item.description}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}
