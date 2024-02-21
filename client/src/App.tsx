import { RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './components/Navbar'

function App() {


  return (<>
    <Navbar />
    <RouterProvider router={router}>
    </RouterProvider>
  </>
  )
}

export default App