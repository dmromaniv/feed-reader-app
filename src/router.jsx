import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main/Main';

import Login from './components/Login/Login';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails';
import Articles from './pages/Articles/Articles';
import Home from './pages/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Error from './components/Error/Error';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: (
      <Main>
        <PrivateRoute component={Home} />
      </Main>
    ),
    errorElement: <Error />,
  },
  {
    path: '/articles/:feedId',
    element: (
      <Main>
        <PrivateRoute component={Articles} />
      </Main>
    ),
  },
  {
    path: '/article-detail/:articleId',
    element: (
      <Main>
        <PrivateRoute component={ArticleDetails} />
      </Main>
    ),
  },
]);
