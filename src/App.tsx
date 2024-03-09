import Contacts from "./components/Contacts/Contacts"
import Directions from "./components/Directions/Directions"
import Experience from "./components/Experience/Experience"
import Guarantees from "./components/Guarantees/Guarantees"
import Header from "./components/Header/Header"
import KnownFor from "./components/KnownFor/KnownFor"
import Lead from "./components/Lead/Lead"
import Offer from "./components/Offer/Offer"
import Professionalism from "./components/Professionalism/Professionalism"
import Service from "./components/Service/Service"

function App() {
  return (
    <>
      <Header />
      <Lead />
      <Service />
      {/* <Experience /> */}
      <Guarantees />
      <Professionalism />
      <KnownFor />
      <Offer />
      {/* <Contacts /> */}
      <Directions />
    </>
  )
}

export default App
