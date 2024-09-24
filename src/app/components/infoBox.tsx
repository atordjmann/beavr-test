import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";

export default function InfoBox(
    {title, description, imageSrc, buttonText}: {title: string, description: string, imageSrc: any, buttonText: string}) {
    
    return (
      <div className={layoutStyles.infoBox}>
        <Image
            src={imageSrc}
            alt="title"
            width={20}
            height={20}></Image>
  
        <div className={layoutStyles.infoBoxTextContainer}>
          <h3 className={layoutStyles.infoBoxTitle}>{title}</h3>
          <p className={layoutStyles.infoBoxDescription}>{description}</p>
        </div>
  
        <button className={layoutStyles.actionButton}>
          {buttonText}
        </button>
      </div>
    );
};
