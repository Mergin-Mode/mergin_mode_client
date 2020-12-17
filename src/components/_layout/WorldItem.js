import React from "react";
import Drawer from "@material-ui/core/Drawer";
import readWorldData from "../../helpers/readWorldData";

export default function WorldItem(props) {
  const [state, setState] = React.useState(true);
  console.log(props.item.id);
  return (
    <React.Fragment>
      <div
        key={props.item.id}
        style={{ pointerEvents: state }}
        className="world-item"
        onClick={() => {
          if (state) {
            setState(false);
            (async function() {
              await readWorldData(props.item.id);
            })();
          }
        }}
      >
        {props.item.meta.thumbnail && <img src={props.item.meta.thumbnail} />}
        <label>{props.item.name}</label>
        <p>{props.item.description}</p>
      </div>
    </React.Fragment>
  );
}
