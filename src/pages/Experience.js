import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
     
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bloqueos constantes de usuario de red
          </h3>
               <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499071/Guia/bloqueo_de_usuario_constante_xv5wdg.png" alt="" height="auto" width="450px" /> </p>
        <p>En ticket colocar hostname, ip, y capturas de borrado de contraseñas</p>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Inconvenientes con Decodificador, canales de tv sin señal. 
          </h3>

          <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499076/Guia/control_remoto_decodificador_n3faba.png" height="auto" width="450px" alt="" /></p>
        </VerticalTimelineElement>
     
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones, solo si permite forzar políticas"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Incidencia con proxy / Bloqueo de todas las páginas web
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499069/Guia/problema_proxy_todo_se_bloquea_f71b0a.png" alt="" height="auto" width="450px" /></p>
         
        </VerticalTimelineElement>

      
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura, solo si NO permite forzar políticas"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bloqueo de páginas web
          </h3>
            <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png" alt="" height="auto" width="450px" /></p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Corte de internet en base
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499067/Guia/corte_de_internet_ef1ah3.png" alt="" height="auto" width="450px"/></p> 
         
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones con Paz Nelson"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Solicitar asignación de celular y equipo
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1707349617/Guia/asignacion_it0lzy.png" alt="" height="auto" width="450px"/></p> 
         
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Telecomunicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Habilitar usuario en Firewall (VPN) / ampliar vigencia en Firewall
          </h3>
           <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499052/Guia/firewall_vpn_pe8sji.png" alt="" height="auto" width="450px" /></p>

        </VerticalTimelineElement>
      

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Actualización de directorio activo y en office 365 - Fotografia / Actualizar cargos
          </h3>
          <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1701385978/Guia/foto_office_365_smpiuz.png" height="auto" width="450px" alt="" /></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Youtube y redes sociales para gerentes
          </h3>
          <p> Si es una página distinta si debe pasar primero por aprobación de E. Landa y luego recién derivar a Telecom.</p>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499073/Guia/zoom_vkwsbd.png" height="auto" width="450px" alt="" /></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Desbloqueo de correo - remitente
          </h3>

          <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499070/Guia/bloqueo_correo_nu77ly.png" alt="" height="auto" width="450px"/></p>
          <h4 className="vertical-timeline-element-subtitle">
            Si el correo muestra la opción de "release email" intentar primero de esa forma.
          </h4>
         
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Edición de grupos de correo
          </h3>
         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/grupo_de_correo_ufxlcq.png" alt="" height="auto" width="450px" /></p>
         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Active Directory
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/google_drive_tuyf6k.png" alt="" height="auto" width="450px" /></p>
          <p>
           Para solicitudes como: agregar/quitar equipos a OU, actualizar información de cuentas de red, creación de grupos AD, eliminar GPOs, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Listas de distribución
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499053/Guia/lista_de_distribuc_abxegj.png" alt="" height="auto" width="450px" /></p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Administración de Office 365
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499049/Guia/creacion_de_contactos_en_tenant_pgqi14.png" alt="" height="auto" width="450px"/></p>
          <p>
           Para solicitudes como: invitación/creación/eliminación de contactos en el Tenant de TGP, validación de usuarios en grupos asignados, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Carpetas FTP
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/carpetas_ftp_jh2kr4.png" alt="" height="auto" width="450px" /></p> 
       
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Infraestructura"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Restauración de información
          </h3>
            <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499060/Guia/recuperar_back_up_xllo1i.png" alt=""  height="auto" width="450px"/></p>

          <p>
            Se requiere para restauración de carpetas, backups de pst, backups de equipos, etc.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 1"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Instalación de cola de impresión
          </h3>
           <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499072/Guia/cola_impresion_etgesz.png" height="auto" width="450px" alt="" /></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 1"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Inconvenientes con OneDrive
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499066/Guia/errores_one_drive_ywwlrm.png" alt="" height="auto" width="450px" /></p>
          <p>Asociar asset del equipo del usuario en el ticket</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 1"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Problemas con Teams
          </h3>
           <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/probelmas_teams_ve2ck9.png" alt="" height="auto" width="450px" /></p>    
   
            <p>Asociar asset del equipo del usuario en el ticket</p>
            
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Celular no conecta a red Tgp mobile
          </h3>
         <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499063/Guia/mobile_no_conecta_vm6gfa.png" alt="" height="auto" width="450px" /></p>
          <p>
            Se deberá asociar el asset del celular en el ticket
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Equipo no tiene acceso a internet
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499062/Guia/corte_de_inetetn_wnaetq.png" alt="" height="auto" width="450px" /></p>
          <p>
            Se deberá asociar el asset del equipo en el ticket
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Migración de equipo a dominio TGP
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499059/Guia/migracion_dominio_tgp_e9m9ct.png" alt="" height="auto" width="450px" /></p>
          <p>
           Colocar en ticket: Siglas y nombre de usuario contratista, declaración jurada, visto bueno de responsable TGP, teléfono, fecha de recepción de equipo.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mal funcionamiento de laptop
          </h3>
           <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499056/Guia/problemas_laptop_zuqfxn.png" alt="" height="auto" width="450px" /></p>
          <p>
            Ejemplo: Equipo no enciende, se cuelga constantemente, está muy lento, etc.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Mantenimiento de Hardware
          </h3>
         
          <p> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499055/Guia/bateria_kvyqje.png" alt="" height="auto" width="450px" /></p>
            
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 2"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Colocar/ retirar disco duro externo 
          </h3>
          
            <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499051/Guia/retirar_colocar_disco_p1agog.png" alt="" height="auto" width="450px" /></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Atención en nivel 1"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Instalar VPN en equipo del usuario
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/instalacion_vpn_ax1fkk.png" alt="" height="auto" width="450px" /></p>
          <p>
           Instalación y configuración de checkpoint y Rsa.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con seguridad de la información"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Claroty
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499067/Guia/claroty_hwdgfj.png" alt="" height="auto" width="450px"/></p>
              
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar a seguridad de la información"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Habilitar dispositivo usb / celular / disco externo
          </h3>
         
           <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499054/Guia/habilitar_usb_dtoem0.png" alt="" height="auto" width="450px"/></p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar a Sharepoint"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Solicitud de permisos Sharepoint
          </h3>

            <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/sharepoint_hryene.png" alt="" height="auto" width="450px" /></p>  
        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con Aplicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Incidencias Tablero Osinergmin
          </h3>
        
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499065/Guia/osinergmin_tablero_rdtbkm.png" alt=""  height="auto" width="450px"/></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con aplicaciones"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Incidencias en HDO
          </h3>
          <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/probelmas_hdo_kireax.png" alt="" height="auto" width="450px" /></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Derivar con SAP"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Reseteo de contraseña de SAP
          </h3>
           <p><img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1704499046/Guia/resetear_clave_sap_kodeuo.png" alt="" height="auto" width="450px" /></p> 
       
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}

export default Experience;