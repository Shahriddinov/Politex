import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { get } from "lodash";
import { toast } from "react-toastify";
import { http } from "../../servises";

const Facts = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await http.request
        .get("/public/api/facts")
        .then(res => {
          const resData = get(res, "data.data[0]");
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
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        background:
          "url(https://images.unsplash.com/photo-1561835674-4fe6ec5b0d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
      }}
      className="bg-cover bg-center py-[60px]"
    >
      <div className="responsive">
        {loading ? (
          <h2 className="text-center uppercase text-white">{t("loading")}</h2>
        ) : (
          <div className="backdrop-blur-sm bg-primary_gray bg-opacity-20 border-2 border-primary_lightgray rounded p-14 border-opacity-50 flex justify-center items-center flex-wrap gap-20">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-white font-semibold mb-0">{get(data, "Kafedralar") || 0}</span>
              <p className="text-xl text-white font-semibold mb-0">{t("chairs")}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-white font-semibold mb-0">{get(data, "Fakultetlar") || 0}</span>
              <p className="text-xl text-white font-semibold mb-0">{t("faculties")}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-white font-semibold mb-0">{get(data, "Professor") || 0}</span>
              <p className="text-xl text-white font-semibold mb-0">{t("professors")}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-white font-semibold mb-0">{get(data, "Doktarantlar") || 0}</span>
              <p className="text-xl text-white font-semibold mb-0">{t("doctoral_students")}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl text-white font-semibold mb-0">{get(data, "Talabalar") || 0}</span>
              <p className="text-xl text-white font-semibold mb-0">{t("students")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Facts;
