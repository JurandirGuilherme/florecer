import { SetStateAction, useState } from "react";

//Aneis
import anel from "../assets/anel.png";
import anel1 from "../assets/produtos/anel1.jpg"
import anel2 from "../assets/produtos/anel2.jpg"
import anel3 from "../assets/produtos/anel3.png"
import anel4 from "../assets/produtos/anel4.png"



//Colares

import colar1 from "../assets/produtos/colar1.jpg"
import colar2 from "../assets/produtos/colar2.webp"
import colar3 from "../assets/produtos/colar3.webp"

// Pulseiras


import pulseira1 from "../assets/produtos/pulseira1.png"
import pulseira2 from "../assets/produtos/pulseira2.png"
import pulseira3 from "../assets/produtos/pulseira3.png"


import Postagem from "../components/Postagem";

interface Produto {
  nome: string
  preco: number
  alt: string
  img:unknown
}

const aneis: Produto[] = [
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel1
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel2
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel3
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel4
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel4
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel4
  },
  {
    nome: "Anel Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: anel4
  },
]
const pulseiras: Produto[] = [
  {
    nome: "Pulseira Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: pulseira1
  }, 
  {
    nome: "Pulseira s",
    preco: 199.99,
    alt: "anelouro",
    img: pulseira2
  }, 
  {
    nome: "Pulseira Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: pulseira3
  }, 
]
const colares: Produto[] = [
  {
    nome: "Pulseira Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: colar1
  },
  {
    nome: "Pulseira Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: colar2
  },
  {
    nome: "Pulseira Ouro",
    preco: 199.99,
    alt: "anelouro",
    img: colar3
  }
]

const listMenu = [
  { nome: "Aneis", imagem: aneis },
  { nome: "Pulseira", imagem: pulseiras },
  { nome: "Colar", imagem: colares },
];

export const Home = () => {

  const [escolha, setEscolha] = useState(null);
  
  return (
    <>
      <div className="h-full w-full">
        <div className="bg-[rebeccapurple] items-center min-h-[40vh] text-6xl flex justify-center text-white font-thin">
          Florecer
        </div>


        <div className="bg-gray-200 flex space-x-4 min-h-[60vh]">
          <div className="bg-purple-300 flex items-center justify-center text-white flex-col xl:px-10 p-4 text-2xl font-thin">
            <li className="flex flex-col items-center">
              {listMenu.map((data) => (
                <a key={data.nome}>
                  <button
                    className="p-2 hover:bg-slate-400"
                    onClick={() => {
                      setEscolha(data);
                    }}
                  >
                    {data.nome}
                  </button>
                </a>
              ))}
            </li>
          </div>


          <div className="flex justify-center w-full items-center">
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
