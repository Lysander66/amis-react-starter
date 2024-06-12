import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Demo from './Demo.tsx'
// import './index.css'
import 'amis/lib/themes/cxd.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/demo/*',
    element: <Demo />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
