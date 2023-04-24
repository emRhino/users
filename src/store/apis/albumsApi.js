import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https//localhost:3005",
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (user) => ({ url: "/albums", params: user.id, method: "GET" }),
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
export { albumsApi };
