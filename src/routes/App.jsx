import { useSelector } from "react-redux"
import FetchingItems from "../components/FetchingItems"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import LoadingSpin from "../components/LoadingSpinner"
function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>

      <Header />
      <FetchingItems />
      {fetchStatus.currentlyFecthing ? <LoadingSpin /> : <Outlet />}
      <Footer />


    </>
  )
}

export default App
