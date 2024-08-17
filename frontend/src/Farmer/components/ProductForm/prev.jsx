import React, { useState, useRef } from "react";
import InputField from "../../components/ProductForm/InputField";
import TextArea from "../../components/ProductForm/TextArea";
import FileInput from "../../components/ProductForm/FileInput";
import PriceInput from "../../components/ProductForm/PriceInput";
import axios from "axios";

const ProductForm = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Refs for form fields
  const productNameRef = useRef("");
  const productDescriptionRef = useRef("");
  const categoryRef = useRef("");
  const skuRef = useRef("");
  const stockQuantityRef = useRef("");
  const minOrderQuantityRef = useRef("");
  const maxOrderQuantityRef = useRef("");
  const weightRef = useRef("");
  const shippingCostRef = useRef("");
  const availabilityStatusRef = useRef("");
  const returnPolicyRef = useRef("");
  const countryOfOriginRef = useRef("");
  const primaryImageRef = useRef("")

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

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "pricing", label: "Pricing & Inventory" },
    { id: "images", label: "Images & Variants" },
    { id: "shipping", label: "Shipping" },
    { id: "seo", label: "SEO & Attributes" },
    { id: "additional", label: "Additional Details" },
  ];

  const handleTabChange = (direction) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    let newIndex;

    if (direction === "next") {
      newIndex = Math.min(currentIndex + 1, tabs.length - 1);
      if (newIndex !== currentIndex) {
        const saveDetails = window.confirm(
          "Do you want to save your details before moving to the next tab?"
        );
        if (saveDetails) {
          // Here you would typically save the data
          console.log("Saving data...");
        }
      }
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setActiveTab(tabs[newIndex].id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      productName: productNameRef.current.value,
      productDescription: productDescriptionRef.current.value,
      category: categoryRef.current.value,
      sku: skuRef.current.value,
      price: price,
      discountedPrice: discountedPrice,
      stockQuantity: stockQuantityRef.current.value,
      minOrderQuantity: minOrderQuantityRef.current.value,
      maxOrderQuantity: maxOrderQuantityRef.current.value,
      weight: weightRef.current.value,
      shippingCost: shippingCostRef.current.value,
      availabilityStatus: availabilityStatusRef.current.value,
      returnPolicy: returnPolicyRef.current.value,
      countryOfOrigin: countryOfOriginRef.current.value,
    };

    console.log("Form data:", formData);

    // Optionally send data to server
    sendData(formData);
  };

  async function sendData(data) {
    try {
      let response = await axios.post("", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Data sent successfully");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <>
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
          </>
        );
      case "pricing":
        return (
          <>
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
          </>
        );
      case "images":
        return (
          <>
            <FileInput
              label="Primary Image"
              accept="image/*"
              ref={primaryImageRef}
            />
   
          </>
        );
      case "shipping":
        return (
          <>
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
          </>
        );

      case "additional":
        return (
          <>
       
          
       
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
       
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-[#fff5edff]">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-1 mb-3 ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 mt-20">
          Product Information
        </h1>

        <div className="mb-6 overflow-x-auto ">
          <div className="flex border-b whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderTabContent()}

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => handleTabChange("previous")}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out shadow-md"
              disabled={activeTab === tabs[0].id}
            >
              Previous
            </button>
            {activeTab !== tabs[tabs.length - 1].id ? (
              <button
                type="button"
                onClick={() => handleTabChange("next")}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md"
              >
                Submit Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
