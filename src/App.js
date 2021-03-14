import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './containers/Home';
import Following from './containers/Following';
import VideoPlayback from './containers/VideoPlayback';

import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
          >
            <Menu.Item key="/">
              <NavLink exact to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/following/">
              <NavLink exact to="/following/">Following</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/following/">
              <Following />
            </Route>
            <Route exact path="/videos/:id/playback">
              <VideoPlayback />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
