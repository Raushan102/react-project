
import './Button.css'
export default function Button({children,isSelected,...props})
{
    return(
       <div className="buttonContainer">
        <button className={isSelected ? 'selected' :null} {...props}>{children}</button>
       </div>
    )
}