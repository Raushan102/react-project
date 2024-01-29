
import './Button.css'
export default function Button({children,onSelect,isSelected})
{
    return(
       <div className="buttonContainer">
        <button className={isSelected ? 'selected' :null} onClick={onSelect}>{children}</button>
       </div>
    )
}