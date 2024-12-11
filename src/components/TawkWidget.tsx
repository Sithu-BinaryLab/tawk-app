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
        propertyId="6759c36c49e2fd8dfef68510"
        widgetId="1iera6o1u"
      />
    </div>
  );
};

export default TawkWidget;
