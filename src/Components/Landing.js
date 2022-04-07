import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "../icons";
import {
  getAllData,
  createData,
  deleteData,
  updateData,
} from "../Services/Api";

function Landing() {
  // eslint-disable-next-line
  const [columns, setColumns] = useState([
    {
      title: "PN",
      field: "pn",
      validate: (rowData) =>
        rowData.pn === undefined || rowData.pn === ""
          ? { isValid: false, helperText: "Required" }
          : true,
    },
    {
      title: "Supplier",
      field: "supplier",
      validate: (rowData) =>
        rowData.supplier === "" || rowData.supplier === undefined
          ? { isValid: false, helperText: "Required" }
          : true,
    },
    {
      title: "Delivery Date",
      field: "deliveryDate",
      type: "date",
      validate: (rowData) =>
        rowData.deliveryDate === "" || rowData.deliveryDate === undefined
          ? { isValid: false, helperText: "Required" }
          : true,
    },
    {
      title: "Qty",
      field: "qty",
      type: "numeric",
      validate: (rowData) =>
        rowData.qty === "" || rowData.qty === undefined
          ? { isValid: false, helperText: "Required" }
          : true,
    },
    {
      title: "Tracking#",
      field: "tracking",
    },
    {
      title: "Tracking Status",
      field: "trackingStatus",
    },
    {
      title: "Mark as Delievered",
      field: "markDelivered",
      initialEditValue: "pending",
      lookup: { pending: "Pending", delivered: "Delivered" },
    },
  ]);

  const [data, setData] = useState([
    // {
    //   pn: "Mehmet",
    //   supplier: "Baran",
    //   deliveryDate: 1987,
    //   qty: 63,
    //   tracking: "",
    //   trackingStatus: "",
    //   markDelivered: "pending",
    // },
    // {
    //   pn: "Mehmet",
    //   supplier: "Baran",
    //   deliveryDate: 1987,
    //   qty: 63,
    //   tracking: "",
    //   trackingStatus: "",
    //   markDelivered: "pending",
    // },
    // {
    //   pn: "Mehmet",
    //   supplier: "Baran",
    //   deliveryDate: 1987,
    //   qty: 63,
    //   tracking: "",
    //   trackingStatus: "",
    //   markDelivered: "pending",
    // },
    // {
    //   pn: "Mehmet",
    //   supplier: "Baran",
    //   deliveryDate: 1987,
    //   qty: 63,
    //   tracking: "",
    //   trackingStatus: "",
    //   markDelivered: "pending",
    // },
    // {
    //   pn: "Mehmet",
    //   supplier: "Baran",
    //   deliveryDate: 1987,
    //   qty: 63,
    //   tracking: "",
    //   trackingStatus: "",
    //   markDelivered: "pending",
    // },
  ]);

  // const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getAllData();
    let temp = data?.data?.data;
    temp.map((data, i) => {
      if (data.tracking === undefined) {
        temp[i].tracking = "";
      }
      if (data.trackingStatus === undefined) {
        temp[i].trackingStatus = "";
      }
    });
    setData(temp);
  };
  const addData = async (e) => {
    if (e) {
      let data = await createData(e);
      // console.log(data?.data);
      getData();
    }
  };
  const deleteTable = async (e) => {
    if (e) {
      let data = await deleteData(e._id);
      // console.log(data?.data);
      getData();
    }
  };
  const updateTable = async (e) => {
    if (e) {
      let data = await updateData(e);
      // console.log(data?.data);
      getData();
    }
  };

  return (
    <div className="container">
      <h1>Logistic Data</h1>
      <p>This is a dummy data for Logistic App</p>
      <MaterialTable
        className="mt-5"
        title="Logistic Data"
        icons={tableIcons}
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              addData(newData);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              updateTable(newData);
              resolve();
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              deleteTable(oldData);
              resolve();
            }),
        }}
      />
    </div>
  );
}

export default Landing;
