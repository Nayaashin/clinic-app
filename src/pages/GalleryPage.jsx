import Forth from "../images/2.jpeg";
import Third from "../images/dentistry.jpeg";
import Second from "../images/implant.jpeg";
import Fifth from "../images/kid.jpeg";
import Six from "../images/7.jpeg";
import Seven from "../images/xray.jpeg";
import First from "../images/smile.jpeg";

const GalleryPage = () => {
  return (
    <div className="container">
      <div className="grid">
        <img src={First} alt="" className="gridItem1" />
        <img src={Second} alt="" className="gridItem2" />
        <img src={Third} alt="" className="gridItem3" />
        <img src={Forth} alt="" className="gridIte4" />
        <img src={Fifth} alt="" className="gridItem5" />
        <img src={Six} alt="" className="gridItem6" />
        <img src={Seven} alt="" className="gridItem7" />
      </div>
    </div>
  );
};

export default GalleryPage;
