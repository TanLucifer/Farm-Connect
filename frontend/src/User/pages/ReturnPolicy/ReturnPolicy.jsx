import React, { useEffect } from "react";

const ReturnAndCancellation = () => {
  useEffect(() => {
    document.title = "FarmConnect | Return and Cancellation";
  }, []);

  return (
    <div className="bg-[#fff0e3ff] text-gray-800 p-4 md:p-8">
      <div
        className="max-w-6xl mx-auto bg-white shadow-md p-4 md:p-8 rounded-lg mt-24"
        style={{ border: "2px solid black" }}>
        <main>
          <div className="mb-8">
            <h1
              className="text-xl md:text-2xl font-bold mb-4 text-center "
              style={{ color: "forestgreen" }}>
              Return and Cancellation
            </h1>
            {/*  <hr className="border-black w-1/2 mx-auto mb-4 -mt-3"style={{border:'1px solid black'}} /> */}
          </div>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Cancellation Policy
            </h2>
            <p className="mb-4">
              The customer can choose to cancel an order any time before it's
              dispatched. The order cannot be canceled once it's out for
              delivery. However, the customer may choose to reject it at the
              doorstep.
            </p>
            <p className="mb-4">
              The time window for cancellation varies based on different
              categories and the order cannot be canceled once the specified
              time has passed.
            </p>
            <p className="mb-4">
              In some cases, the customer may not be allowed to cancel the order
              for free, post the specified time and a cancellation fee will be
              charged. The details about the time window mentioned on the
              product page or order confirmation page will be considered final.
            </p>
            <p className="mb-4">
              In case of any cancellation from the seller due to unforeseen
              circumstances, a full refund will be initiated for prepaid orders.
            </p>
            <p className="mb-4">
              <b>FarmConnect</b> reserves the right to accept the cancellation of
              any order. <b>FarmConnect</b> also reserves the right to waive off or
              modify the time window or cancellation fee from time to time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Returns Policy
            </h2>
            <p className="mb-4">
              Returns is a scheme provided by respective sellers directly under
              this policy in terms of which the option of exchange, replacement
              and/ or refund is offered by the respective sellers to you. All
              products listed under a particular category may not have the same
              returns policy. For all products, the returns/replacement policy
              provided on the product page shall prevail over the general
              returns policy. Do refer the respective item's applicable
              return/replacement policy on the product page for any exceptions
              to this returns policy and the table below.
            </p>
            <p className="mb-4">
              The return policy is divided into three parts; Do read all
              sections carefully to understand the conditions and cases under
              which returns will be accepted.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Part 1 – Category, Return Window and Actions possible
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      Category
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Returns Window, Actions Possible and Conditions (if any)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Furniture
                      <br />
                      Home: Pet Supplies & Rest of Home (Except Home décor,
                      Furnishing, Home Improvement Tools, Household Items)
                    </td>
                    <td className="border border-gray-300 p-2">
                      10 days
                      <br />
                      Refund or Replacement
                      <br />
                      For products requiring installation, returns shall be
                      eligible only when such products are installed by the
                      brand's authorized personnel.
                      <br />
                      In order to help you resolve issues with your product, we
                      may troubleshoot your product either through online tools,
                      over the phone, and/or through an in-person technical
                      visit.
                      <br />
                      If a defect is determined within the Returns Window, a
                      refund/replacement of the same product will be provided at
                      no additional cost. If no defect is confirmed or the issue
                      is not diagnosed within 10 days of delivery or
                      Installation wherever applicable, you will be directed to
                      a brand service centre to resolve any subsequent issues.
                      <br />
                      In any case, only one replacement shall be provided.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Lifestyle: Watch, T-Shirt, Footwear, Sari, Short, Dress,
                      Kid's (Capri, Shorts & Tops), Men's (Ethnic Wear, Shirt,
                      Formals, Jeans, Clothing Accessory), Women's (Ethnic Wear,
                      Fabric, Blouse, Jean, Skirt, Trousers, Bra), Bags,
                      Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase,
                      Luggage, etc.
                      <br />
                      Lifestyle: Jewellery, Footwear Accessories, Travel
                      Accessories, Watch Accessories, etc.
                      <br />
                      Lifestyle: WinterWear (sweatshirt, jacket, sweater,
                      cardigan, kids_thermal, pullover, windcheater, track_suit,
                      thermal, shawl, track_top, glove, muffler, scarf, blazer,
                      uniform_sweatshirt, uniform_blazer, kids_muffler,
                      kids_mitten, shrug, poncho, uniform_sweater, cap,
                      waistcoat, leg_warmer, legging, elder_halloween_costume)
                    </td>
                    <td className="border border-gray-300 p-2">
                      10 days
                      <br />
                      Refund, Replacement or Exchange
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Medicine (Allopathy & Homeopathy)
                    </td>
                    <td className="border border-gray-300 p-2">
                      2 days
                      <br />
                      Refund
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Home: Home Improvement Tools, Household Items, Home décor,
                      Furnishing
                    </td>
                    <td className="border border-gray-300 p-2">
                      7 days
                      <br />
                      Refund or replacement
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Books (All books)
                      <br />
                      Sports Equipments (Racquet, ball, support, gloves, bags
                      etc.)
                      <br />
                      Exercise & Fitness Equipments (Home Gym combos, dumbbell
                      etc.)
                      <br />
                      Auto Accessories - Car and Bike accessories (helmets, car
                      kit, media players etc.)
                    </td>
                    <td className="border border-gray-300 p-2">
                      7 days
                      <br />
                      Replacement only
                      <br />
                      Free replacement will be provided within 7 days if the
                      product is delivered in defective/damaged condition or
                      different from the ordered item.
                      <br />
                      Please keep the product intact, with original accessories,
                      user manual and warranty cards in the original packaging
                      at the time of returning the product.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Toys (Remote controlled toys, Learning toys, Stuffed toys
                      etc.)
                      <br />
                      Stationary (Pens, Diary notebooks, Calculators etc.)
                      <br />
                      Musical Instruments (Microphones & Accessories, Guitars,
                      Violins etc.)
                    </td>
                    <td className="border border-gray-300 p-2">
                      7 days
                      <br />
                      Replacement only
                      <br />
                      Free replacement will be provided within 7 days if the
                      product is delivered in defective/damaged condition or
                      different from the ordered item.
                      <br />
                      Please keep the product intact, with original accessories,
                      user manual and warranty cards in the original packaging
                      at the time of returning the product.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Small Appliances (Water Purifier, Air Purifier, Kitchen
                      Appliances, etc.)
                      <br />
                      Personal Care Appliances (Hair Dryer, Trimmer, Epilator
                      etc.)
                      <br />
                      Large Appliances (Refrigerator, Air Conditioner, Washing
                      Machine, etc.)
                    </td>
                    <td className="border border-gray-300 p-2">
                      7 days
                      <br />
                      Replacement or Repair
                      <br />
                      In case of defects, you can get your product repaired or
                      replaced free of charge.
                      <br />
                      In order to help you resolve issues with your product, we
                      may troubleshoot your product either through online tools,
                      over the phone, and/or through an in-person technical
                      visit.
                      <br />
                      If no defect is confirmed or the issue is not diagnosed
                      within 7 days of delivery or Installation wherever
                      applicable, you will be directed to a brand service centre
                      to resolve any subsequent issues.
                      <br />
                      In any case, only one replacement shall be provided.
                      <br />
                      For products requiring installation, returns shall be
                      eligible only when such products are installed by the
                      brand's authorized personnel.
                      <br />
                      Please keep the product intact, with original accessories,
                      user manual and warranty cards in the original packaging
                      at the time of returning the product.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Grocery (Health Supplements, Dry Fruits, Snacks, Cereals,
                      Food Items etc.)
                      <br />
                      Kitchen & Dining (Utensils, Cutlery, Serveware, Cookware
                      etc.)
                      <br />
                      Pet Food & Supplies (Dog Food, Cat Food, Pet Care etc.)
                      <br />
                      Beverages (Juice, Tea, Coffee, etc.)
                    </td>
                    <td className="border border-gray-300 p-2">
                      No Returns
                      <br />
                      If the product is delivered in a damaged condition, you can
                      contact us within 48 hours of delivery. The replacement will
                      be initiated only if the product is found damaged.
                      <br />
                      Please keep the product intact, with original accessories,
                      user manual and warranty cards in the original packaging
                      at the time of returning the product.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Part 2 – Initiating Return
            </h3>
            <p className="mb-4">
              To initiate a return, please follow the steps below:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Log in to your <b>FarmConnect</b> account.</li>
              <li>Go to the “My Orders” section.</li>
              <li>Select the order and the item you wish to return.</li>
              <li>Click on the “Return” button and choose the reason for return.</li>
              <li>Follow the on-screen instructions to complete the return process.</li>
            </ol>
            <p className="mb-4">
              Once your return request is processed, you will receive instructions
              for returning the item. Please ensure the item is packed securely
              and the return slip is included.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Part 3 – Refunds
            </h3>
            <p className="mb-4">
              Refunds will be processed once the returned item is received and
              inspected. The amount will be credited back to the original payment
              method within 7-10 business days.
            </p>
            <p className="mb-4">
              For any issues or queries related to refunds, please contact our
              customer service team at <b>support@farmconnect.com</b>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ReturnAndCancellation;
