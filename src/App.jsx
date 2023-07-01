import { routes } from "./Components/utils/NavigationRouter"
import Layout from "./Components/utils/Layout"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Routes>
        <Route element={<Layout/>}>
        {
              routes.map(({id, path, Element}) => (
                <Route key={id} path={path} element={
                    <Element/>
                }/>
              ))
            }
            </Route>
        </Routes>
         
      </div>
  );
}

export default App;
