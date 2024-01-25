import Images from './Images';
import { useParams } from 'react-router-dom';

const BackgroundImage = ({images, setImages}) =>{

    const {id} = useParams();

    const image = images.find(image => (image.id) === id);

    return(
        <>
        <main className="Container" style={{backgroundImage : `url(${image.src})`}}>
            <Images 
            images ={images}
            setImages = {setImages}
            />
        </main>
        </>
    )
}

export default BackgroundImage