import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import RegionsPage from './pages/Regions';
import HousesPage from './pages/Houses';
import Layout from './components/layout/Layout';

function App() {
  return <div>
    <Layout> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/houses" element={<HousesPage />} />
      </Routes>
    </Layout> 
  </div>;
}

export default App;