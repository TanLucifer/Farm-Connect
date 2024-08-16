import React, { useState, useRef } from "react";
import InputField from "../../components/ProductForm/InputField";
import TextArea from "../../components/ProductForm/TextArea";
import FileInput from "../../components/ProductForm/FileInput";
import PriceInput from "../../components/ProductForm/PriceInput";
import axios from "axios";

const ProductForm = () => {
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Refs for form fields
  const productNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const skuRef = useRef(null);
  const stockQuantityRef = useRef(null);
  const minOrderQuantityRef = useRef(null);
  const maxOrderQuantityRef = useRef(null);
  const weightRef = useRef(null);
  const shippingCostRef = useRef(null);
  const availabilityStatusRef = useRef(null);
  const returnPolicyRef = useRef(null);
  const countryOfOriginRef = useRef(null);
  const  fileInputRef = useRef(null);
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setPrice(value);
    }
  };

  const handleDiscountedPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setDiscountedPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formData = new FormData();
    
    // Append form fields
    formData.append('productname', productNameRef.current.value);
    formData.append('productdescription', productDescriptionRef.current.value);
    formData.append('category', categoryRef.current.value);
    formData.append('SKU', skuRef.current.value);
    formData.append('productprice', price);
    formData.append('discountedPrice', discountedPrice);
    formData.append('stockQuantity', stockQuantityRef.current.value);
    formData.append('minOrderQuantity', minOrderQuantityRef.current.value);
    formData.append('maxOrderQuantity', maxOrderQuantityRef.current.value);
    formData.append('weight', weightRef.current.value);
    formData.append('shippingCost', shippingCostRef.current.value);
    formData.append('availabilityStatus', availabilityStatusRef.current.value);
    formData.append('returnPolicy', returnPolicyRef.current.value);
    formData.append('countryOfOrigin', countryOfOriginRef.current.value);
    formData.append("shelfLife", 4)
    // Append files
    const files = fileInputRef.current.getFiles();
    for (let i = 0; i < files.length; i++) {
      formData.append('productImage', files[i]);
    }
  
    // Send data to server
    sendData(formData);
  };
  
  async function sendData(formData) {
    try {
      let response = await axios.post("http://localhost:3000/api/product/createProduct", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) {
        console.log("Data sent successfully");
      }
    } catch (e) {
      console.log(e);
    }
  }
  

  return (
    <div className="bg-[#fff5edff]">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-1 mb-3 ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 mt-20">
          Product Information
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4" >
          <div className="flex flex-wrap gap-4">
            <InputField
              label="Product Name"
              placeholder="Enter product name"
              ref={productNameRef}
            />
            <TextArea
              label="Product Description"
              placeholder="Describe your product"
              ref={productDescriptionRef}
            />
            <InputField
              label="Category"
              placeholder="Product category"
              ref={categoryRef}
            />
            <InputField
              label="SKU"
              placeholder="Stock Keeping Unit"
              ref={skuRef}
            />
            <PriceInput
              label="Price (₹)"
              value={price}
              onChange={handlePriceChange}
            />
            <PriceInput
              label="Discounted Price (₹)"
              value={discountedPrice}
              onChange={handleDiscountedPriceChange}
            />
            <InputField
              label="Currency"
              placeholder="INR"
              value="INR"
              readOnly
            />
            <InputField
              label="Stock Quantity"
              type="number"
              placeholder="0"
              ref={stockQuantityRef}
            />
            <InputField
              label="Minimum Order Quantity"
              type="number"
              placeholder="1"
              ref={minOrderQuantityRef}
            />
            <InputField
              label="Maximum Order Quantity"
              type="number"
              placeholder="Optional"
              ref={maxOrderQuantityRef}
            />
            <InputField
              label="Weight"
              type="number"
              placeholder="In kg"
              ref={weightRef}
            />
            <InputField
              label="Shipping Cost"
              type="number"
              placeholder="0.00"
              ref={shippingCostRef}
            />
            <InputField
              label="Availability Status"
              placeholder="In stock / Out of stock"
              ref={availabilityStatusRef}
            />
            <TextArea
              label="Return Policy"
              placeholder="Return policy details"
              ref={returnPolicyRef}
            />
            <InputField
              label="Country of Origin"
              placeholder="Country"
              ref={countryOfOriginRef}
            />
            <FileInput
              label="Primary Image"
              accept="image/*"
              ref={fileInputRef}

            />
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
