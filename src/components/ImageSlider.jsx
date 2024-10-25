

export const ImageSlider = () => {
  const Bannerimages = [
    {
      Image: "./images/AIandcloud.jpg",
    },
    {
      Image: "./images/IndiaAI CyberGaurd AI Hackathon.jpeg",
    },
    {
      Image: "./images/digilocker.png",
    },
    {
      Image: "./images/Man-Ki-Baat.jpg",
    },
  ]
  
  return (
    <div className="relative overflow-hidden w-full h-96 ">
      <div className="absolute flex animate-slide">
        {
          Bannerimages.map((Image,index) => (
            <img key={index} src={Image.Image}
            alt="banner" className="w-full h-96 space-x-2"/>
          ))
        }
      </div>

    </div>
  )
}
