import anel from "../assets/anel.png"

export default function Postagem({ data}) {
    return (
    <>
    <div className="flex flex-col text-center">
    <img src={data.imagem} className="max-h-72 max-w-72" alt="anel" />
    <div>{data.nome}</div>
    </div>
    </>
  )
}
