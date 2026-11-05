import { RouterProvider } from "react-router";
import { routes } from "./routes";
import "./App.css";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
