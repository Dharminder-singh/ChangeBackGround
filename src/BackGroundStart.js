import Images from './Images';
const Backgroundstart = ({images, setImages , bgchnage, imagesbg, text}) =>{

    return(
        <>
        <main className="Container" style={{backgroundImage : `url(${imagesbg})`}}>
            <h2>{text}</h2>
            <Images 
            images ={images}
            setImages = {setImages}
            bgchnage = {bgchnage}
            />
        </main>
        </>
    )
}

export default Backgroundstart