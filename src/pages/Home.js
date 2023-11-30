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

      <br />
      <div className='skills'> 
        <div className='general'>
          <div className='cuadrotexto'>
            <b>Tipos de usuario pertenecientes a dominio TGP:</b>
            <li> <b>TGA</b>: Usuarios que trabajan directamente para TGP. Solo laptop Lenovo thinkpad.</li>
            <li> <b>YTG</b>: Usuarios externos o contratistas</li>
          </div>

          <div className='cuadrotexto'>
            <b>Aplicativos utilizados en N1:</b>
            <li><b><a href="https://tlurwhd01.tgp.net:8443/" target="_blank">WebHelpdesk</a></b>: Para la creación de tickets/ información del usuario/ assets/ FAQ'S /otros</li>
            <li><b><a href="http://tlimiispr01.tgp.net/HDOCenter/Aspx/Comun/Principal.aspx" target="_blank">HDO</a></b>: Consultar cuenta de red/ desbloquear/ resetear</li>
            <li><b><a href="https://tlimapp01.tgp.net:7004/IMS-AA-IDP/InitialLogonDispatch.do" target="_blank">RSA</a></b>: Consultar usuario VPN/ desbloqueo/ reseteo PIN/ descargar semilla/ resincronización token</li>
            <li><b><a href="https://172.30.2.71:8443/sponsorportal/PortalSetup.action?portal=2f354d70-c905-11e5-aa44-000c29b38d87" target="_blank">Portal cautivo - Cisco</a></b>: Para la generación de cuentas guest en red de invitados</li>
          </div>


          <div className='cuadrotexto'>
            <b>Sharepoint:</b>
            <li><b>tgp.sharepoint</b>: repositorio de Sharepoint (para usuarios TGA e YTG). Para usuarios YTG requiere permisos de responsable TGP + gerente del área. Para usuarios TGA se ingresa directamente la solicitud.</li>
            <li><b>tgp.mysharepoint</b>: One drive para usuarios TGA. Ellos mismos otorgarán accesos a sus contactos.</li>
          </div>


          <div className='cuadrotexto'>
            <b>Licenciamiento:</b> 
            <li>Si un usuario desea solicitar licencia de un software, por ejemplo NITRO PDF, debemos brindarle el URL <a href="https://tgpweb.sharepoint.com/sites/GETI/sis/doc/licen/Lists/Formulario%20de%20Sustento/AllItems.aspx" target="_blank"><b>(hacer click aquí)</b></a>, donde deberá ingresar su solicitud y justificación del porque lo requiere. </li>
          </div>

          <div className='cuadrotexto'>
            <b>Habilitar dispotivo usb:</b>
            <li>Se deberá ejecutar listdeviceinfo.exe. Al ejecutarlo mostrará la información del dispositivo, y se deberá guardar como archivo HTML con las siglas de usuario. Se derivará al área de seguridad de la información para su habilitación. No requiere vistos buenos.</li>
          </div>

          <div className='cuadrotexto'>
            <b>Crear nuevo usuario contratista:</b>
            <li>El responsable TGP del contratista, deberá ingresar en este <a href="https://tluriam01.tgp.net:8443/aveksa/main?ReqType=Dialog&PageID=RequestFormWizard&BreadcrumbLevel=0&Action=New&CRButton=77&formToken=L0X9pDFacTaR%7B7ZBM5V4qLSVBtb6&includeTerminated=true" target='_blank'>enlace</a> para solicitar la creación de usuario YTG.</li>
          </div>

          <div className='cuadrotexto'>
            <b>Bases:</b>
            <li>Torre Panamá (OTP): Sede principal</li>
            <li>Cusco: Kiteni, PS1, PS2, Kamani</li>
            <li>Ayacucho: BOA, PS3, PS4, PCCH</li>
            <li>Pisco: San Clemente</li>
          </div>

          <div className='cuadrotexto'>
            <b>Cuentas de usuario:</b>
             <li><b>Desbloqueo</b>: Se realizará a través del HDO realizando las preguntas de seguridad requeridas (nombre, apellido y siglas de usuario).</li>
             <li><b>Reseteo de contraseña</b>: Se podrá hacer a través del HDO solicitando preguntas de seguridad. El usuario también podrá realizar con las teclas ctrl + alt + spr, donde al bloquear la pantalla le mostrará dicha opción. </li>
             <li><b>Extensión de cuenta de usuario</b>: Lo deberá solicitar el jefe inmediato del usuario al correo de service desk.</li>
          </div>

         <div className="cuadrotexto">
          <b>Habilitar carpetas compartidas:</b>
          <li>En usuarios TGA, lo deberá solicitar el jefe inmediato por correo al service desk. Para usuarios YTG, lo deberá solicitar el responsable TGP y Gerente del área.</li>
         </div>



        </div>
 
      </div>
     </div>

     
  )
}

export default Home
