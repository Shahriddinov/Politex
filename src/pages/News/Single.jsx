/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import config from "../../config";
import UsifulLinks from "../../components/UsifulLinksSwiper";
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import useSingle from "../../modules/hooks/useNewsSingle";

const Single = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const { item, isLoading } = useSingle({ id: params?.id });

  return (
    <div className="py-14">
      <PageHeader
        title={get(item, `title[${i18n.language}]`)}
        paths={[
          {
            title: "news",
            path: "/news"
          },
          {
            title: get(item, `title[${i18n.language}]`)
          }
        ]}
      />
      <div className="responsive">
        <img className="w-full rounded-lg mb-5" src={`${config.api.base_url}/storage/${get(item, "img")}`} alt="title-photo" />
        <div dangerouslySetInnerHTML={{ __html: get(item, `content[${i18n.language}]`) }} />
      </div>
      <div className="mt-10">
        <h2 className="border-b responsive md:text-2xl text-base">{t("photo_plates")}</h2>
        <div className="responsive">
          <div className="grid md:grid-cols-2 grid-cols-1  gap-5 mt-10">
            <img src={`${config.api.base_url}/storage/${get(item, "img1")}`} alt="" />
            <img src={`${config.api.base_url}/storage/${get(item, "img2")}`} alt="" />
          </div>
        </div>
      </div>
      {isLoading && <Spinner />}
      <UsifulLinks />
    </div>
  );
};

export default Single;
