import React from 'react';
import _ from 'lodash';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Elements from './components/elements';

const { Header, Content, Footer, Sider } = Layout;
const { Chart } = Elements;

function App() {
  const [data, set_data] = React.useState([])
  const [element, setElement] = React.useState(0);

  const elements = [
    {
      title: 'Chart for Values',
      element: <Chart data={data} />
    },
    {
      title: 'Your Element',
      element: <div style={{padding: 10}}>Design your component and add to elements[] in App.js.</div>
    }
  ];


  React.useEffect(() => {
    set_data(_.chain(0).range(100).map((v, k) => ({ x: k, y: v * v * v })).value())
  }, [])


  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 128px)', padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>Elements</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              style={{ height: '100%' }}
            >
              {_.map(elements, (e, k) => <Menu.Item onClick={() => setElement(k)} key={k}>{e?.title || 'Your Element'}</Menu.Item>)}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            {elements[element]?.element ? <div class="content-card">
              <div class="content-title">{elements[element].title}</div>
              {elements[element].element}
            </div> : <div>Design your component and add to elements[] in App.js.</div>}

          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Job Application Task for CreatorDen</Footer>
    </Layout>
  );
}

export default App;
