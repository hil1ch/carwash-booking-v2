import { RouterProvider } from "react-router";
import { routes } from "./routes";
import "./App.css";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
        },
      }}
    >
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
