import "./App.css";
import { Suspense, lazy } from 'react';
import Loading from "./Components/Loading";
const AllSections = lazy(() => import('./Components/AllSections'));

const App = () => {
  return (
    <div className="fullscreen">
      <div className="inner-frame">
      <Suspense fallback={<Loading/>}>
        <AllSections/>
      </Suspense>
      </div>
    </div>
  );
};

export default App;
