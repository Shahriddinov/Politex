// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useList = () => {
  const { data, ...args } = useQuery(
    ["HISTORY", "single"],
    async () => {
      const { data } = await Api.History();
      const item = get(data, "data[0]") || [];

      return { item: Mappers.History(item) };
    },
    { keepPreviousData: true, retry: false }
  );

  return { ...data, ...args };
};

export default useList;
