import React from "react";
import Layout from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp, faYoutube, } from '@fortawesome/free-brands-svg-icons';




const PageNotFoundComponent = () => {
  const handleContactClick = () => {
    // Replace `1234567890` with your own WhatsApp number
    window.open('https://wa.me/923435672441', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center my-32" style={{padding:'50px'}}>

      <br></br> 
      
      <span className="text-center justify-center text-gray-700 text-1l font-bold tracking-widest">
     <p><i>D&D Store is the largest online shopping platform in Pakistan. D&D Store is the best place that provides you branded products from U.S & other Western countries at your doorstep. You can shop online in Pakistan and get the high-quality imported products. We provide various types of imported products at affordable prices to your doorstep. D&D Store has evolved from fledgling startup to million rupees as a result of the creative and hard-working team.</i></p>
    </span>  <br></br>

    <span className="text-center justify-center text-gray-700 text-1l font-bold tracking-widest">
     <p ><i>Our mission is to become the premier online shopping sites by providing the wide collection of very best products. We want to give you unbeatable shopping experience and exceptional customer service that enhances expectations. For us, every customer is the king. Our commitment to the customers allows us to work closely with each customer. When you order us the sale is not complete, it is complete when we ship your order and you are totally satisfied.</i></p>
    </span>  <br></br>


    <span className="text-center text-gray-700 text-1l font-bold tracking-widest">
     <p ><i>Please take few minutes to familiar with our online shopping store in Pakistan. We are dealing with huge collection of categories and products (over more than 1000 products importing from USA UK Germany Japan and Other Foreign Countries) from thousands of popular brands including:

ELECTRONIC ACCESSORIES 
HAIR STYLING PRODUCTS
PERFUME & BODY SPARY 
BEGS & WALLET
MOBILE ACCESSORIES
MEN'S WATCHES
BEAUTY & HEALTH PRODUCTS
COSMETICS PRODUCTS
HOME APPLIANCES
COMPUTER ACCESSORIES
HOUSEHOLD PRODUCTS
LATEST GADGETS

These are few main categories. Click on the category “Home Appliances” and then you’ll see the subcategories that shorten your search for products of your requirement such as cell phones, cell phones accessories, Smart watches, head phones, car electronics and more.</i></p>
    </span>  <br></br>

    <span className="text-center text-gray-700 text-1l font-bold tracking-widest">
     <p ><i>D&D Store offers you the home shopping with the payment options. Therefore you can save your energy and time. Payment options include:

JazzCash
EasyPaisa
Deposit in Store Bank Account
Transfer through Online Banking

We are committed to securing your privacy and release your personal information to 3rd party sources only when it is required to complete your transactions. We don’t rent or sell information for commercial purpose.

When you do online shopping at D&D Store, you’ll see the price of every product clearly. You can also check our special discounted pricing on various selected items.</i></p>
    </span>  <br></br>

      <span className="text-center text-green-600 text-2xl font-bold tracking-widest">
       <h2>Shop Address : Shop No: 06, 1st Floor, Rehmat Plaza, Sector: i-10 Markaz Islamabad</h2>
      
      </span>
      <br></br>   <br></br>
      <span className="text-center text-gray-700 text-2xl font-bold tracking-widest">
      Email Address : dndstores.pk@gmail.com
      </span>
     
     
      <span className="text-center text-gray-700 text-2xl font-bold tracking-widest">
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


const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
