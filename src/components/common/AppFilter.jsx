import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";

const AppFilter = ({ data, filterByProps, placeholder }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    filterByProps.some((prop) =>
      item[prop].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <div>
      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder={placeholder}
            value={filterText}
            onChange={handleFilterChange}
            style={{
              backgroundColor: theme.colors.inputBackground,
              color: theme.colors.textLight,
              borderColor: theme.colors.inputBorder,
              borderRadius: theme.input.borderRadius,
              height: theme.input.height,
              fontFamily: theme.fontFamily,
            }}
            className="shadow-none"
          />
        </InputGroup>
      </Form.Group>
      <div>
        {filteredData.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default AppFilter;
