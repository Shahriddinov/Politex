/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs";

const Paginate = ({ total = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <ReactPaginate
      previousLabel={t("pagination_prev")}
      nextLabel={t("pagination_next")}
      pageCount={total / 15}
      onPageChange={e =>
        navigate({
          pathname: location.pathname,
          search: `?page=${e.selected}`
        })
      }
      initialPage={Number(query?.page)}
      containerClassName="flex justify-between items-center w-full"
      previousLinkClassName="bg-primary_green text-white rounded-full py-2 px-3"
      nextLinkClassName="bg-primary_green text-white rounded-full py-2 px-3"
      disabledClassName="border-primary_green border rounded-full w-6 h-6 flex items-center justify-center"
      breakLabel="......"
      pageClassName="hover:bg-primary_green duration-300 border-primary_green border text-black rounded-full w-6 h-6 flex items-center justify-center p-4"
      breakClassName="text-black"
      activeClassName="bg-primary_green text-white rounded-full w-6 h-6 flex items-center justify-center"
      activeLinkClassName="text-white"
    />
  );
};

export default Paginate;
