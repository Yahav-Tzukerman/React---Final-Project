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
        backgroundColor: theme.colors.tableBackground,
        color: theme.colors.textLight,
        borderColor: theme.colors.tableBorder,
      }}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              style={{
                textAlign: "center",
                backgroundColor: theme.colors.headerBackground,
                color: theme.colors.headerText,
                borderColor: theme.colors.tableBorder,
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
                  backgroundColor: theme.colors.rowBackground,
                  color: theme.colors.textLight,
                  borderColor: theme.colors.tableBorder,
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
