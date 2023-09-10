import { useState } from "react";
import "./App.css";
import { useGetPostQuery } from "./redux/features/api/baseApi";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading } = useGetPostQuery();

  console.log(data);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
