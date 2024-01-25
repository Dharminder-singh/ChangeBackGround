// import { Link } from "react-router-dom"

const Images = ({images, bgchnage}) =>{

       

    return(
        // <>
        // <ul className="card">
        //     {images.map(image => (
        //     <li key={image.id}><Link to={`/${image.id}`}><img src={image.src} alt={image.alt} onClick={() => bgchnage(image.src)}/></Link></li>
        //     ) )}
        // </ul>
        // </>
        <>
        <ul className="card">
           
            {images.map(image => (
            <li key={image.id}><img src={image.src} alt={image.alt} onClick={() => bgchnage(image.id)}/></li>
            ) )}
          
        </ul>
        </>
    )
}

export default Images