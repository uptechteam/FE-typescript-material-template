import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { SWRConfig } from "swr";
import { ErrorBoundary } from "@common";
import { fetcher } from "@helpers";
import { ROUTES } from "@constants";
import {  NotFound } from "@pages";
import { theme } from "@styles";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          // TODO: add error handling
          onError: (er): void => {
            if (er.status !== 403 && er.status !== 404) {
              console.error(er.message);
            }
          },
          provider: () => new Map(),
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path={ROUTES.Home}
              element={
                'HOME'
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </SWRConfig>
    </ErrorBoundary>
  </BrowserRouter>
);
