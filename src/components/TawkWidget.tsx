"use client";
import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const TawkWidget = () => {
  const onLoad = () => {
    console.log("Tawk Chat Widget Loaded!");
  };
  return (
    <div className="flex items-center justify-center mb-20">
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="6707db76cec6d0125df4997d"
        widgetId="1i9rb2iiq"
      />
    </div>
  );
};

export default TawkWidget;
