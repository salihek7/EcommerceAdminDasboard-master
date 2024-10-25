import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import DefaultLayout from './layout/DefaultLayout';
import Create from './pages/ProductDetails/Create';
import Edit from './pages/ProductDetails/Edit';
import View from './pages/ProductDetails/View';
import OrderDetail from './pages/Order/OrderDetail';
import OrderList from './pages/Order/OrderList';
import OrderTracking from './pages/Order/OrderTracking';
import AllUser from './pages/User/AllUser';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import CategoryList from './pages/Category/CategoryList';
import NewCAtegory from './pages/Category/NewCAtegory';
// import List from './pages/ProductDetails/List';
import Analytics from './pages/Analytics/Analytics';
import Chats from './pages/Chats/Chats';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import List from './pages/ProductDetails/List';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/Analytics"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Analytics />
            </>
          }
        />
        <Route
          path="/ProductDetails/List"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <List />
            </>
          }
        />
        <Route
          path="/ProductDetails/Create"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Create />
            </>
          }
        />
        <Route
          path="/ProductDetails/Edit"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Edit />
            </>
          }
        />
        <Route
          path="/ProductDetails/View"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <View />
            </>
          }
        />
        <Route
          path="/Category/CategoryList"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <CategoryList />
            </>
          }
        />
        <Route
          path="/Orders/NewCAtegory"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <NewCAtegory />
            </>
          }
        />
        <Route
          path="/Orders/OrderDetail"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OrderDetail />
            </>
          }
        />
        <Route
          path="/Orders/OrderList"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OrderList />
            </>
          }
        />
        <Route
          path="/Orders/OrderTracking"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OrderTracking />
            </>
          }
        />
        <Route
          path="/Chats/Chats"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chats />
            </>
          }
        />
        <Route
          path="/User/AllUser"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllUser />
            </>
          }
        />
        <Route
          path="/HelpCenter/HelpCenter"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <HelpCenter />
            </>
          }
        />
        <Route
          path="/Settings"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/Profile"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
