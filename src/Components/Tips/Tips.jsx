import './Tips.css'
import healthy__icon from '../../assets/icon-eating.svg'
import exercise__icon from '../../assets/icon-exercise.svg'
import sleep__icon from '../../assets/icon-sleep.svg'
import Tips_structure from './Tips_structure.jsx'

const Tips = () => {
  return (
    <div className="tips container">
        <div className="tips__elements">
            <Tips_structure
            image = {healthy__icon}  
            title = "Healthy eating"
            description = "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
            />
            <Tips_structure
            image = {exercise__icon}  
            title = "Regular exercise"
            description = "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
            />
            <Tips_structure
            image = {sleep__icon}  
            title = "Adequate sleep"
            description = "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
            />
        </div>
    </div>
  )
}

export default Tips