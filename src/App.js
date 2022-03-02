import './App.css';
import Header from './MyComponents/Header';
import Background from './MyComponents/Background';
import About from './MyComponents/About';
import Skills from './MyComponents/Skills';
import Contact from './MyComponents/Contact';
import Footer from './MyComponents/Footer';
import Home from './MyComponents/Home';
import ScrollToTop from './MyComponents/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    
      <Router >

        <ScrollToTop>
          <Header />
        </ScrollToTop>

        <Background />

        <Route exact path="/" render={() => {
          return (
            <>

              <Home />
            </>
          )
        }}></Route>



        <Switch>
          <Route exact path="/about" render={() => {
            return (
              <>

                <About />
              </>)
          }}>
          </Route>

          <Route exact path="/skills" render={() => {
            return (
              <>

                <Skills />
              </>)
          }}>
          </Route>

          <Route exact path="/contact" render={() => {
            return (
              <>

                <Contact />
              </>)
          }}>
          </Route>

        </Switch>

        <Footer />

      </Router>

    </>

  );
}

export default App;
