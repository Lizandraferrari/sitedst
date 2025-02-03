
export default function FotoInsta({foto , instaUser , instaLink , tituloFoto , link1 , link2 , txtlink1 , txtlink2}){

    function barraLink(txtlink){
        if(txtlink){
            return " | " + txtlink
        }
    }
    txtlink1 = barraLink(txtlink1)
    txtlink2 = barraLink(txtlink2)

    return(
        <div class="quadroFoto">
            <img src = {foto}></img>
            <label>{tituloFoto}</label>
            <div className="pai_responsiva">
            <a href = {instaLink}target = "_blank">{instaUser}</a>
            <a href = {link1}target = "_blank">{txtlink1}</a>
            <a href = {link2}target = "_blank">{txtlink2}</a>

            </div>
        </div>
    )
}