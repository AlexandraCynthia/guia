import ImageSlider from "./ImageSlider";
import "../styles/inciden.css"


const Inciden = () => {
  const slides1 = [
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/1_drpw9u.png"},
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/2_qwnfxk.png", title: "forest" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707936895/Guia/3_xvjyme.png", title: "city" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707947495/Guia/deshab_gav852.png", title: "city" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707930067/3__jujr7b.png", title: "italy" },
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
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic8_o4ixvt.png", title: "italy" },
    { url: "https://res.cloudinary.com/dgxnatqij/image/upload/v1707949558/Guia/mic9_tt55qz.png", title: "italy" }

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
          <div class="texto">
            <p>1. Ingresar en Opciones de Outlook</p>
            <p>2. Sección complementos</p>
            <p>3. Verificar que el check de Teams esté activo</p>
            <p>4. Verificar elementos deshabilitados, si ahí aparece Teams, (5) dar click en habilitar</p>
            <p>6. Verificar si hay actualizaciones pendientes.</p>
            <p>7. Cerrar Teams, también Outlook y validar</p>
            <p>8. Reinstalar Teams.</p>
          </div>
        </div>  

        <div>
          <h1>Problemas con Micrófono en Teams</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides2} />
          </div>
          <div class="texto">
            <p>1. Ingresar en Opciones de Outlook</p>
            <p>2. Sección complementos</p>
            <p>3. Verificar que el check de Teams esté activo</p>
            <p>4. Verificar elementos deshabilitados, si ahí aparece Teams, (5) dar click en habilitar</p>
            <p>6. Verificar si hay actualizaciones pendientes.</p>
            <p>7. Cerrar Teams, también Outlook y validar</p>
            <p>8. Reinstalar Teams.</p>
          </div>
        </div>



    </div>



  );
};

export default Inciden;