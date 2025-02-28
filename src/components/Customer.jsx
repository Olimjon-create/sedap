import React from "react";
import "../styles/Customer.css";
import Image from "next/image";
function Customer() {
  const arr = [
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
    },
  ];

  return (
    <div>
      <div className="headers">
        <div className="Customer">
          <h1 className="text">General Customer</h1>
          <p className="text1">Here is your general customers list data</p>
        </div>
        <div className="Customer-section">
          <button className="btn">Filter</button>
        </div>
      </div>

      <div className="Section">
        <div className="Select">
          <ul>
            <li>Customer ID</li>
            <Image src="/sort.png" alt="sort" width={16} height={16} />{" "}
            <li>Join Date</li>
            <Image src="/sort.png" alt="sort" width={16} height={16} />{" "}
          </ul>
        </div>
        <div className="Select">
          <ul>
            <li>Customer Name</li>
            <li>Location</li>
            <Image src="/sort.png" alt="sort" width={16} height={16} />{" "}
          </ul>
        </div>
        <div className="Select">
          <ul>
            <li>Total Spent</li>
            <Image src="/sort.png" alt="sort" width={16} height={16} />{" "}
            <li>Last Order</li>
            <Image src="/sort.png" alt="sort" width={16} height={16} />{" "}
          </ul>
        </div>
      </div>
      {arr.map((item) => (
        <div className="Option" key={item.id}>
          <div className="Value">
            <ul>
              <li className="text3">{item.name}</li>
              <li className="text4">{item.titleName}</li>
            </ul>
          </div>
          <div className="Value">
            <ul>
              <li className="text5">{item.nameSelectName}</li>
              <li className="text4">{item.nameSectionName}</li>
            </ul>
          </div>
          <div className="Value">
            <ul>
              <li className="text4">{item.priceTitle}</li>
              <li>
                <button className="btn2">$35.35</button>
                <Image
                  className="picture"
                  src={item.ImageTitle}
                  alt="Image"
                  width={16}
                  height={16}
                />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Customer;
