import React from 'react';
import hasuraDataProvider from 'ra-data-hasura';
import chineseMessages from 'ra-language-chinese';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LayersIcon from '@material-ui/icons/Layers';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ToysIcon from '@material-ui/icons/Toys';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Admin, Resource } from 'react-admin';
import { VideoList, VideoEdit, VideoCreate } from './modules/videos';
import { CategoryList, CategoryCreate, CategoryEdit } from './modules/categories';
import { ConfigList, ConfigCreate, ConfigEdit } from './modules/configs';
import { AdList, AdCreate, AdEdit } from './modules/ads';
import { PaymentList } from './modules/payments';
import { OrderList } from './modules/orders';
// import Dashboard from './Dashboard';
import addUploadFeature from './addUploadFeature';
import authProvider from './authProvider';

import './App.css';

const messages = {
  'zh': chineseMessages
};

const i18nProvider = locale => messages[locale];

const dataProvider = hasuraDataProvider(
  'http://api.jpjpjp.xyz:8080',
  {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'cb74937b1e6d11d58e0da6e84d0c304e'
  }
);

const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
  <Admin
    locale="zh"
    title="Esportube管理中心"
    i18nProvider={i18nProvider}
    dataProvider={uploadCapableDataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="configs"
      options={{ label: '系统设置' }}
      icon={SettingsIcon}
      list={ConfigList}
      edit={ConfigEdit}
      create={ConfigCreate}
    />
    <Resource
      name="videos"
      options={{ label: '视频列表' }}
      icon={SubscriptionsIcon}
      list={VideoList}
      edit={VideoEdit}
      create={VideoCreate}
    />
    <Resource
      name="categories"
      options={{ label: '分类列表' }}
      icon={LayersIcon}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="ads"
      options={{ label: '广告列表' }}
      icon={ToysIcon}
      list={AdList}
      edit={AdEdit}
      create={AdCreate}
    />
    <Resource
      name="orders"
      options={{ label: '订单列表' }}
      icon={ViewHeadlineIcon}
      list={OrderList}
    />
    <Resource
      name="payments"
      options={{ label: '收入列表' }}
      icon={AttachMoneyIcon}
      list={PaymentList}
    />
  </Admin>
);

export default App;