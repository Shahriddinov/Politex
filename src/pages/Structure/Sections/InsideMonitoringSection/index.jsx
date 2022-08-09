import { useTranslation } from "react-i18next";
import HeaderImg from "../../../../components/HeaderImg";
import UsifulLinks from "../../../../components/UsifulLinksSwiper";

export default function InsideMonitoringSection() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderImg
        text="inside_monitoring_section"
        paths={[
          {
            title: "inside_monitoring_section"
          }
        ]}
      />
      <div className="responsive">
        <div className=" flex justify-between items-end w-full border-b mt-10">
          <h2 className="md:text-2xl text-base mb-0 text-black">{t("inside_monitoring_section")}</h2>
        </div>
      </div>
      <div className="responsive">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste vero mollitia, nemo tempore voluptatem optio, corrupti quis doloremque autem
        eaque temporibus iure facilis assumenda excepturi hic quam, inventore architecto officia. Tempora iste illo impedit, mollitia perferendis nesciunt
        suscipit necessitatibus voluptatem nostrum dolore harum excepturi quod quidem quasi similique? Laboriosam dicta rerum tempore vero earum qui in a ab
        expedita illo. Autem et fuga optio officiis ipsa excepturi blanditiis sequi voluptatum, officia distinctio, libero dolor inventore numquam dolorem ad
        minima dolorum facere, sapiente quia. Nam maiores officiis ducimus blanditiis mollitia ipsam quo commodi, ullam voluptate non possimus amet! Enim,
        suscipit.
      </div>
      <UsifulLinks />
    </>
  );
}
