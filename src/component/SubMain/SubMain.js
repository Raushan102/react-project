import './SubMain.css'

export default function SubMain({image,title,description})
{
  return(
    <main id="SubMAin_container">
      <img src={image} alt={title} id="image"/>
      <h3 id="title">{title} </h3>
      <p id="description">{description}</p>
    </main>
  )

}