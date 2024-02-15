import styles from "./Offer.module.css";
import {
  sectionHeaders,
  repairServices,
  preventiveMaintenance,
  bodyWork,
} from "./../../data/typography.tsx";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import PriceList from "../PriceList/PriceList.tsx";
import { useState } from "react";

interface Service {
  title: string;
  price: string;
  desc?: string;
}

export default function Offer() {
  const [selectedOffer, setSelectedOffer] = useState<Service[]>(repairServices);

  const handleItemClick = (serviceData: Service[]) => {
    setSelectedOffer(serviceData);
  };

  return (
    <section className={styles.offer}>
      <SectionHeader {...sectionHeaders.offer} />
      <div>
        <ul>
          <li onClick={() => handleItemClick(repairServices)}>
            Repair Services
          </li>
          <li onClick={() => handleItemClick(preventiveMaintenance)}>
            Preventive Maintenance
          </li>
          <li onClick={() => handleItemClick(bodyWork)}>Body Work</li>
        </ul>
      </div>
      {selectedOffer.map((service, index) => (
        <PriceList
          key={index}
          title={service.title}
          price={service.price}
          desc={service.desc}
        />
      ))}
    </section>
  );
}
