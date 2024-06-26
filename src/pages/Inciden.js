import ImageSlider from "./ImageSlider";
import "../styles/inciden.css"


const Inciden = () => {
  const slides1 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708142539/Guia/imagen_1_unz4m7.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/2_qwnfxk.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/3_xvjyme.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707947495/Guia/deshab_gav852.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708142685/img2_daxp4y.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707937193/Guia/4_jbhahk.png" }

  ];


  const slides2 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic1_o63i6w.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949559/Guia/mic2_auusww.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic3_vkmrkr.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic4_xqwgq4.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mimc5_mcg6sd.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949559/Guia/mic6_qhr08l.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic7_k4rscz.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic9_tt55qz.png"}

  ];

  const slides3 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708390071/Guia/carpeta_ocmp_d5fg6k.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708390073/Guia/comandos_pdqb5s.png"}
  ];

  const slides4 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391747/Guia/icono_blanco_rylcsg.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391745/Guia/app_data_tnka4v.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391787/Guia/icon_cahche_uaosml.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391784/Guia/eliminar_archivo_hopb8v.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391781/Guia/expolores_epur2c.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391773/Guia/ejec_nueva_tarea_vjay7t.png"}

  ];

    const slides5 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708703568/Guia/teamviewer_oeicwz.png" }
  ];

  const slides6= [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711045453/Guia/estadosdeusuariosenoutlok_uxrq5f.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711045455/Guia/estadosdeusuarioenoutlook2_ksmaaw.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711045454/Guia/estadosdeusuarioenoutllok3_n3mtn5.png"},

  ];

  const slides7= [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711046083/Guia/iconos_separados_xvutok.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711045866/Guia/iconosespaciadoscorreccion_zyac8s.png" },
  
  ];

  const slides8= [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711392105/Guia/seabre_y_cierra_jdkwfz.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711392096/Guia/explorador_dx1tgg.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711393044/Guia/control_explorer_rn64iy.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711392109/Guia/taskmanager_paso_1_lsywqa.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711392107/Guia/nuevatarea_explorer_utlluc.png" },
  ];

  
  const slides9= [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711471174/Guia/reglas_skcn5u.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1711467928/Guia/reglas1_mtfk1u.png" },
  
  ];

  const slides10= [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1712610317/Guia/paso1_i3zu6s.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1712610317/Guia/paso2_v55epm.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1712610992/Guia/paso3_ckec2w.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1712610318/Guia/paso4_xxq8a1.png" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1712610318/Guia/paso5_s3pnpu.png" }
  
  ];



  return (
    <div>
        <div>
          <h1>Problema outlook, al generar reunión no genera URL de Teams</h1>
          <div class="carrousel" >
            <ImageSlider slides={slides1} class="carrousel" />
          </div>

        <div className='skills1'> 
          <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Ingresar en Opciones de Outlook</li>
                  <li>Sección complementos</li>
                  <li>Verificar que el check de Teams esté activo</li>
                  <li>Verificar elementos deshabilitados, si ahí aparece Teams,</li> 
                  <li>dar click en habilitar</li>
                  <li>Verificar si hay actualizaciones pendientes.</li>
                  <li>Si lo anterior está correcto, cerrar Teams, también Outlook y validar.</li>
                  <li>Validar cambiando a nueva versión de Teams.</li>
                  <li>Si las anteriores opciones no tienen éxito, reinstalar Teams.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>  

        <div>
          <h1>Problemas con Micrófono en Teams</h1>
          <div class="carrousel">
            <ImageSlider slides={slides2} />
          </div>

          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                  <ol class="texto">
                    <li>Ingresar en Configuración - Sistema - Sonido. Verificar que en la opción "Probar el micrófono" esté detectando el micro.</li>
                    <li>Ingresar en opción Sonido y validar que el mismo micrófono se esté detectando tanto en entrada como salida.</li>
                    <li>Ingresar en Sonidos</li>
                    <li>Validar en la sección "grabar" que micrófono está conectado, luego dar click en propiedades,</li>
                    <li>Verificar nivel de volumen del micrófono.</li>
                    <li>Abrir configuración del sonido</li>
                    <li>Verificar que dispositivo de salida está seleccionado por el sistema. Ingresar en Configuración de privacidad del micrófono,</li>
                    <li>y verificar que esté activo para Teams.</li>
                  </ol>
              </div>
            </div>
          </div> 
        </div>
        

        <div>
          <h1>Carpeta compartida no conecta a pesar de tener permisos</h1>
          <div class="carrousel">
            <ImageSlider slides={slides3} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                  <ol class="texto">
                    <li>Se verifica mensaje de error de red, incluso después de haber reiniciado.</li>
                    <li>Ejecutar en <b>modo administrador</b>: <i>ipconfig /flushdns</i> y también <i>ipconfig/registerdns</i>, luego reiniciar.</li>
                  </ol>
              </div>
           </div> 
         </div>   
        </div>

        <div>
          <h1>Icono de Outlook sale blanco en barra de tareas</h1>
          <div class="carrousel">
            <ImageSlider slides={slides4} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Se verifica icono de Outlook u otro aplicativo de color blanco en barra de tareas.</li>
                  <li>Para corregirlo ingresar en ejecutar y colocar: %appdata%</li>
                  <li>Al ingresar en la ruta AppData/Local, y seleccionamos "iconCache" y se deberán presionar las teclas: <i>shift(bloq fn)+spr.</i>  </li>
                  <li>Al realizarlo, saldrá una ventana y damos click en "si".</li>
                  <li>Luego abrimos administrador de tareas, seleccionamos <i>"explorer.exe"</i> y <i>"Finalizar tarea"</i></li>
                  <li>Luego, en el mismo administrador de tareas, dar click en <i>"Ejecutar nueva tarea"</i> y escribir <i>"Explorer"</i></li>
                  </ol>
              </div> 
            </div>   
          </div>
        </div>

        
        <div>
          <h1>Teamviewer arroja ip 192.168 aún con red de TGP con cable ethernet</h1>
          <div class="carrousel">
            <ImageSlider slides={slides5} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Solución: Solicitar al usuario abrir CMD y que escriba ipconfig y nos dicte la ip que debe iniciar con <b>172.30...</b></li>
                  <li>Luego con esa ip, nos conectamos a nuestro Teamviewer, y usamos la contraseña que le aparece al usuario en su aplicativo de Teamviewer.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>

        <div>
          <h1>Outlook no muestra estado de contactos en Teams</h1>
          <div class="carrousel">
            <ImageSlider slides={slides6} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Solución: Verificar en Outlook que esté habilitada la opción de "mostrar fotografía de usuario..."</li>
                  <li>En teams ingresar en configuración.</li>
                  <li>En sección general, habilitar el check de "registrar el nuevo Teams como aplicación de chat..."</li>
                  <li>Si estas opciones no resultan, realizar reparación de Office.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>

        <div>
          <h1>Iconos de escritorio muy separados</h1>
          <div class="carrousel">
            <ImageSlider slides={slides7} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Ingresar en Regedit y colocar los parámetros seleccionados.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>


        <div>
          <h1>Al abrir Windows explorer se cuelga, se pone pantalla oscura y se cierra </h1>
          <div class="carrousel">
            <ImageSlider slides={slides8} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Click en windows explorer y no abre o se cuelga, y aparece pantalla negra.</li>
                  <li>Para solucionarlo, ingresar en panel de control, en "Opciones del Explorador de archivos".</li>
                  <li>Seleccionar la opción "Este equipo".</li>
                  <li>Luego ir a Task manager, en explorador windows y finalizar tarea.</li>
                  <li>Finalizada la tarea, ejecutar nueva tarea "explorer.exe" y validar.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>

        <div>
          <h1>Exportar / Importar reglas de Outlook </h1>
          <div class="carrousel">
            <ImageSlider slides={slides9} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Click en Inicio / Mover / Reglas / Administrar reglas y alertas .</li>
                  <li>Ingresar en Opciones y seleccionar "Exportar Reglas".</li>
                  <li>Realizar mismo procedimiento para importar.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>

        <div>
          <h1>Como cambiar de ubicación archivo OST - Outlook </h1>
          <div class="carrousel">
            <ImageSlider slides={slides10} />
          </div>
          <div className='skills1'> 
            <div className='general1'>
              <div className="cuadrotexto1">
                <ol class="texto">
                  <li>Crear nuevo perfil de Outlook. Previo a esto, se debe haber copiado al OST de la ubicación actual, a la ubicación donde se desea que esté.</li>
                  <li>Ingresar credenciales.</li>
                  <li>Hacer click en cambiar configuración de la cuenta.</li>
                  <li>Click en más configuraciones.</li>
                  <li>Click en las opciones indicadas, y seleccionar la nueva ubicación del archivo ost.</li>
                </ol>
              </div>   
            </div>
          </div>
        </div>



    </div>
  );
};

export default Inciden;