import './App.css';
import Landingpage from './Components/Landingpage';
import Videopage from './Components/Videopage';


import { Route, Switch } from "react-router-dom";




export const config = {
  endpoint: `https://f2ddaa60-5d69-4128-82a9-b84a9ecd9c5b.mock.pstmn.io/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <Switch>
     
         <Route path="/video/:id"><Videopage/></Route>

         <Route exact path="/"><Landingpage/></Route>

       </Switch>    
      </div>) 

}

export default App;
