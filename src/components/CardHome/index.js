//Css
import './cardHome.css';

const CardHome = ( { name, img } ) => {
    
    return(
        <div className='card-home' data-bs-toggle="modal" data-bs-target="#infoModal">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );

};

export default CardHome;