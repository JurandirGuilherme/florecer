import { useState } from "react";
import anel from "../assets/anel.png";
import colar from "../assets/colar.png";
import pulseira from "../assets/pulseira.png";

import Postagem from "../components/Postagem";

const listMenu = [
  { nome: "Aneis", imagem: anel },
  { nome: "Pulseira", imagem: pulseira },
  { nome: "Colar", imagem: colar },
];

export const Home = () => {
  const [escolha, setEscolha] = useState(null);
  const bundleButton = (data) => {
    setEscolha(data);
  };
  return (
    <>
      <div className="h-full w-full">
        <div className="bg-[rebeccapurple] items-center min-h-[40vh] text-6xl flex justify-center text-white font-thin">
          Florecer
        </div>
        <div className="bg-gray-200 flex space-x-4 min-h-[60vh]">
          <div className="bg-purple-300 flex items-center justify-center text-white flex-col px-10 text-2xl font-thin">
            <li className="flex flex-col items-center">
              {listMenu.map((data) => (
                <a key={data.nome}>
                  <button
                    className="p-2 hover:bg-slate-400"
                    onClick={() => {
                      bundleButton(data);
                    }}
                  >
                    {data.nome}
                  </button>
                </a>
              ))}
            </li>
          </div>
          <div className="flex justify-center w-full  items-center">
            {escolha ? (
              <>
                <Postagem data={escolha} />
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-3xl font-thin">Bem-Vindo!</h1>
                  <p className="pl-1">ao Florecer</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
