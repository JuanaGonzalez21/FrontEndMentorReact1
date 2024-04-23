import './Description.css'
import image_men from '../../assets/image-man-eating.webp'

const Description = () => {
    return (
        <div className='description container'>
            <div className='description__img'>
                <img src={image_men} alt="" className='image__men' />
            </div>
            <div className="description__text">
                <h2>What your BMI result means</h2>
                <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </div>
        </div>
    )
}

export default Description