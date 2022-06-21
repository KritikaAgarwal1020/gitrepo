//import {Route} from 'react-router-dom';
//import routes from './routesList';

import Header from '../components/Header';
import Footer from '../components/Footer';
//import routes from './routesList';
import ProductListing from '../components/content';
import { BrowserRouter as Router ,Link, Switch , Route } from 'react-router-dom';
import SignInForm from '../components/Header/signInForm';
import Contact from '../components/Footer/contact';
import AddListing from '../components/content/addListing';

function CustomRoutes(){
    return (
        <Router>
           <div>
  
              <Switch>
                 <Route path="/signIn">
                    <SignInForm />
                 </Route>
                 <Route path="/contactUs">
                    <Contact />
                 </Route>
                 <Route path="/addListing">
                    <AddListing />
                 </Route>
              </Switch>
           </div>
        </Router>
    ) 
}

export default CustomRoutes;

//function CustomRoutes(){
//return (
//<>
 //   <Header/>
 //   <Route 
 //   path ={path}
  //  render ={() => {res}}/>
  //  <Footer/>
  //  </>
//)

//}

//export default CustomRoutes;

