import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
   <div className="demo-big-content">
    <Layout>
        <Header title="Donate COVID" scroll>
            <Navigation>
                <Link to="/Covid">What is COVID-19 ?</Link>
                <Link to="/Symptoms">Symptoms</Link>
                <Link to="/Spreads">How it spreads ?</Link>
                <Link to="/Pnt">Prevention & Treatment</Link>
            </Navigation>
        </Header>
        <Drawer title="Donate COVID">
            <Navigation>
                <Link to="/Covid">What is COVID-19 ?</Link>
                <Link to="/Symptoms">Symptoms</Link>
                <Link to="/Spreads">How it spreads ?</Link>
                <Link to="/Pnt">Prevention & Treatment</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    
     );
  }
}

export default App;