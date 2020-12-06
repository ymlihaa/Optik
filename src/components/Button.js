import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { Flag } from "@material-ui/icons";

export default function RadioButtons(props) {
  let length = props.length;
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
    console.log(props.id);
    props.addclick(props.id, event.target.value);
  };

  return (
    <>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        label="A"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
      />
      <Radio
        checked={selectedValue === "c"}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ "aria-label": "C" }}
      />
      <Radio
        checked={selectedValue === "d"}
        onChange={handleChange}
        value="d"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
      />
      <Radio
        checked={selectedValue === "f"}
        onChange={handleChange}
        value="f"
        name="radio-button-demo"
        inputProps={{ "aria-label": "F" }}
      />
    </>
  );
}
