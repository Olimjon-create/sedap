import React from "react";
import styles from "../../styles/Customer.module.css";
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
      buttonPrice: "$35.35",
    },
    {
      id: 2,
      name: "#C-004561",
      titleName: "28 March 2020, 12:42 AM",
      nameSelectName: "Rio Da Luca",
      nameSectionName: "Emerald Tower 6th, London",
      priceTitle: "$8.90",
      ImageTitle: "/border.png",
      buttonPrice: "$16.75",
    },
    {
      id: 3,
      name: "#C-004562",
      titleName: "29 March 2020, 12:42 AM",
      nameSelectName: "Fernando",
      nameSectionName: "Blessing Hills 1st, London",
      priceTitle: "$16.87",
      ImageTitle: "/border.png",
      buttonPrice: "$75.55",
    },
    {
      id: 4,
      name: "#C-004563",
      titleName: "30 March 2020, 12:42 AM",
      nameSelectName: "Yenni Tan",
      nameSectionName: "Greensand 2nd, London",
      priceTitle: "$18.8",
      ImageTitle: "/border.png",
      buttonPrice: "$57.75",
    },
    {
      id: 5,
      name: "#C-004564",
      titleName: "5 April 2020, 12:42 AM",
      nameSelectName: "Denny Chang",
      nameSectionName: "St. Bakerfield 3rd, London",
      priceTitle: "$38.92",
      ImageTitle: "/border.png",
      buttonPrice: "$21.75",
    },
    {
      id: 6,
      name: "#C-004565",
      titleName: "8 April 2020, 12:42 AM",
      nameSelectName: "Andrea Liaw",
      nameSectionName: "Kingsroad 45th, London",
      priceTitle: "$74.92",
      ImageTitle: "/border.png",
      buttonPrice: "$75.55",
    },
    {
      id: 7,
      name: "#C-004566",
      titleName: "9 April 2020, 12:42 AM",
      nameSelectName: "Siangny The",
      nameSectionName: "11 Church Road, London",
      priceTitle: "$78.52",
      ImageTitle: "/border.png",
      buttonPrice: "$21.61",
    },
  ];

  return (
    <div>
      <div className={styles.inputCustomerSearch}>
        <div className={styles.search}>
          <input type="search" placeholder="Search here" />
        </div>
        <div className={styles.iconSearch}>
          <Image
            src="/alarm-clock.png"
            alt="Alarm Clock"
            width={28}
            height={28}
          />
        </div>
        <div className={styles.iconSearch}>
          <Image src="/message.png" alt="Message" width={28} height={28} />
        </div>
        <div className={styles.iconSearch}>
          <Image src="/price.png" alt="Price" width={28} height={28} />
        </div>
        <div className={styles.iconSearch}>
          <Image src="/settings.png" alt="Settings" width={28} height={28} />
        </div>
        <hr />
        <div className={styles.writeName}>
          <p className={styles.customerText}>Hello, Samantha</p>
        </div>
        <div className={styles.borders}></div>
      </div>

      <div className={styles.headers}>
        <div className={styles.customer}>
          <h1 className={styles.text}>General Customer</h1>
          <p className={styles.text1}>
            Here is your general customers list data
          </p>
        </div>
        <div className={styles.customerSection}>
          <button className={styles.btn}>
            <Image src="/Nest.png" alt="Filter" width={16} height={16} />
            Filter
            <Image src="/stay.png" alt="Stay" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        {arr.map((item) => (
          <div className={styles.option} key={item.id}>
            <div className={styles.value}>
              <p>{item.name}</p>
              <p>{item.titleName}</p>
            </div>
            <div className={styles.value}>
              <p>{item.nameSelectName}</p>
              <p>{item.nameSectionName}</p>
            </div>
            <div className={styles.value}>
              <p>{item.priceTitle}</p>
              <button className={styles.btn2}>{item.buttonPrice}</button>
              <Image
                src={item.ImageTitle}
                alt="Border"
                width={16}
                height={16}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer;
