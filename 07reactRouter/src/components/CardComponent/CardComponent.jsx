// import React from "react";
import { Card } from "flowbite-react";

function CardComponent() {
  return (
    <div className="flex justify-center">
      {" "}
      {/* Flex container to center the card */}
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        <h5 className="text-2xl text-gray-900 font-bold font-sans hover:font-serif">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}

export default CardComponent;
