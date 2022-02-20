import React, { useState } from "react";
import { render } from "react-dom";
import { DatePicker, message, Alert, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  const [date, setDate] = useState<any>(null);
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (value: any) => {
    console.log(value);
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
    setShow(true);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <Alert
        style={{
          display: show ? "block" : "none",
        }}
        message="Selected date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />

      <Button onClick={() => setShow(false)} type="primary">
        Hide date
      </Button>
      <Button>Default Button</Button>
      <Button onClick={() => setShow(true)} type="dashed">
        Show date
      </Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
