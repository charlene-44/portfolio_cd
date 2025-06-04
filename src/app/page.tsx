import Preloader from "@/app/components/PreLoader";
import Image from "next/image";
import data from "./data/data.json";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <>
      <Preloader />
      <section className={styles.home}>
        <div className={styles.presentation}>
          <div className="photo">
            <Image
              src={data.presentation.image}
              alt="Photo de Charlène"
              title="Photo profil Charlène"
              width={200}
              height={200}
              className={styles["profile-pic"]} 
            />
          </div>
          <p>{data.presentation.texte}</p>
        </div>

        <div className={styles.technos}>
          {data.technos.map((tech) => (
            <div key={tech.name} className={styles["tech-item"]}>
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
