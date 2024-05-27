import anel from "../assets/anel.png";

export default function Postagem({ data }) {
  return (
    <>
      <div className="flex flex-col lg:overflow-x-auto lg:flex-row overflow-auto scrollbar-thin h-96 lg:space-x-10 items-center ">
        {data.imagem.map((index) => (
        <div key={index.alt}  className="flex space-x-4">
          <img className="xl:w-52 xl:h-52" src={index.img} alt={index.alt} />
          <div id="produto" className="flex-col flex justify-between ">
            <div>
              <h1>{index.nome}</h1>
              <p>Descricao</p>
            </div>
            <div>
              <li className="list-none">{index.preco}</li>
              <button className="xl:p-4 xl:px-12 rounded hover:bg-pink-300 bg-pink-200 xl:text-lg font-thin">Comprar</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}
