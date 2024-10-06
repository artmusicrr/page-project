import React from "react";
import ServiceCards from "@/components/cards/ServiceCards";

const ServicesPage: React.FC = () => {
  return (
    <div className="p-4 mt-10">
      <h1 className="flex justify-center items-center pt-20 text-4xl font-bold text-slate-50 mb-8">
        Nossos Serviços
      </h1>
      <ServiceCards />
    </div>
  );
};

export default ServicesPage;
