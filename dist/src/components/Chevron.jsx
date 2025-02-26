import { useEffect , useState} from "react"

export default function Chevron(){
    const [subir, setSubir] = useState(false)

    const handleVisibilidade = () => {
      setSubir(window.pageYOffset > 50)
    }
  
    const scrollando = () => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleVisibilidade)
  
      return () => {
        window.removeEventListener('scroll', handleVisibilidade)
      }
    }, [])
  
    return (
      <div>
        {subir && (
          <i
            className="bi bi-chevron-up go-top"
            onClick={scrollando}
          ></i>
        )}
      </div>
    )
  }