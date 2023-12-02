import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type RtkQueryType = UseQueryHookResult<
  QueryDefinition<
    any,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    any,
    any,
    "api"
  >
>;
