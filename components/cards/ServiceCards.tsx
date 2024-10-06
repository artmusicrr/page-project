import React from "react";
import Card from "./Card";

const services = [
  {
    title: "Planejamento e Consultoria",
    description:
      "Avaliação do local e necessidades, projeto e planejamento do sistema de som, iluminação e estruturas.",
  },
  {
    title: "Instalação e Montagem",
    description:
      "Instalação de sistemas de sonorização, iluminação e painéis de LED, montagem de treliças, palcos e estruturas de suporte.",
  },
  {
    title: "Manutenção e Suporte",
    description:
      "Manutenção preventiva e corretiva, suporte técnico durante eventos.",
  },
  {
    title: "Aluguel de Equipamentos",
    description:
      "Aluguel de sistemas de som, iluminação e painéis de LED para eventos, aluguel de treliças, palcos e estruturas.",
  },
  {
    title: "Treinamento",
    description:
      "Treinamento para operação de sistemas de som, iluminação e painéis de LED, capacitação para montagem e desmontagem de estruturas.",
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
