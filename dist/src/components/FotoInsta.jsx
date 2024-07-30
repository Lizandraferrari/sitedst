
export default function FotoInsta({foto , instaUser , instaLink}){
    return(
        <div class="quadroFoto">
            <img src = {foto}></img>
            <label>Foto por:</label>
            <a href = {instaLink}target = "_blank">{instaUser}</a>
        </div>
    )
}