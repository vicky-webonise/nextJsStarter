import Image from "next/image";
import styles from "../styles/Hero.module.scss";

export default function Hero(props) {
  return (
    <div className={styles.heroWrap}>
      <div className={styles.heroTitle}>{props.heroTitle}</div>
      <Image
        src={`/../public/images/${props.bannerUrl}.jpg`}
        width={1351}
        height={375}
      />
    </div>
  );
}
