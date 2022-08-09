// import get from "lodash/get";
import { useQuery } from "react-query";
import { get } from "lodash";
import * as Api from "../api";
import * as Mappers from "../mapper";

const useList = ({ onSuccess }) => {
  const { data, ...args } = useQuery(
    ["CORRUPTION", "list"],
    async () => {
      const { data } = await Api.Corruption();
      const items = get(data, "data") || [];

      return { items: items.map(item => Mappers.Corruption(item)) };
    },
    {
      onSuccess,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24
    }
  );

  return { ...data, ...args };
};

export default useList;
