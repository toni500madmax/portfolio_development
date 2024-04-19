import "./Style.css";

import Imagem2 from "../../../assets/hands-5216585_1280.jpg";

export default function ImgHero() {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="spin-container">
            <div className="shape">
              <div className="bd">
                <img src={Imagem2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
