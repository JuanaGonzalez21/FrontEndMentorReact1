import './Limitations.css'

const Cards = ({ image, title, description }) => {
    return (
        <div className={`card__limitations ${title}`}>
            <span className='card__title'>
                <img src={image} alt="" />
                <h2>{title}</h2>
            </span>
            <p>{description}</p>
        </div>
    )
}

export default Cards