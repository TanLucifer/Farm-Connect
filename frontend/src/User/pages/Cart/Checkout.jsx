import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import OrderSummary from "../../components/Cart/OrderSummary";

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51KGLCTSFp516J086SXa8yiL4c4ibE2xAc3jehw3q3QHp5mU11dTwB0nhZ5lqgEqy1OuBaBJT3vM2TdqGWZ61wazs00ffhknKGa');

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pinCode: "",
    address: "",
    locality: "",
    saveAs: "home",
    defaultAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stripe = await stripePromise;
const CartId = "66c04ceefe274c28ce430a80"
      // Call your backend to create the Checkout Session
      const response = await fetch(`http://localhost:3000/createPayment/create-checkout-session/${CartId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add any required data from formData here if needed */ }),
      });

      const session = await response.json();

      // Redirect to Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network error, display the error to your customer.
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fffde8ff] py-10 mt-1">
      <div className="container mx-auto p-6 shadow-lg rounded-lg mt-20 w-full" style={{ backgroundColor: "#fffac4ff" }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl items-center font-bold underline">Checkout</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-6 md:mb-0">
            <div className="border p-4 rounded-lg mb-6" style={{ border: "2px solid green" }}>
              <p className="font-semibold mb-2">Default Address</p>
              <p>4-JHA-6, Vigyan Nagar, Kota, Rajasthan 324005</p>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{ border: "2px solid green", padding: "13px 13px", borderRadius: "10px" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Mobile No</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-700 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Locality</label>
                <input
                  type="text"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Save Address As</label>
                <select
                  name="saveAs"
                  value={formData.saveAs}
                  onChange={handleChange}
                  className="w-full p-2 border border-green-700 rounded">
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="defaultAddress"
                  checked={formData.defaultAddress}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="font-medium">Make Default Address</label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ebb207ff] text-white p-2 rounded transition-colors duration-300">
                Use This Address
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3">
            <OrderSummary />
            <button
              onClick={handleSubmit} // Call handleSubmit to initiate Stripe Checkout
              className="w-full bg-[#ebb207ff] text-white p-2 rounded transition-colors duration-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
