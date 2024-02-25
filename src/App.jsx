import { memo } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './router';
import './App.css';

import Layout from './layout/layout.jsx';

const App = memo(() => {
  const element = useRoutes(routes);
  
  return (
    <div id='app' className="h-[100vh]">
      <Layout>
        {element}
      </Layout>
    </div>
  );
});

export default App;
