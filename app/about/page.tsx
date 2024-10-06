import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-transparent pt-[100px]">
      <section className="max-w-4xl mx-auto bg-black bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-6 border border-[#0079FF]">
        <h1 className="text-3xl font-bold text-[#0079FF] mb-4">
          Sobre a MIX PRODUÇÕES
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-50 mb-2">
            Quem Somos
          </h2>
          <p className="text-slate-300">
            Na MIX PRODUÇÕES, somos especializados em sonorização e iluminação
            profissional, oferecendo soluções completas para eventos de qualquer
            escala. Com anos de experiência no mercado, nossa missão é garantir
            que cada evento seja memorável e tecnicamente impecável. Nós
            fornecemos não apenas equipamentos de ponta, mas também o
            conhecimento e a expertise necessários para transformar sua visão em
            realidade.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-50 mb-2">
            Por Que Escolher a MIX PRODUÇÕES?
          </h2>
          <p className="text-slate-300">
            Na MIX PRODUÇÕES, nossa equipe dedicada trabalha incansavelmente
            para assegurar a máxima qualidade e eficiência em todos os aspectos
            dos nossos serviços e equipamentos. Seja para um evento pequeno ou
            uma grande produção, nossa abordagem personalizada garante que suas
            necessidades sejam atendidas com precisão e profissionalismo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-50 mb-2">
            Entre em Contato
          </h2>
          <p className="text-slate-300">
            Para saber mais sobre como podemos ajudar a tornar seu evento um
            sucesso, entre em contato conosco hoje mesmo. Estamos ansiosos para
            colaborar com você e oferecer a melhor solução para suas
            necessidades de sonorização e iluminação.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
