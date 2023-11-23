import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home () {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Ale</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating </p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        
        </div>
      </div>


      <div className='skills'> 
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Tipos de usuario </h2>
            <li>
            &#45; TGA : Usuarios que trabajan directamente para TGP. 
            </li>
            <li>
            &#45; YTG: Usuarios externos o contratistas
            </li>

            
          </li>

          <li className='item'>
            <h2> Tipos de ticket </h2>
            <li>
            &#45; Ticket resuelto: Encuesta llega en 05 días
            </li>
            <br />
            <li>
            &#45; Ticket cerrado: Encuesta llega inmediatamente
            </li>
            <br />
            <li>
            &#45; Ticket cancelado: Cuando el problema se resolvió sin ayuda de mesa de ayuda, también por duplicidad.  
            </li>
            <br />
            <li>
            &#45; Envío de ticket por correo: Marcar “Send Email" solo cuando ya se haya culminado la atención, se haya derivado el ticket al área correspondiente, o el inconveniente haya sido solucionado. El estado "pendiente" se seleccionará para más tarde asignar un técnico N2. Una vez derivado al N2, se seleccionará “send and email". 
            </li>
          </li>

          <li className='item'>
            <h2> Back-End </h2>
            <span>
              NodeJS, Java Spring, .Net, ExpressJS, CSS.
            </span>
          </li>

          <li className='item'>
            <h2> Languages </h2>
            <span>
              JS, Java, Python, C#, AWS.
            </span>
          </li>
        </ol>
      </div>
     </div>
  )
}

export default Home
