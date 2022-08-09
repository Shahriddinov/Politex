// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useSingle = ({ id }) => {
  const { data, ...args } = useQuery(
    ["CORRUPTION", "single", id],
    async () => {
      const { data } = await Api.CorruptionSingle({ id });
      const item = get(data, "data");
      return { item: Mappers.CorruptionSingle(item) };
    },
    { keepPreviousData: true, retry: false, enabled: !!id }
  );

  return { ...data, ...args };
};

export default useSingle;
