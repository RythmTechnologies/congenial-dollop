import * as React from "react";

import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { queryClient } from "@/lib/react-query";
import routes from "@/routes";
import store from "@/stores";

export default function AppProvider() {
  return (
    <React.Suspense>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {import.meta.VITE_NODE_ENV !== "test" && <ReactQueryDevtools />}
          <ReduxProvider store={store}>
            <RouterProvider router={routes} />
          </ReduxProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.Suspense>
  );
}
