import PageHeader from "../../components/PageHeader";
import NewsCard from "../../components/NewsCard";
import UsifulLinks from "../../components/UsifulLinksSwiper";
import Spinner from "../../components/Spinner";
import Paginate from "../../components/Paginate";
import useList from "../../modules/hooks/useNewsList";

const News = () => {
  const { items, meta, isLoading } = useList();

  return (
    <div className="py-10">
      <PageHeader
        title="news"
        paths={[
          {
            title: "news"
          }
        ]}
      />
      <div className="responsive">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
          {Array.isArray(items) && items.map(item => <NewsCard key={item?.id} item={item} />)}
        </div>
      </div>
      <div className="w-1/2 mt-10 m-auto">
        <Paginate total={meta?.total} />
      </div>
      {isLoading && <Spinner />}
      <UsifulLinks />
    </div>
  );
};

export default News;
