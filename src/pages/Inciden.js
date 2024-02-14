import ImageSlider from "./ImageSlider";

const Inciden = () => {
  const slides1 = [
    { url: "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "beach" },
    { url: "https://images.unsplash.com/photo-1707343888207-2ffddba86fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8", title: "boat" },
    { url: "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", title: "forest" },
    { url: "https://images.unsplash.com/photo-1706685838669-69d5dcb5ecae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", title: "city" },
    { url: "https://images.unsplash.com/photo-1515453814433-52e741686bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", title: "italy" },
  ];


  const slides2 = [
    { url: "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "beach" },
    { url: "https://images.unsplash.com/photo-1707343888207-2ffddba86fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8", title: "boat" },
    { url: "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", title: "forest" },
    { url: "https://images.unsplash.com/photo-1706685838669-69d5dcb5ecae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", title: "city" },
    { url: "https://images.unsplash.com/photo-1515453814433-52e741686bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", title: "italy" },
  ];

  const containerStyles = {
    width: "800px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div>
        <div>
          <h1>Problemas con Outlook</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides1} />
          </div>
        </div>

        <div>
          <h1>Problemas con Outlook</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides2} />
          </div>
        </div>



    </div>



  );
};

export default Inciden;