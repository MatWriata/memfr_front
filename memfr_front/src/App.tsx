/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Index} from "./Components/MainPage/Index.tsx";
import {Accueil} from "./Components/MainPage/Accueil.tsx";



function App() {
  //const [count, setCount] = useState(0)
    const urls =  createBrowserRouter(
        createRoutesFromElements(<>
            <Route path={"/connexion"} element={<Index/>}/>

            <Route path={"/"} element={<Accueil/>}/>
            </>
        )
    )


  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
      <RouterProvider router={urls} />
  )
}

export default App
