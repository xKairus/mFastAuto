import Contacts from "./components/Contacts/Contacts"
import Experience from "./components/Experience/Experience"
import Guarantees from "./components/Guarantees/Guarantees"
import KnownFor from "./components/KnownFor/KnownFor"
import Lead from "./components/Lead/Lead"
import Offer from "./components/Offer/Offer"
import Professionalism from "./components/Professionalism/Professionalism"
import Service from "./components/Service/Service"

function App() {
  return (
    <>
      <Lead />
      <Service />
      <Experience />
      <Guarantees />
      <Professionalism />
      <KnownFor />
      <Offer />
      <Contacts />
    </>
  )
}

export default App
