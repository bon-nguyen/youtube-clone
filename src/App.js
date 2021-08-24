import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import './_app.scss';
import { BrowserRouter as Router, Redirect, Switch,} from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
// Layout
const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const handleToggleSidebar = ()=>{
    setSidebar(value => !value);
  }
  return(
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container">
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main">
            {children}
        </Container>
      </div>
    </>
  )
}

// App
const App = ()=> {
  return (
    <Switch>
        <Router path='/' exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Router>

        <Router path='/auth'>
            <LoginScreen/>
        </Router>

        <Router path="/search">
          <Layout>
            <h1>Search</h1>
          </Layout>
        </Router>

        <Router>
            <Redirect to='/404' />
            <NotFound />
         </Router>

    </Switch>
  );
}

export default App;
