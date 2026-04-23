export default function SuccessPage({ordersDetail}){

    const baslangicUcreti = 85.5;
    const secimUcreti = 5;
    const secimler = ordersDetail.malzemeler.length *secimUcreti;
    const toplam = (baslangicUcreti + secimler) * ordersDetail.quantity;

    console.log(ordersDetail.hamur);

    if(!ordersDetail || !ordersDetail.isim){
        return (
      <section className="success-page-container">
        <div className="success-banner-text">
          <h1 className="logo">Teknolojik Yemekler</h1>
          <h2 className="success-text">Henüz oluşturulmuş bir sipariş yok.</h2>
        </div>
      </section>
    );
    }

    return(
        <section className="success-page-container">
        
              <div className="success-banner-text">
                <h1 className="logo">Teknolojik Yemekler</h1>

                <div className="success-text">
                  <h7 className="lezzetinYolda">lezzetin yolda</h7>
                <h5 className="siparisAlindi">SİPARİŞİNİZ ALINDI</h5>
                </div>
      
            </div>

            <div className="success-order-summary">
              <h3>Position Absolute Acı Pizza</h3>
              <div className="icerik">
              <p>Boyut: {ordersDetail.boyut === "küçük" ? "S" :
                          ordersDetail.boyut === "orta" ? "M":
                          ordersDetail.boyut === "büyük" ? "L" :
                          "-"}</p>
              <p>Hamur: {ordersDetail.hamur === "kalin" ? "Kalın" :
                          ordersDetail.hamur === "ince" ? "İnce":
                          "-"}</p>

              <div className="icerik2">
                <p className="icerik-malzemeler">Ek Malzemeler:{" "}
                  {ordersDetail.malzemeler.length > 0 
                   ? ordersDetail.malzemeler.join(", ") :"Ek malzeme seçilmedi." }
                </p>
              </div>

              </div>
              

        
          <div className="siparisToplami">
            <p>Sipariş Toplamı</p>
            <p><span className="malzemeTutari">Malzeme Tutarı:</span> <span>{secimler}₺</span> </p>
            <p><span className="toplam">Toplam:</span> <span>{toplam}₺</span></p>
          </div>          
        
      </div>
        </section>
    )
}