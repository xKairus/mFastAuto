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

  return (
    <section className={styles.offer}>
      <SectionHeader {...sectionHeaders.offer} />
      <div>
        <ul>
          <li onClick={() => setSelectedOffer(repairServices)}>
            Repair Services
          </li>
          <li onClick={() => setSelectedOffer(preventiveMaintenance)}>
            Preventive Maintenance
          </li>
          <li onClick={() => setSelectedOffer(bodyWork)}>Body Work</li>
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
