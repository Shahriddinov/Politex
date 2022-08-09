// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useList = ({ id }) => {
  const { data, ...args } = useQuery(
    ["NEWS", "single", id],
    async () => {
      const { data } = await Api.NewsSingle({ id });
      const item = get(data, "data");
      return { item: Mappers.News(item) };
    },
    { keepPreviousData: true, retry: false, enabled: !!id }
  );

  return { ...data, ...args };
};

export default useList;
