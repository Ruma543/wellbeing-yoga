import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import ServiceDetails from '../Pages/Home/Service/ServiceDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import About from '../Pages/About/About';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/client.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
        loader: () => fetch('/blog.json'),
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default Router;
