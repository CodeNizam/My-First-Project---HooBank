import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy
        steps.
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </h2>
      <Button styles="mt-10" />
    </div>


    <div className={layout.sectionImg}>
<img src={card} alt="card" className="w-{100%] h-[100%]"/>

    </div>
  </section>
);

export default CardDeal;
