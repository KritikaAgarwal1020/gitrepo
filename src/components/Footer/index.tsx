import Terms from "./terms";
import Privacy from "./privacy";
import Contact from "./contact";
import CopyRightPolicy from "./copyRightPolicy";


const Footer = () =>{

    return (
   
<div className="row">
    <Privacy/>
    <Terms />
    <CopyRightPolicy/>
    <Contact/>

</div>
    )

}


export default Footer;