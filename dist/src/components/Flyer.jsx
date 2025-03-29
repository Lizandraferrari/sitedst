
export default function Flyer(props){
    return (
        <>
            <div key={props.id} className="flyer">
            <img src={props.imagem} />
            <h5>{props.evento}</h5>
            <p>{props.data}</p>
            </div>
        </>
    )
}