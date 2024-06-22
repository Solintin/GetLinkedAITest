import Footer from "components/Footer/Index"
import Main from "components/Main"
import TobBar from "components/Topbar"

function CheckDevice() {
  return (
    <div className="w-full">
      <TobBar />
      <Main />
      <Footer />
    </div>
  )
}

export default CheckDevice