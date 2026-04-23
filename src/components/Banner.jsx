import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function Banner(){

    return (

        <section className="banner">
        <h1 className="logo">Teknolojik Yemekler</h1>
              <div className="banner-text">
                <p className="sub">fırsatı kaçırma</p>
                <h2><span>KOD </span><span>ACIKTIRIR </span><span>PİZZA, </span><span>DOYURUR</span></h2>
                  
                
                <Link to="/formPage" className="cta" data-testid="order-button">ACIKTIM!</Link> 
              </div>
              <img className="pizza" src="/public/banner/banner.png" alt="pizza"/>
              <img className="malzemeler" src="/public/banner/div.png" alt="malzemeler"/>
              <img className="sag-ust" src="/public/banner/upRight.png" alt="sag-ust"/>
              <img className="sol-alt" src="/public/banner/downLeft.png" alt="sol-alt"/>
              
        </section>
        
    
    )
}