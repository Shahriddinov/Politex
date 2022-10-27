/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import NewsCard from "../NewsCard";
import Button from "../Button";
import useList from "../../modules/hooks/useNewsHomeList";

const NewsSection = () => {
  const { items, isLoading } = useList();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-14">
      <div className="responsive">
        <div className=" flex justify-between items-end w-full border-b">
          <h2 className="md:text-2xl text-base mb-0">{t("news_and_announcements")}</h2>
          <div>
            <Button className="px-2 py-1" title={t("view_all")} onClick={() => navigate("/news")} />
          </div>
        </div>
      </div>
      <div className="responsive">
        <div className="mt-10">
          {isLoading ? (
            <h2>{t("loading")}</h2>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px]">
              {items?.slice(0, 6)?.map((item, id) => (
                <NewsCard key={id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
