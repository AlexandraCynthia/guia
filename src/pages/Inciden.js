import ImageSlider from "./ImageSlider";
import "../styles/inciden.css"


const Inciden = () => {
  const slides1 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708142539/Guia/imagen_1_unz4m7.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/2_qwnfxk.png", title: "forest" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/3_xvjyme.png", title: "city" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707947495/Guia/deshab_gav852.png", title: "city" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708142685/img2_daxp4y.png", title: "italy" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707937193/Guia/4_jbhahk.png", title: "italy" }

  ];


  const slides2 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic1_o63i6w.png", title: "beach" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949559/Guia/mic2_auusww.png", title: "boat" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic3_vkmrkr.png", title: "forest" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic4_xqwgq4.png", title: "city" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mimc5_mcg6sd.png", title: "italy" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949559/Guia/mic6_qhr08l.png", title: "italy" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic7_k4rscz.png", title: "italy" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic9_tt55qz.png", title: "italy" }

  ];

  const slides3 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708390071/Guia/carpeta_ocmp_d5fg6k.png", title: "beach" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708390073/Guia/comandos_pdqb5s.png", title: "boat" }
  ];

  const slides4 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391747/Guia/icono_blanco_rylcsg.png", title: "beach" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391745/Guia/app_data_tnka4v.png", title: "boat" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391787/Guia/icon_cahche_uaosml.png", title: "boat" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391784/Guia/eliminar_archivo_hopb8v.png", title: "boat" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391781/Guia/expolores_epur2c.png", title: "boat" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1708391773/Guia/ejec_nueva_tarea_vjay7t.png", title: "boat" }

  ];

  const containerStyles = {
    width: "55%",
    height: "400px",
    margin: "0 auto",
  };
  return (
    <div>
        <div>
          <h1>Problema outlook, al generar reunión no genera URL de Teams</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides1} />
          </div>
          <ol class="texto">
            <li>Ingresar en Opciones de Outlook</li>
            <li>Sección complementos</li>
            <li>Verificar que el check de Teams esté activo</li>
            <li>Verificar elementos deshabilitados, si ahí aparece Teams,</li> 
            <li>dar click en habilitar</li>
            <li>Verificar si hay actualizaciones pendientes.</li>
            <li>Si lo anterior está correcto, cerrar Teams, también Outlook y validar.</li>
            <li>Si las anteriores opciones no tienen éxito, reinstalar Teams.</li>
          </ol>
        </div>  

        <div>
          <h1>Problemas con Micrófono en Teams</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides2} />
          </div>
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

        <div>
          <h1>Carpeta compartida no conecta a pesar de tener permisos</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides3} />
          </div>
          <ol class="texto">
            <li>Se verifica mensaje de error de red, incluso después de haber reiniciado.</li>
            <li>Ejecutar en <b>modo administrador</b>: <i>ipconfig /flushdns</i> y también <i>ipconfig/registerdns</i>, luego reiniciar.</li>
          </ol>
        </div>

        <div>
          <h1>Icono de Outlook sale blanco en barra de tareas</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides4} />
          </div>
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



  );
};

export default Inciden;