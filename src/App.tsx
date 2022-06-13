import { Route } from "wouter"
import ImageGallery from "./routes/ImageGallery"
import Location from "./routes/Location"
import Navbar from "./components/Navbar"
import About from "./routes/About"
import Contact from "./routes/Contact"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={ImageGallery} />
      <Route path="/location" component={Location} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/events" component={ImageGallery} />
    </div>
  )
}

export default App
