import React from "react";
import { GiBeachBag } from "react-icons/gi";
import { RiExchangeBoxLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
const Help = () => {
  return (
    <>
      <div className=" ">
        <div className="h-28 flex items-center text-center justify-center">
          <h1 className="font-semibold text-3xl text-green-900">
            Hello, What can we help you with?
          </h1>
        </div>
        <div className="h-1 bg-green-950"></div>
        <div className="flex flex-col h-[70vh] items-center justify-around">
          <div className="flex justify-around items-center py-2 px-8  gap-12 flex-row ">
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <GiBeachBag className="text-green-900" size={115} />
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  {" "}
                  BAG ENQUIRES
                </h3>
                <p className="text-lg  text-green-400">
                  Return or exchange items <br />
                  Print return mailing labels
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <RiExchangeBoxLine className="text-green-900" size={115} />
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  RETURN AND REFUNDS
                </h3>
                <p className="text-lg  text-green-400">
                  Return or exchange items <br />
                  Print return mailing labels
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <TbTruckDelivery className="text-green-900" size={115} />
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  {" "}
                  DELIVERY
                </h3>
                <p className="text-lg text-green-400">
                  TRACK YOUR PRODUCT <br /> AND UPDATE YOUR ADDRESS
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center py-2 px-8  gap-12 ">
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <RiSecurePaymentLine className="text-green-900" size={115} />
              <div className="flex flex-col  justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  {" "}
                  PAYMENT
                </h3>
                <p className="text-lg  text-green-400">
                  Add or edit payment methods <br />
                  Change expired debit or credit card
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <GrMapLocation className="text-green-900" size={115} />
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  MANAGE ADDRESS
                </h3>
                <p className="text-lg  text-green-400">
                  Update your addresses <br /> Add address, landmark details
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 shadow-lg p-5">
              <VscAccount className="text-green-900" size={115} />
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-semibold text-2xl text-green-700">
                  ACCOUNT SETTING
                </h3>
                <p className="text-lg  text-green-400">
                  Update your addresses <br /> Add address, landmark details
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] m-2 p-2 mb-[35vh]">
          <h2 className="text-center text-green-800 text-4xl font-semibold">
            MOST FREQUENTLY ASKED QUESTION
          </h2>

          <div class="max-w-2xl mx-auto my-4 p-3 text-green-400">
            <details class="border-b border-gray-300 p-2">
              <summary class="cursor-pointer py-2 text-lg font-semibold">
                What is Farm Connect?
              </summary>
              <p class="py-2">
                Farm Connect is a platform that connects farmers directly with
                consumers, enabling them to purchase fresh, locally sourced
                produce.
              </p>
            </details>

            <details class="border-b border-gray-300 p-2">
              <summary class="cursor-pointer py-2 text-lg font-semibold">
                How do I place an order?
              </summary>
              <p class="py-2">
                You can browse our local farms, select your desired products,
                and place an order directly through our website.
              </p>
            </details>

            <details class="border-b border-gray-300 p-2">
              <summary class="cursor-pointer py-2 text-lg font-semibold">
                Can I return or exchange products?
              </summary>
              <p class="py-2">
                Yes, we have a return and exchange policy. Please check our
                Returns page for more information.
              </p>
            </details>

            <details class="border-b border-gray-300 p-2">
              <summary class="cursor-pointer py-2 text-lg font-semibold">
                How does shipping work?
              </summary>
              <p class="py-2">
                We deliver your orders directly from the farm to your doorstep,
                ensuring fresh products and quick delivery.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;