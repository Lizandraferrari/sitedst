
export default function FotoInsta({foto , instaUser , instaLink , tituloFoto}){
    return(
        <div class="quadroFoto">
            <img src = {foto}></img>
            <label>{tituloFoto}</label>
            <a href = {instaLink}target = "_blank">{instaUser}</a>
        </div>
    )
}