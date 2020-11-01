import React from "react";
import Drawer from "@material-ui/core/Drawer";
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function SideBar(props) {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <React.Fragment key={props.anchor}>
        <Drawer
          disablebackdropyransition={(!iOS).toString()}
          disablediscovery={iOS.toString()}
          variant="persistent"
          anchor={props.anchor}
          open={open}
          onClose={() => setOpen(false)}
        >
          {props.context}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
