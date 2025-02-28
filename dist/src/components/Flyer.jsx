
export default function Flyer({ id , imagem , evento , data }){
    return (
        <>
            <div key={id} className="flyer">
            <img src={imagem} />
            <h5>{evento}</h5>
            <p>{data}</p>
            </div>
        </>
    )
}