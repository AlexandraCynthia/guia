import React, {useEffect, useState} from 'react';
import SearchInput from 'react-search-input';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
import { SelectAllRounded } from '@material-ui/icons';


function Home () {

  const[searchTerm, setSearchTerm] = useState("");
  const[filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      filterContent();
    } else {
      setFilteredContent([]);
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(normalizeText(term));
  };

  const normalizeText = (text) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterContent = () => {
    const cuadros = document.querySelectorAll('.cuadrotexto');
    const results = Array.from(cuadros).filter((cuadro) =>
      normalizeText(cuadro.textContent).includes(normalizeText(searchTerm))
    );
    setFilteredContent(results);
  };

  const highlightSearchTerm = (text) => {
    if (searchTerm.trim() === "") {
      return text;
    }

    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(' ').filter(Boolean).join('|')})`, 'gi');
    return text.replace(regex, (match) => `<span style="background-color: #F9E897">${match}</span>`);
  };

 
  return (
    <div className='home'>
         <div className='about'>
          <h2>Info N1</h2>
            <div className='prompt'>
              <p className='titulo_'>Resumen de los procedimientos generales, tickets y derivaciones </p>
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
            
            </div>
      </div>

        <br />

        <div className='skills'> 
        <SearchInput className='search-input' style={{ backgroundColor: '#FFF7FC', padding: '10px' }} placeholder='Buscar...' onChange={handleSearch} />
        {[...filteredContent].map((cuadro, index) => (
          <div className='cuadrotexto3' key={index} dangerouslySetInnerHTML={{ __html: highlightSearchTerm(cuadro.innerHTML) }} />
        ))}

          <div className='general'>
   
            <div className='cuadrotexto'>
                <b>Speech de llamada:</b>
                <li>Bienvenida: Bienvenido a la mesa de servicios, le saluda Alexandra. ¿Con quién tengo el gusto?</li>
                <li>Despedida: Gracias por llamar a la mesa de ayuda de TGP, buenos días.</li>
            </div>

            <div className='cuadrotexto'>
                <b>Speech para solicitud de confirmación para cierre de ticket:</b>
                <p>Estimado(a),  </p>
                <p>Buenos (Días, Tardes, Noches), nos tratamos de comunicar a través de teams y a su celular sin éxito, con respecto al ticket: “XXXXXX” favor de indicarnos su disponibilidad para retomar la atención, estaremos pendiente de su respuesta.</p>
                <p>Nota: De no obtener respuesta en un lapso de 72hrs, se procederá a cancelar la atención.</p>
                <p>[Añadir firma]</p>
            </div>

              
            <div className='cuadrotexto'>
                <b>Speech cuando usuario no responde para proceder con la atención:</b>
                <p>Estimado(a),  </p>
                <p>Buenos (Días, Tardes, Noches), nos tratamos de comunicar a través de teams y a su celular sin éxito, con respecto al ticket: “XXXXXX” favor de confirmarnos por este medio si se solucionó o atendió correctamente su (solicitud o incidente), para proceder a cerrar el ticket, de persistir el inconveniente favor de informarnos. Estaremos pendiente a su respuesta. </p>
                <p>Nota: De no obtener respuesta en un lapso de 72hrs, se procederá a cerrar la atención.</p>
                <p>[Añadir firma]</p>
            </div>

            <div className='cuadrotexto'>
              <b>Tipos de usuario pertenecientes a dominio TGP:</b>
              <li> <b>TGA</b>: Usuarios que trabajan directamente para TGP. Solo laptop Lenovo thinkpad.</li>
              <li> <b>YTG</b>: Usuarios externos o contratistas.</li>
            </div>

            <div className='cuadrotexto'>
              <b>Aplicativos utilizados en N1:</b>
              <li><b><a href="https://cutt.ly/sw2m3eWm" target="_blank">WebHelpdesk</a></b>: Para la creación de tickets/ información del usuario/ assets/ FAQ'S /otros</li>
              <li><b><a href="https://cutt.ly/Xw2m99WG" target="_blank">HDO</a></b>: Consultar cuenta de red/ desbloquear/ resetear</li>
              <li><b><a href="https://cutt.ly/3w2m9XnS" target="_blank">RSA</a></b>: Consultar usuario VPN/ desbloqueo/ reseteo PIN/ descargar semilla/ resincronización token</li>
              <li><b><a href="https://cutt.ly/Ew2m9D6o" target="_blank">Portal cautivo - Cisco</a></b>: Para la generación de cuentas guest en red de invitados</li>
            </div>


            <div className='cuadrotexto'>
              <b>Sharepoint:</b>
              <li><b>tgp.sharepoint</b>: repositorio de Sharepoint (para usuarios TGA e YTG). Para usuarios YTG(externos) requiere permisos de responsable TGP + gerente del área. </li>
              <li>Para usuarios TGA se ingresa directamente la solicitud; con excepción del área de ambiental, que requiere el visto bueno del Sr. Hernani.</li>
              <li>Para el respectivo ticket de solicitud de accesos indicar: a.Tipo de acceso (lectura y/o escritura), b.correo que se registrará, c. URL de sharepoint donde desea acceder.</li>
              <li><b>tgp.mysharepoint</b>: One drive para usuarios TGA. Ellos mismos otorgarán accesos a sus contactos.</li>
            </div>

            <div className='cuadrotexto'>
              <b>Licenciamiento:</b> 
              <li>Si un usuario desea solicitar licencia de un software, por ejemplo NITRO PDF, debemos brindarle el URL <a href="https://tgpweb.sharepoint.com/sites/GETI/sis/doc/licen/Lists/Formulario%20de%20Sustento/AllItems.aspx" target="_blank"><b>(hacer click aquí)</b></a>, donde deberá ingresar su solicitud y justificación del porque lo requiere. Para la aprobación se requerirá el visto bueno de su gerencia, jefe inmediato y de Ivone Jara. </li>
            </div>

            <div className='cuadrotexto'>
              <b>Habilitar dispotivo usb / celular:</b>
              <li>Se deberá ejecutar listdeviceinfo.exe. Al ejecutarlo mostrará la información del dispositivo en el navegador predeterminado, y se deberá guardar como archivo HTML con las siglas de usuario. Se derivará al área de seguridad de la información para su habilitación. No requiere vistos buenos.</li>
              <li>Para habilitar celulares:</li>
              <li>Si el antivirus bloquea el acceso al celular (para visualizar fotos), se deberá tomar una captura del log del antivirus, y también tomar nota del Hostname del equipo. Se deberá derivar el ticket a seguridad de la información.</li>
              <li>Si el antivirus no genera bloqueo del celular, solo se deberá habilitar el celular con clave de administrador, ingresando en ejecutar - devmgmt.msc</li>
            </div>

            <div className='cuadrotexto'>
              <b>Crear nuevo usuario contratista:</b>
              <li>Se requiere la aprobación de Ivone Jara (Infraestructura) y Gianmarco Ordoñez (recursos humanos).</li>
              <li>El responsable TGP del contratista, deberá ingresar en este <a href="https://cutt.ly/nw2m9v2m" target='_blank'><b>enlace</b></a> para solicitar la creación de nuevo usuario contratista.</li>
              <li>Se deberá completar cada campo con la información del proveedor en la pestaña "Alta de contratista". </li>
              </div>


            <div className='cuadrotexto'>
              <b>Crear nuevo usuario VPN contratista:</b>
              <li>El responsable TGP del contratista, deberá ingresar en este <a href="https://cutt.ly/Vw2m214M" target='_blank'><b>enlace</b></a> para solicitar la creación de usuario VPN contratista.</li>
              <li>Una vez generado el usuario VPN (con aprobación de Ivone Jara), se generará ticket a Telecomunicaciones para la respectiva habilitación en el Firewall.</li> 
              <li>Para esto se deberá adjuntar en el ticket, el documento de excel detallando los accesos que este usuario necesitará <a href="https://cutt.ly/tw2m2JAD" target='_blank'><b>[descargar]</b></a>.</li>
              <li>Una vez que Telecomunicaciones habilite al usuario en Firewall, nos comunicamos con el usuario para configurar checkpoint y RSA en su equipo.</li>
            </div> 

            <div className='cuadrotexto'>
              <b>Acceso a VPN para usuarios TGP</b>
              <li>No requiere vistos buenos, se ingresa directamente ticket derivado a Telecomunicaciones. </li>
              <li>Una vez que Telecomunicaciones habilite al usuario en Firewall, nos comunicamos con el usuario para configurar checkpoint y RSA en su equipo.</li>

            </div>

            <div className='cuadrotexto'>
              <b>Bases:</b>
              <li>Lima: Torre Panamá (OTP) y Base Lurin</li>
              <li>Cusco  (selva): Kiteni, PS1, PS2, Kamani(PCK)</li>
              <li>Ayacucho (sierra): BOA, PS3, PS4, PCCH o Chiquintirca</li>
              <li>Pisco: San Clemente</li>
            </div>

            <div className='cuadrotexto'>
              <b>Cuentas de usuario:</b>
              <li><b>Desbloqueo</b>: Se realizará a través del HDO realizando las preguntas de seguridad requeridas (nombre, apellido y siglas de usuario).</li>
              <li><b>Reseteo de contraseña</b>: El usuario podrá realizarlo con las teclas ctrl + alt + spr, donde al bloquear la pantalla le mostrará dicha opción (con cable ethernet TGP conectado). También se puede realizar a través del HDO solicitando preguntas de seguridad (nombres, apellidos, siglas, DNI, si es externo: consultar también cargo, empresa, responsable tgp).  </li>
              <li><b>Extensión de cuenta de usuario</b>: Lo deberá solicitar el jefe inmediato del usuario al correo de service desk.</li>
            </div>

            <div className="cuadrotexto">
              <b>Habilitar carpetas compartidas:</b>
              <li>En usuarios TGA, lo deberá solicitar el jefe inmediato por correo al service desk. Para usuarios YTG, lo deberá solicitar el responsable TGP y Gerente del área.</li>
              <li>Para el ticket indicar: Ruta de carpeta compartida y el tipo de acceso si es lectura/escritura o ambos.</li>
            </div>

            <div className="cuadrotexto">
              <b>PIN de impresión:</b>
              <li>En este <a href="https://cutt.ly/kw2m2ulR" target="_blank"><b>enlace</b></a> se puede validar PIN de impresión.</li>
              <li>Ampliación de saldo de impresión: Ingresar en este <a href="https://cutt.ly/kw9e39kW" target="_blank"><b>enlace</b></a> y colocar usuario: solicitud; contraseña: solicitud. Ampliación mínima: 10 dólares; no es necesario ok de su jefe</li>
            </div>

            <div className="cuadrotexto">
              <b>Colas de impresión:</b>
              <li>Lima (OTP y Lurin):  \\tlimps02</li>
              <li>Ayacucho: \\Tayaps01</li>
              <li>Pisco: \\Tpisps01</li>
              <li>Kiteni-Aeródromo-PS2: \\TPS2PS01</li>
              <li>Kamani: \\TKAMPS02</li>
              <li>PS1: \\TPS1PS01</li>
              <li>PS3 y PS4: \\TPS3PS01</li>
              <p>Si no es posible conectar, instalar Driver_Epson_x64\WINX64\SETUP, y luego dar en connect en las rutas mencionadas. </p>

            </div>

            <div className="cuadrotexto">
                <b>Cuentas SAP</b>
                <li>Para atención de bloqueos, reseteos de usuarios SAP, derivar directamente al área de SAP.</li>
                <li>Usuarios SAP SGMM (CMgP): Derivar con wendy camarena wcamarena@tgp.com.pe.</li>
                <li>En el caso de altas SAP, se deberá solicitar al usuario que llene este <a href="https://cutt.ly/Sw2m39DJ"><b>formulario</b></a> de alta SAP. Una vez llenado, se deberá pedir el visto bueno de Claudia Sarmiento y derivar al área de SAP</li>
            </div>

            <div className="cuadrotexto">
              <b>Derivaciones con Fidel Zárate:</b>
              <li>Acceso a <a href="https://coga.bravosolution.com/">Portal Bravo o Portal de compras</a> </li>
              <li>Anulación de reserva SAP, también lo atenderá Miguel Acosta de esa misma área.</li>
            </div>

            <div className="cuadrotexto">
                <b>Solicitar Firma de Outlook</b>
                <li>Se deberá enviar correo a Ana Maria Urrutia y Claudia Tarazona.</li>
            </div>

            <div className="cuadrotexto">
                <b>Solicitud de accesos a:</b>
                
                <b>Zoom</b>
                <li>Todos los usuarios tienen acceso, se les podrá instalar sin visto bueno.</li>

                <b>Documentos de drive / Google Docs</b>
                <li>Se solicitará aprobación de Ernesto Landa, después de su aprobación se deriva a Telecomunicaciones.</li>
                <li>También se les sugiere hacer uso de MySharepoint para documentos compartidos con usuarios externos.</li>
            </div>
          

            <div className="cuadrotexto">
                <b>Tipos de antivirus:</b>
                <li> Apex One para usuarios TGP.</li>
                <li> Trend micro worry free para externos.</li>
                <li>Si el antivirus estuviera bloqueando algo, solo debemos dar click en log, y ver Device control o Firewall.</li>
            </div>

            <div className="cuadrotexto">
                <b>Derivaciones Telecomunicaciones</b>
                <b>Stefanini Tsoc:</b>
                <li>Configuración de cliente VPN</li>
                <li>Configuración de acceso a página web (Caso particular)</li>
                <b>Equans Noc</b>
                <li>Problema de acceso a la red TGP_WLAN</li>
                <li>Problema de acceso a la red TGP_Mobile</li>
                <li>Problema de acceso a internet (Caso general)</li>
            </div>
                
            <div className="cuadrotexto">
                <b>Migración de equipo a dominio TGP.</b>
                <li> Usuario debe tener cuenta de red vigente.</li>
                <li> Visto bueno de responsable TGP.</li>
                <li> Presentar declaración jurada con mínimo windows 10 pro, no debe tener antivirus instalado.</li>
            </div>

              
            <div className="cuadrotexto">
              <b>Creación de grupo de Teams:</b>
              <li>En tgp no se pueden crear grupos de Teams. Si ellos quieren crear grupo deben de solicitar a través de mesa de ayuda la creación de un grupo en teams. Enviarle  <a href='https://tlurapp03/Forms/Equipos_Teams' target="_blank"><b>este formulario</b></a>, donde el usuario y contraseña son: solicitud y solicitud.</li>
            </div>

            <div className="cuadrotexto">
              <b>Acceso a la red Guest en zona selva y sierra/ Pedir ok de Ernesto Landa:</b>
              <li><b>Para celulares: </b>Indicar la MAC del equipo, marca, modelo, número de celular, y correo a registrar</li>
              <li><b>Para laptops: </b>Adjuntar declaración jurada del equipo y correo a registrar. Se deberá solicitar a un N2 que realice la verificación del equipo.</li>
            </div>

            <div className="cuadrotexto">
              <b>Proxy TGP</b>
              <li>Actual http://tlurnet01.tgp.net/prox y.pac</li>
              <li>Antiguo http://tlurpx01.tgp.net/accelerated_pac_base.pac</li>
              <li> Se deberá forzar políticas en caso no se encuentre configurado con nuevo proxy.</li>
            </div>

            <div className="cuadrotexto">
              <b>Parámetros SAP - SGMM Producción</b>
              <b> Desde la red de TGP:</b>
              <li>Descripción/Description: <font color="#4F709C">SGMM Producción (Red TGP)</font></li>
              <li>Servidor de aplicación/Application Server: <font color="#4F709C">172.30.111.213</font></li>
              <li>Número de instancia/Instance Number: <font color="#4F709C">01</font></li>
              <li>ID Sistema/System ID: <font color="#4F709C">CG3</font></li>
              <b>Desde una red externa:</b>
              <li>Descripción/Description: <font color="#4F709C">SGMM Producción (Red Externa)</font></li>
              <li>String de SAP router/SAP router String: <font color="#4F709C">/H/52.200.35.177</font></li>
              <li>Servidor de aplicación/Application Server: <font color="#4F709C">172.30.111.213</font></li>
              <li>Número de instancia/Instance Number: <font color="#4F709C">01</font></li>
              <li>ID Sistema/System ID: <font color="#4F709C">CG3</font></li>
              <br />
              <b>Parámetros SAP TGP Producción (red de TGP)</b>
              <li>Descripción/Description: <font color="#4F709C">SAP TGP Producción</font></li>
              <li>Servidor de aplicación/Application Server: <font color="#4F709C">tlursap01</font></li>
              <li>Router : <font color="#4F709C"></font></li>
              <li>Número de instancia/Instance Number: <font color="#4F709C">00</font></li>
              <li>ID Sistema/System ID: <font color="#4F709C">CGP</font></li>
              <br />
              <b>Parámetros SAP TGP PRD Router (red externa)</b>
              <li>Descripción/Description: <font color="#4F709C">SAP TGP PRD Router</font></li>
              <li>Servidor de aplicación/Application Server: <font color="#4F709C">tlursap01</font></li>
              <li>Router : <font color="#4F709C">/H/200.31.99.48</font></li>
              <li>Número de instancia/Instance Number: <font color="#4F709C">00</font></li>
              <li>ID Sistema/System ID: <font color="#4F709C">CGP</font></li>
              <br />
             </div>

            <div className="cuadrotexto">
              <b>Aplicaciones para derivar con Marco Miranda</b>
              <li>Isotools: https://tgp.esginnova.com</li>
              <li>Plataforma OneSait</li>
              <li>Sistema Star (vuelos)</li>
            </div>

            <div className="cuadrotexto">
              <b>Flujo documentario / olvidó contraseñas</b>
              <li>Para sistema de flujos de documentos ingresar usuario de red y contraseña en mayúscula.</li>
            </div>

            <div className="cuadrotexto">
              <b>Aprobaciones requeridas para la asignación de un equipo informático mayor (Ej: un monitor adicional):</b>
              <li>Gerencia de TI, Gerencia del Área usuaria.</li>
              <b>Aprobaciones requeridas para la asignación de un equipo informático menor:</b>
              <li>Aprobación de jefe inmediato.</li>
            </div>

            <div className="cuadrotexto">
                <b>Aplicativo Gestión de proyectos</b>
                <li>Para ingresar en este aplicativo se utilizarán credenciales de usuario SAP.</li>
            </div>

            <div className="cuadrotexto">
                <b>Si un usuario nos solicita instalar un anexo, se deberá primero consultar con Nelson Paz lo siguiente:</b>
                <li>Marca del teléfono</li>
                <li>Número de teléfono a asignar- Mac Address</li>
                <li>Donde se conectará</li>
                <li>Número de puerto / switch</li>
                <li>Datos del usuario</li>
            </div>

            <div className="cuadrotexto">
                <b>Solicitud de Restauración (backup) de usuarios que ya no laboran en TGP. Para recuperar un backup se necesitan 2 aprobaciones:</b>
                <li>VB gerente área </li>
                <li>VB Claudia Sarmiento (Gerente de área de tecnología de la información) </li>
                <li>Se derivará con Infraestructura</li>
                <li>Si el usuario está activo y solicita una restauración, derivar directamente con Infraestructura.</li>
              </div>

              <div className="cuadrotexto">
                <b>Problemas con cámara de seguridad</b>
                <li>Reportar inconveniente al correo jabregu@stefanini.com.pe.</li>
              </div>

              <div className="cuadrotexto">
                <b>Realizar llamadas desde anexo:</b>
                <li>Se deberá marcar de la siguiente forma: "0 + 951980XXX + código de autorización del usuario(08 dígitos)".</li>
              </div>

              <div className="cuadrotexto">
                <b>Instalar Oil Map</b>
                <li>Instalador ubicado en carpeta compartida Geti. Es una extensión del ArcGis.</li>
              </div>

         </div>
       </div>
    </div>
    )
}

export default Home