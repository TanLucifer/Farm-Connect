import React, { useState } from 'react';
 import './faq.css';
 import { FcFaq } from "react-icons/fc";


const Faq = () =>

    {
return (
    <>
     <div className="heading ">
     <p className='symbol '><FcFaq /> </p>
     <p className='' >
     Frequently Asked Questions </p> 
     
     </div>
       
     <div class="box">
       <div class="faq">
         <details>
           <summary>How do I purchase products?</summary>
           <p>After logging in, browse the available products from different farmers. Add the items you want to your cart, proceed to checkout, and complete the payment process. You’ll receive a confirmation email with the details of your purchase.</p>
         </details>
         
         <details>
           <summary>Can I communicate directly with farmers?</summary>
           <p>
           Yes, you can. Each farmer’s profile includes a contact option where you can send them a message with any questions or special requests. This ensures transparency and builds trust between you and the farmers.
           </p>
         </details>
         <details>
           <summary>How are the products delivered?</summary>
           <p>
           Delivery options vary depending on the farmer. Some may offer home delivery, while others might have designated pick-up points. Delivery details will be provided at checkout, and you’ll receive tracking information if available
           </p>
         </details>
         <details>
           <summary>What payment methods are accepted?</summary>
           <p>
           The platform accepts various payment methods, including credit/debit cards, PayPal, and other popular payment gateways. All transactions are secure and encrypted for your safety.

           </p>
         </details>
         <details>
           <summary>What if I’m not satisfied with the products?</summary>
           <p>
           If you’re not satisfied with your purchase, please contact the farmer directly through the platform to resolve the issue. Most farmers offer a return or refund policy, which can be reviewed on their profiles
           </p>
         </details>
         <details>
           <summary>How do I leave a review for a farmer?</summary>
           <p>
           After completing a purchase, you’ll have the option to leave a review on the farmer’s profile. Honest feedback helps other users make informed decisions and helps farmers improve their services
           </p>
         </details>
         <details>
           <summary>Is there a membership fee?</summary>
           <p>
           The basic membership is free for both farmers and consumers. However, premium features such as advanced marketing tools for farmers or exclusive deals for consumers may be available at an additional cos
           </p>
         </details>
         <details>
           <summary> How do I update my profile or product listings?</summary>
           <p>
           Log in to your account and navigate to the "My Account" section. From there, you can update your profile information, add or edit product listings, and manage your orders.
           </p>
         </details>
         <details>
           <summary>Who can I contact for support?</summary>
           <p>
          If you need help, our customer support team is available through the "Contact" section on the website. We’re here to assist you with any issues you may encounter.


           </p>
         </details>

       </div>
     </div>
   


  
    </>
)
}
export default Faq
