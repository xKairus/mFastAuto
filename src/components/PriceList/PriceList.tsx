import styles from "./PriceList.module.css";

interface PLProps {
  title: string;
  price: string;
  desc?: string;
}

const PriceList: React.FC<PLProps> = ({ title, price, desc }) => {
  return (
    <div>
      <div>
        <span>{title}</span>
        <span></span>
        <span>{price}</span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default PriceList;
