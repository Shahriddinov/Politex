import { useMutation, useQueryClient } from "react-query";
import * as Api from "../api";

const useVirtual = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async values => {
      const { data } = await Api.Virtual(values);

      return data;
    },
    {
      onSuccess: data => {
        queryClient.setQueriesData(
          {
            predicate: query => query.queryKey[0] === "VIRTUAL" && query.queryKey[1] === "single"
          },
          { item: data }
        );
      }
    }
  );
};

export default useVirtual;
