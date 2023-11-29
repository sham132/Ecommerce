import React from "react";
import Layout from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp, faYoutube, } from '@fortawesome/free-brands-svg-icons';




const AbousUsComponent = () => {
  const handleContactClick = () => {
    // Replace `1234567890` with your own WhatsApp number
    window.open('https://wa.me/923435672441', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center my-32">

      <br></br>   <br></br>
      <span className="text-center text-black-700 text-3xl font-bold tracking-widest">
      About us : Shop No: 06, 1st Floor, Rehmat Plaza, Sector: i-10 Markaz Islamabad
      
      </span>
      <br></br>   <br></br>
      <span className="text-center text-gray-700 text-3xl font-bold tracking-widest">
      Email Address : dndstores.pk@gmail.com
      </span>
 
  

     
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        Click here for whatsapp
      </span>
      <button
        className="mt-8 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        onClick={handleContactClick}
      >
        Contact Me
      </button>
      <br></br>   <br></br>
      <span>
        <div className="social-icons">

          <a href="https://www.facebook.com/dndstore.pk?mibextid=LQQJ4d"  ><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
          <a href="https://instagram.com/dndstore.pk?igshid=YmMyMTA2M2Y="  ><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
          <a href="https://wa.me/923237112012"><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a>
          <a href="https://youtube.com/@dndstorepk"><FontAwesomeIcon icon={faYoutube} size="3x" /></a>
          <a href="https://twitter.com/dndstorepk?s=11&t=7wbUTQ0uGyLrNxTOIjbulw"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
          <a href="https://www.tiktok.com/@dndstore.pk?_t=8bBKePONphZ&_r=1"><FontAwesomeIcon icon={faTiktok} size="3x" /></a>

        </div>

      </span>
    </div>
  );
};

// export default PageNotFoundComponent;


const AbousFound = (props) => {
  return <Layout children={<AbousUsComponent />} />;
};

export default AbousFound;
