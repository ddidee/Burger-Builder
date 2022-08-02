import React from 'react'
import Layout from './components/Layout/Layout'
import Burger from './containers/Burger/Burger'

function App() {
  return (
    <div className="App">
      <Layout>
        <Burger></Burger>
      </Layout>
    </div>
  );
}

export default App;
