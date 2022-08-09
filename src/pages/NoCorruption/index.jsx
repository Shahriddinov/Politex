/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import PageHeader from "../../components/PageHeader";
import useSingle from "../../modules/hooks/useCorruptionSingle";

const NoCorruption = () => {
  const { i18n } = useTranslation();
  const params = useParams();
  const { item } = useSingle({ id: params?.id });

  return (
    <div className="md:py-12 py-5">
      <PageHeader
        title={get(item, `title[${i18n.language}]`)}
        paths={[
          {
            title: get(item, `title[${i18n.language}]`)
          }
        ]}
      />
      <div className="responsive">
        <div dangerouslySetInnerHTML={{ __html: get(item, `constent[${i18n.language}]`) }} />
      </div>
    </div>
  );
};

export default NoCorruption;
