import friends from "../assets/images/friends.jpg";
import myself from "../assets/images/myself.jpg";
import tesla from "../assets/images/tesla.jpg";
import dream from "../assets/images/dream.png";

const ImagesId = {
  "WhyFE" : friends,
  "profile" : myself,
  "dream" : dream,
  "hobby" : tesla,
}

// Create Section에서 props로 id값 전달받고 이미지 건네주기
function GetImage({idName}) {
  const src = ImagesId[idName];
  console.log(src)
  return <img src={src} alt={idName} className="photos"/>;
}


export default GetImage;