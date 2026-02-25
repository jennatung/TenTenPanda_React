// React 元件，是一個函式，回傳 JSX 語法，用來描述畫面長什麼樣子

import { RouterProvider } from "react-router-dom";
import router from "../../router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
