import React from "react";
import AppTable from "../common/AppTable";
import useUsers from "../../hooks/useUsers";

const CustomerTableComp = () => {
  const users = useUsers();

  const columns = [
    { header: "Full Name", accessor: "fullName" },
    { header: "Joined At", accessor: "joinedAt" },
    { header: "Products Bought", accessor: "productsTable" },
  ];

  const columnsInner = [
    { header: "Product", accessor: "product" },
    { header: "QTY", accessor: "qty" },
    { header: "Date", accessor: "date" },
  ];

  const data = users.map((user) => {
    const joinedAtDate = new Date(
      user.createdAt.seconds * 1000 + user.createdAt.nanoseconds / 1e6
    );
    const formattedDate = `${joinedAtDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(joinedAtDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${joinedAtDate.getFullYear()}`;
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      joinedAt: formattedDate,
      productsTable: (
        <AppTable columns={columnsInner} data={user.productsBought || []} />
      ),
    };
  });

  return <AppTable columns={columns} data={data} />;
};

export default CustomerTableComp;
