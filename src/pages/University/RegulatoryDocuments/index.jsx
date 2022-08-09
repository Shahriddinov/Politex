/* eslint-disable react/no-danger */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import PageHeader from "../../../components/PageHeader";
import UsifulLinks from "../../../components/UsifulLinksSwiper";
import config from "../../../config";
import useSingle from "../../../modules/hooks/useNeedDocs";

const Docs = () => {
  const { item } = useSingle();
  const { i18n } = useTranslation();

  return (
    <div className="md:mt-14 mt-5 pb-5">
      <PageHeader
        title="regulatory_documents"
        paths={[
          {
            title: "regulatory_documents"
          }
        ]}
      />
      <div className="responsive">
        {item?.img && <img className="w-full object-cover object-center h-96" src={`${config.api.base_url}/storage/${item?.img}`} alt="img" />}
        <div className="my-7" dangerouslySetInnerHTML={{ __html: get(item, `content[${i18n.language}]`) }} />
      </div>
      <UsifulLinks />
    </div>
  );
};

export default Docs;
