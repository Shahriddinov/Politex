/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
import { useState, useEffect } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../../../components/Spinner";
import { http } from "../../../servises";
import PageHeader from "../../../components/PageHeader";

const FinancialActivity = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await http.request
        .get("/public/api/acts")
        .then(res => {
          const resData = get(res, "data.data");
          setData(resData);
          setLoading(false);
        })
        .catch(error => {
          toast.error(`Error: ${error}`);
          setLoading(false);
        });
    };
    fetch();
  }, []);

  return (
    <div className="md:py-12 py-5">
      <PageHeader
        title="financial_activity"
        paths={[
          {
            title: "financial_activity"
          }
        ]}
      />
      <div className="responsive">
        <ul className=" list-disc grid md:grid-cols-2 grid-cols-1 gap-5">
          {Array.isArray(data) && data.map(item => <div dangerouslySetInnerHTML={{ __html: get(item, `text_${i18n.language}`) }} key={get(item, "id")} />)}
        </ul>
      </div>
      {loading && <Spinner />}
    </div>
  );
};

export default FinancialActivity;
