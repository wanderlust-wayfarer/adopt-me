import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      startTime: Infinity,
      cacheTime: Infinity,
      // requires node 18 or `--experimental-fetch` in node 16
      // preforms a server-side fetch to prehydrate results from pets API
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="loader">🐶</h2>
          </div>
        }
      >
        <Provider store={store}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
