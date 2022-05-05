import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  About,
  Dashboard,
  Error,
  Home,
  Login,
  Products,
  SharedLayout,
  SharedProductLayout,
  SingleProduct,
} from 'pages';
import ProtectedRoute from 'utils/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
