import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SearchInput from 'react-search-input';
import "../styles/Experience.css"

function Experience() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (term) => {
    setSearchTerm(term);
  };

  // Función para resaltar la palabra buscada
  const highlightSearchTerm = (text) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<mark style="background-color: #F9E897;">${match}</mark>`);
  };

  // Función para renderizar los elementos de la línea de tiempo filtrados y con la palabra buscada resaltada
  const renderFilteredElements = () => {
    // Filtrar los elementos de la línea de tiempo
    const filteredElements = timelineElements.filter(element =>
      element.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordenar los elementos para que los que contienen la palabra buscada estén al principio
    const sortedElements = [...filteredElements];
    sortedElements.sort((a, b) => {
      const aContainsTerm = (
        a.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const bContainsTerm = (
        b.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (aContainsTerm && !bContainsTerm) {
        return -1;
      } else if (!aContainsTerm && bContainsTerm) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <VerticalTimeline lineColor="#3e497a">
        {/* Renderizar los elementos filtrados */}
        {sortedElements.map((element, index) => (
          <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={
                element.date.toLowerCase().includes(searchTerm.toLowerCase()) 
                ? <div dangerouslySetInnerHTML={{ __html: highlightSearchTerm(element.date) }} />
                : element.date
              }
              iconStyle={{ background: '#e9d35b', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {
                  element.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                  ? <div dangerouslySetInnerHTML={{ __html: highlightSearchTerm(element.title) }} />
                  : element.title
                }
              </h3>
              <p>
                <img src={element.image} alt="" height="auto" width="450px" />
              </p>
              <p>
                {
                  element.description.toLowerCase().includes(searchTerm.toLowerCase()) 
                  ? <div dangerouslySetInnerHTML={{ __html: highlightSearchTerm(element.description) }} />
                  : element.description
                }
              </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  };

  // Array de elementos de la línea de tiempo
  const timelineElements = [
    // Elementos de la línea de tiempo...
    
{ 
  date:"Derivar con Telecomunicaciones",
  title:"Bloqueos constantes de usuario de red",
  image: "https://res.cloudinary.com/dgxnatqij/image/upload/v1704499071/Guia/bloqueo_de_usuario_constante_xv5wdg.png",
  description: "En ticket colocar CAPTURAS de: hostname, ip, GPUPDATE /FORCE(administrador) y de borrado de contraseñas             desde Panel de control y también navegadores."
  },
                
  {
  date:"Derivar con Telecomunicaciones",
  title: "Usuario solicita le habiliten URL por ejemplo SUNAT, le aparece bloqueo Forcepoint",
  image: "https://res.cloudinary.com/dgxnatqij/image/upload/v1709178831/forcepoint_vm3kzz.png",
  description: " En ticket adjuntar el visto bueno del Sr. Landa."
  },  
  
  {
    date:"Derivar con Telecomunicaciones",
    title: "Usuario no puede conectarse a TGP_WLAN",
    image: "https://res.cloudinary.com/dgxnatqij/image/upload/v1710971217/Guia/Noconexiona_Tgpwlan_vsavzl.png",
    description: "Adjuntar descartes realizados en el ticket: Ej: Actualización de políticas, cambio de contraseña de red, olvidar red y volver a conectar, etc."
  },  

  {
  date:"Derivar con Telecomunicaciones",
  title:"Inconvenientes con anexo",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1709390001/Guia/probelmas_anexo_f2bay7.png",
  description:"Derivar a Telecom Staff de acuerdo al encargado de cada zona. Para Pisco, derivar a Emerson Durand, para Ayacucho, PS3, PS4, Chiquintirca con Luis Salazar, para PS1, PS2, KP127 y Kiteni, con Alberto Ruiz."
  }, 
  
  {
  date:"Derivar al Staff de Telecomunicaciones, dependiendo de qué zona es el usuario.",
  title:"Código de seguridad de anexo no actualizada (debe tener 08 dígitos).",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1709313566/Guia/codigo_seguridad_llamada_nyoziq.png",
  description:"Derivar a Telecom Staff de acuerdo al encargado de cada zona. Para Pisco, derivar a Emerson Durand, para Ayacucho, PS3, PS4, Chiquintirca con Luis Salazar, para PS1, PS2, KP127 y Kiteni, con Alberto Ruiz."
  },  
  {
  date:"Derivar con Telecomunicaciones",
  title:"Inconvenientes con Decodificador, canales de tv sin señal.",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499076/Guia/control_remoto_decodificador_n3faba.png",
  description:""
  },   
  {
  date:"Derivar con Telecomunicaciones. Listar descartes: 1.Captura de logueo correcto, ejem TGP\YTGX; 2. captura de Proxy actual; 3. GPUPDATE /FORCE sin mensaje de error; 4. validación en otros navegadores.",
  title:"Incidencia con proxy / Bloqueo de todas las páginas web / mensaje Forcepoint",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499069/Guia/problema_proxy_todo_se_bloquea_f71b0a.png",
  description:""
  },  
  {
  date:"Derivar con Infraestructura, solo si NO permite forzar políticas",
  title:"Bloqueo de páginas web",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png",
  description:""
  },   

  {
  date:"Derivar con Telecomunicaciones",
  title:"Corte de internet en base",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1708620735/Guia/corte_de_red_athfht.png",
  description:"Ninguno de los usuarios en base cuenta con conexión a la red de internet. Ejem:TGP_WLAN, Red Guest, TGP.NET"
  },  
  {
  date:"Derivar con Telecomunicaciones con Paz Nelson. Ya que este ticket se derivará al encargado del área, deberá colocarse Telecom Staff. Para Pisco, derivar a Emerson Durand, para Ayacucho, PS3, PS4, Chiquintirca con Luis Salazar, para PS1, PS2, KP127 y Kiteni, con Alberto Ruiz.",
  title:"Solicitar asignación de chip y celular en Otp.",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1707926469/Guia/telecom_nbixjm.png",
  description:""
  },   
  {
  date:"Derivar con Telecomunicaciones",
  title:"Habilitar usuario en Firewall (VPN) / ampliar vigencia en Firewall",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499052/Guia/firewall_vpn_pe8sji.png",
  description:"Si es usuario externo, tener en cuenta consideraciones en sección información."
  },  
  {
  date:"Derivar con infraestructura",
  title:"Actualización de directorio activo y en office 365 - Fotografia / Actualizar cargos",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1701385978/Guia/foto_office_365_smpiuz.png",
  description:""
  },   
  {
  date:"Derivar con Infraestructura",
  title:"Youtube y redes sociales para gerentes",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png",
  description:"Si es una página distinta si debe pasar primero por aprobación de E. Landa y luego recién derivar a Telecom."
  },  
  {
  date:"Derivar con Infraestructura",
  title:"Ampliar vigencia de usuario de red",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1710178170/Guia/caducidad_de_cuenta_lgdaod.png",
  description:"Para solicitar ampliar la cuenta de un usuario externo, lo puede pedir cualquier usuario de TGP."
  },   
  {
  date:"Derivar con Infraestructura",
  title:"Ticket para File Server",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1709306133/Guia/file_server_lofnuf.png",
  description:""
  },  

  {
    date:"Derivar con Infraestructura",
    title:"Listado de asistentes a reunión de Teams",
    image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1711582364/Guia/reunionteams_vep1ib.png",
    description:"Tener en cuenta que la reunión deberá tener como máximo un mes de antiguedad."
  },

  {
    date:"Derivar con Infraestructura",
    title:"Servidor SMTP",
    image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1711459586/Guia/relay_pixeao.png",
    description:"Por ejemplo: agregar la siguiente IP 10.158.120.226 a la lista de IPs permitidas para el envío de correos por el servidor SMTP de TGP."
    }, 
  {
  date:"Derivar con Infraestructura",
  title:"Encintado de información de la ruta \\tgp.net\areas$\privado\imagenesgis\BASEMAP1",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1709306133/Guia/Encintado_de_infromacion_ymgi0m.png",
  description:""
  },   
  {
  date:"Derivar con Infraestructura",
  title:"Edición de grupos de correo",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/grupo_de_correo_ufxlcq.png",
  description:""
  },  
  {
  date:"Derivar con Infraestructura",
  title:"Active Directory",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/google_drive_tuyf6k.png",
  description:"Para solicitudes como: agregar/quitar equipos a OU, actualizar información de cuentas de red, creación de grupos AD, eliminar GPOs, etc. Retirar/asignar acceso a Google Drive del proxy a una lista de usuarios."
  },        
  {
  date:"Derivar con Infraestructura",
  title:"Listas de distribución",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499053/Guia/lista_de_distribuc_abxegj.png",
  description:""
  },  


  {
    date:"Derivar con Infraestructura",
    title:"Listado de usuarios externos que figuran bajo responsabilidad de un usuario TGP",
    image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1711044108/Guia/listadodeusuarios_ypjguk.png",
    description:""
  },

  {
  date:"Derivar con Infraestructura",
  title:"Administración de Office 365",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499049/Guia/creacion_de_contactos_en_tenant_pgqi14.png",
  description:"Para solicitudes como: invitación/creación/eliminación de contactos en el Tenant de TGP, validación de usuarios en grupos asignados, etc."
  },        
  {
  date:"Derivar con Infraestructura",
  title:"Carpetas FTP",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/carpetas_ftp_jh2kr4.png",
  description:""
  },  
  {
  date:"Derivar con Infraestructura",
  title:"Restauración de información",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499060/Guia/recuperar_back_up_xllo1i.png",
  description:"Se requiere para restauración de carpetas, backups de pst, backups de equipos, etc."
  },                 
  
  {
    date:"Derivar con Infraestructura",
    title:"Certificado ExpressWay",
    image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1711046263/Guia/certificadoexpressway_o8kzaw.png",
    description:""
  },


  {
  date:"Atención en nivel 1",
  title:"Instalación de cola de impresión",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499072/Guia/cola_impresion_etgesz.png",
  description:""
  },  
  {
  date:"Atención en nivel 1",
  title:"Inconvenientes con OneDrive",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499066/Guia/errores_one_drive_ywwlrm.png",
  description:"Asociar asset del equipo del usuario en el ticket"
  },  
  {
  date:"Atención en nivel 1",
  title:"Problemas con Teams",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/probelmas_teams_ve2ck9.png",
  description:"Asociar asset del equipo del usuario en el ticket."
  },  
  {
  date:"Atención en nivel 1",
  title:"Instalar VPN en equipo del usuario",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/instalacion_vpn_ax1fkk.png",
  description:"Instalación y configuración de checkpoint y Rsa. Asociar asset del equipo en el ticket."
  },                       
  {
  date:"Atención en nivel 1 y 2",
  title:"Celular no conecta a red Tgp mobile",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/mobile_no_conecta_vm6gfa.png",
  description:"Se deberá asociar el asset del celular en el ticket. Ver manual de conexión a red mobile en sección documentos."
  },  
  {
  date:"Atención en nivel 2",
  title:"Equipo no tiene acceso a internet",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499062/Guia/corte_de_inetetn_wnaetq.png",
  description:"Se deberá asociar el asset del equipo en el ticket."
  },                       
  {
  date:"Atención en nivel 2",
  title:"Traslado de equipos",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1709306895/traslado_de_equipos_q1q1cb.png",
  description:""
  },

  {
    date:"Atención en nivel 2",
    title:"Preparación de sala de reuniones",
    image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1710947974/Guia/preparacionsalareuniones_tdv5dp.png",
    description:"Para apoyo en colocar ecran, conectar equipos, etc."
    },

  {
  date:"Atención en nivel 2",
  title:"Migración de equipo a dominio TGP",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/migracion_dominio_tgp_e9m9ct.png",
  description:" Colocar en ticket: Siglas y nombre de usuario contratista, declaración jurada, visto bueno de responsable TGP, teléfono, fecha de recepción de equipo."
  },
  {
  date:"Atención en nivel 2",
  title:" Mal funcionamiento de laptop",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499056/Guia/problemas_laptop_zuqfxn.png",
  description:"Ejemplo: Equipo no enciende, se cuelga constantemente, está muy lento, etc."
  },
  {
  date:"Atención en nivel 2",
  title:" Mantenimiento de Hardware",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499055/Guia/bateria_kvyqje.png",
  description:""
  },
  {
  date:"Atención en nivel 2",
  title:"Colocar/ retirar disco duro externo",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499051/Guia/retirar_colocar_disco_p1agog.png",
  description:""
  },  
  {
  date:"Atención en nivel 2",
  title:"Entrega de equipo/celular",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1710953978/Guia/entregaequipo_qzhscc.png",
  description:"Cuando el área de Telecomunicaciones solicita entregar equipo celular al usuario."
  },     
  {
  date:"Derivar con seguridad de la información",
  title:"Claroty",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499067/Guia/claroty_hwdgfj.png",
  description:""
  },
  {
  date:"Derivar con seguridad de la información. La liberación de correos que están en cuarentena está a cargo de Ciberseguridad. Inclusive cuando un usuario solicita añadir un correo o dominio a la lista blanca, este pedido debe pasar primero por la evaluación de Ciberseguridad.",
  title:"Liberar correos en cuarentena",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1707927229/correos_cuarentena_vmppy1.png",
  description:""
  },      
  {
  date:"Derivar a seguridad de la información",
  title:"Habilitar dispositivo usb / celular / disco externo",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/habilitar_usb_dtoem0.png",
  description:""
  },
  {
  date:"Derivar a Sharepoint",
  title:"Solicitud de permisos Sharepoint",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/sharepoint_hryene.png",
  description:""
  },               
  {
  date:"Derivar con Aplicaciones",
  title:"Incidencias Tablero Osinergmin",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499065/Guia/osinergmin_tablero_rdtbkm.png",
  description:""
  },
  {
  date:"Derivar con Aplicaciones",
  title:"Acceso a Extranet de proveedores",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1708622686/Guia/extranet_kspeop.png",
  description:""
  },                        
  {
  date:"Derivar con aplicaciones",
  title:"Incidencias en HDO",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/probelmas_hdo_kireax.png",
  description:""
  },
  {
  date:"Derivar con SAP",
  title:"Reseteo de contraseña de SAP",
  image:"https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/resetear_clave_sap_kodeuo.png",
  description:""
  }
  ];

  return (
    <div className="experience">
      <SearchInput
        className="search-input1"
        onChange={handleChange}
        placeholder="Buscar..."
        style={{width:'15%', backgroundColor:'#FFFDCB', padding: '15px', margin: '10px'}}
      />
      {/* Renderizar los elementos filtrados */}
      {renderFilteredElements()}
    </div>
  );
}

export default Experience;


    // <div className="experience">

    //   <VerticalTimeline lineColor="#3e497a">
                  
    //      <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}git 
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Bloqueos constantes de usuario de red
    //       </h3>
    //            <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499071/Guia/bloqueo_de_usuario_constante_xv5wdg.png" alt="" height="auto" width="450px"/> </p>
    //     <p>En ticket colocar CAPTURAS de: hostname, ip, GPUPDATE /FORCE(administrador) y de borrado de contraseñas desde Panel de control y también navegadores.</p>
          
    //      </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Usuario solicita le habiliten URL por ejemplo SUNAT, le aparece bloqueo Forcepoint
    //       </h3>
    //            <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709178831/forcepoint_vm3kzz.png" alt="" height="auto" width="450px" /> </p>
    //     <p>En ticket adjuntar el visto bueno del Sr. Landa.</p>
          
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Inconvenientes con anexo
    //       </h3>
    //            <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709390001/Guia/probelmas_anexo_f2bay7.png" alt="" height="auto" width="450px" /> </p>
    //     <p>Derivar a Telecom Staff de acuerdo al encargado de cada zona. Para Pisco, derivar a Emerson Durand, para Ayacucho, PS3, PS4, Chiquintirca con Luis Salazar, para PS1, PS2, KP127 y Kiteni, con Alberto Ruiz.</p>
          
    //     </VerticalTimelineElement>


    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar al Staff de Telecomunicaciones, dependiendo de qué zona es el usuario."
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Código de seguridad de anexo no actualizada (debe tener 08 dígitos). 
    //       </h3>
    //            <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709313566/Guia/codigo_seguridad_llamada_nyoziq.png" alt="" height="auto" width="450px" /> </p>
     
    //     </VerticalTimelineElement>


    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //        Inconvenientes con Decodificador, canales de tv sin señal. 
    //       </h3>

    //       <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499076/Guia/control_remoto_decodificador_n3faba.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>
     
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones. Listar descartes: 1.Captura de logueo correcto, ejem TGP\YTGX;
    //       2. captura de Proxy actual; 3. GPUPDATE /FORCE sin mensaje de error; 4. validación en otros navegadores."
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Incidencia con proxy / Bloqueo de todas las páginas web / mensaje Forcepoint
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499069/Guia/problema_proxy_todo_se_bloquea_f71b0a.png" alt="" height="auto" width="450px" /></p>
         
    //     </VerticalTimelineElement>

      
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura, solo si NO permite forzar políticas"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Bloqueo de páginas web
    //       </h3>
    //         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png" alt="" height="auto" width="450px" /></p>
    //     </VerticalTimelineElement>
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Corte de internet en base
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1708620735/Guia/corte_de_red_athfht.png" alt="" height="auto" width="450px"/></p> 
         
    //     </VerticalTimelineElement>
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones con Paz Nelson. Ya que este ticket se derivará al encargado del área, deberá colocarse Telecom Staff. Para Pisco, derivar a Emerson Durand, para Ayacucho, PS3, PS4, Chiquintirca con Luis Salazar, para PS1, PS2, KP127 y Kiteni, con Alberto Ruiz."
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Solicitar asignación de chip y celular en Otp. 
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1707926469/Guia/telecom_nbixjm.png" alt="" height="auto" width="450px"/></p> 
         
    //     </VerticalTimelineElement>
        
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Telecomunicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Habilitar usuario en Firewall (VPN) / ampliar vigencia en Firewall
    //       </h3>
    //        <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499052/Guia/firewall_vpn_pe8sji.png" alt="" height="auto" width="450px" /></p>

    //     </VerticalTimelineElement>
      

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Actualización de directorio activo y en office 365 - Fotografia / Actualizar cargos
    //       </h3>
    //       <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1701385978/Guia/foto_office_365_smpiuz.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Youtube y redes sociales para gerentes. 
    //       </h3>
    //       <p> Si es una página distinta si debe pasar primero por aprobación de E. Landa y luego recién derivar a Telecom.</p>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Ampliar vigencia de usuario de red 
    //       </h3>
    //       <p> Para solicitar ampliar la cuenta de un usuario externo, lo puede pedir cualquier usuario de TGP.</p>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1710178170/Guia/caducidad_de_cuenta_lgdaod.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Ticket para File Server 
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709306133/Guia/file_server_lofnuf.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Encintado de información de la ruta \\tgp.net\areas$\privado\imagenesgis\BASEMAP1
    //        </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709306133/Guia/Encintado_de_infromacion_ymgi0m.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Edición de grupos de correo
    //       </h3>
    //      <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/grupo_de_correo_ufxlcq.png" alt="" height="auto" width="450px" /></p>
         
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //      Inconvenientes con certificado de Outlook expirado, no permite actualizarlo.          </h3>
    //      <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709306740/Guia/certificado_outlook_ghxmky.png" alt="" height="auto" width="450px" /></p>
         
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Active Directory
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/google_drive_tuyf6k.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //        Para solicitudes como: agregar/quitar equipos a OU, actualizar información de cuentas de red, creación de grupos AD, eliminar GPOs, etc. Retirar/asignar acceso a Google Drive del proxy a una lista de usuarios.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Listas de distribución
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499053/Guia/lista_de_distribuc_abxegj.png" alt="" height="auto" width="450px" /></p>
          
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Administración de Office 365
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499049/Guia/creacion_de_contactos_en_tenant_pgqi14.png" alt="" height="auto" width="450px"/></p>
    //       <p>
    //        Para solicitudes como: invitación/creación/eliminación de contactos en el Tenant de TGP, validación de usuarios en grupos asignados, etc.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Carpetas FTP
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/carpetas_ftp_jh2kr4.png" alt="" height="auto" width="450px" /></p> 
       
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Infraestructura"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Restauración de información
    //       </h3>
    //         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499060/Guia/recuperar_back_up_xllo1i.png" alt=""  height="auto" width="450px"/></p>

    //       <p>
    //         Se requiere para restauración de carpetas, backups de pst, backups de equipos, etc.
    //       </p>
    //     </VerticalTimelineElement>
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 1"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Instalación de cola de impresión
    //       </h3>
    //        <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499072/Guia/cola_impresion_etgesz.png" height="auto" width="450px" alt="" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 1"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Inconvenientes con OneDrive
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499066/Guia/errores_one_drive_ywwlrm.png" alt="" height="auto" width="450px" /></p>
    //       <p>Asociar asset del equipo del usuario en el ticket</p>

    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 1"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Problemas con Teams
    //       </h3>
    //        <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/probelmas_teams_ve2ck9.png" alt="" height="auto" width="450px" /></p>    
   
    //         <p>Asociar asset del equipo del usuario en el ticket</p>
            
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 1"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Instalar VPN en equipo del usuario
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/instalacion_vpn_ax1fkk.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //        Instalación y configuración de checkpoint y Rsa.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 1 y 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Celular no conecta a red Tgp mobile
    //       </h3>
    //      <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/mobile_no_conecta_vm6gfa.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //         Se deberá asociar el asset del celular en el ticket. Ver manual de conexión a red mobile en sección documentos.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //        Equipo no tiene acceso a internet
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499062/Guia/corte_de_inetetn_wnaetq.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //         Se deberá asociar el asset del equipo en el ticket
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Traslado de equipos
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1709306895/traslado_de_equipos_q1q1cb.png" alt="" height="auto" width="450px" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Migración de equipo a dominio TGP
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/migracion_dominio_tgp_e9m9ct.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //        Colocar en ticket: Siglas y nombre de usuario contratista, declaración jurada, visto bueno de responsable TGP, teléfono, fecha de recepción de equipo.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Mal funcionamiento de laptop
    //       </h3>
    //        <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499056/Guia/problemas_laptop_zuqfxn.png" alt="" height="auto" width="450px" /></p>
    //       <p>
    //         Ejemplo: Equipo no enciende, se cuelga constantemente, está muy lento, etc.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Mantenimiento de Hardware
    //       </h3>
         
    //       <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499055/Guia/bateria_kvyqje.png" alt="" height="auto" width="450px" /></p>
            
          
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Atención en nivel 2"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Colocar/ retirar disco duro externo 
    //       </h3>
          
    //         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499051/Guia/retirar_colocar_disco_p1agog.png" alt="" height="auto" width="450px" /></p>
    //     </VerticalTimelineElement>
       
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con seguridad de la información"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Claroty
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499067/Guia/claroty_hwdgfj.png" alt="" height="auto" width="450px"/></p>
              
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con seguridad de la información. La liberación de correos que están en cuarentena está a cargo de Ciberseguridad. Inclusive cuando un usuario solicita añadir un correo o dominio a la lista blanca, este pedido debe pasar primero por la evaluación de Ciberseguridad."
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //       Liberar correos en cuarentena
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1707927229/correos_cuarentena_vmppy1.png" alt="" height="auto" width="450px"/></p>
              
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar a seguridad de la información"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Habilitar dispositivo usb / celular / disco externo
    //       </h3>
         
    //        <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/habilitar_usb_dtoem0.png" alt="" height="auto" width="450px"/></p>

    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar a Sharepoint"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Solicitud de permisos Sharepoint
    //       </h3>

    //         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/sharepoint_hryene.png" alt="" height="auto" width="450px" /></p>  
        
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Aplicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Incidencias Tablero Osinergmin
    //       </h3>
        
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499065/Guia/osinergmin_tablero_rdtbkm.png" alt=""  height="auto" width="450px"/></p>
    //     </VerticalTimelineElement>
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con Aplicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //        Acceso a Extranet de proveedores
    //       </h3>
        
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1708622686/Guia/extranet_kspeop.png" alt=""  height="auto" width="450px"/></p>
    //     </VerticalTimelineElement>
        
    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con aplicaciones"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Incidencias en HDO
    //       </h3>
    //       <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/probelmas_hdo_kireax.png" alt="" height="auto" width="450px" /></p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       className="vertical-timeline-element--work"
    //       date="Derivar con SAP"
    //       iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //       icon={<WorkIcon />}
    //     >
    //       <h3 className="vertical-timeline-element-title">
    //         Reseteo de contraseña de SAP
    //       </h3>
    //        <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/resetear_clave_sap_kodeuo.png" alt="" height="auto" width="450px" /></p> 
       
    //     </VerticalTimelineElement>

    //     </VerticalTimeline>
    // </div>
//   );
// }

// export default Experience;