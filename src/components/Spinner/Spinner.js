import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import "./Spinner.css";

function Spinner() {
  return (
    <div>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </div>
  );
}

export default Spinner;
