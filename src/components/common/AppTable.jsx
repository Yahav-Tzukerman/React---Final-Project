import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";

const AppTable = ({ columns, data }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;

  return (
    <Table
      striped
      bordered
      hover
      responsive
      style={{
        marginTop: "20px",
        color: theme.colors.textLight,
        borderColor: theme.table.borderColor,
      }}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              style={{
                textAlign: "center",
                backgroundColor: theme.table.headerBackground,
                color: theme.table.headerTextColor,
                borderColor: theme.table.borderColor,
              }}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                style={{
                  textAlign: "center",
                  backgroundColor: theme.table.rowBackground,
                  color: theme.colors.textLight,
                  borderColor: theme.table.borderColor,
                }}
              >
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AppTable;
