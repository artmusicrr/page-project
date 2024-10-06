import { FC } from "react";
import Image from "next/image";

const items = [
  {
    category: "Sonorização",
    details: [
      {
        title: "Caixas de Som",
        description: "Caixas ativas e passivas, monitores de palco",
        image: "/images/equipament/speaker.jpg",
      },
      {
        title: "Microfones",
        description: "Dinâmicos, condensadores, sem fio",
        image: "/images/equipament/speaker.jpg",
      },
      {
        title: "Mesas de Som",
        description: "Analógicas, digitais",
        image: "/images/equipament/speaker.jpg",
      },
      {
        title: "Amplificadores",
        description: "Potência e microfone",
        image: "/images/equipament/speaker.jpg",
      },
    ],
  },
  {
    category: "Iluminação",
    details: [
      {
        title: "Luminárias",
        description: "Projetores LED, moving heads, luzes de efeito",
        image: "/images/equipament/speaker.jpg",
      },
      {
        title: "Controladores",
        description: "Consoles e controladores DMX",
        image: "/images/equipament/speaker.jpg",
      },
      {
        title: "Acessórios",
        description: "Refletores, geles e filtros de cor",
        image: "/images/equipament/speaker.jpg",
      },
    ],
  },
  // Adicione mais categorias conforme necessário
];

const EquipamentGrid: FC = () => {
  return (
    <div className="flex justify-center mt-10" style={{ zIndex: 999 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-screen-lg">
        {items.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {item.category}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {item.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col items-center p-4 border border-zinc-50"
                >
                  <Image
                    //src="https://via.placeholder.com/300.png"
                    src={detail.image}
                    alt={detail.title}
                    width={450} // Ajuste conforme necessário
                    height={200} // Ajuste conforme necessário
                    className="rounded-lg mb-2 object-cover border border-zinc-50" // Preenche o card
                    //objectFit="cover" // Cobre a div mantendo a proporção
                  />
                  <h3 className="text-lg font-semibold">{detail.title}</h3>
                  <p>{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipamentGrid;
