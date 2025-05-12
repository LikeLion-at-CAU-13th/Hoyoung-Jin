import GetImage from "./GetImage";
import GetSectionContents from "./GetSectionContents";



// App.js에서 props로 idName값 받기
function CreateSection ({idName}) {
  return (
    <section id={idName}>
      <GetImage idName={idName}/>
      <GetSectionContents idName={idName}/>
    </section>
  )
}






export default CreateSection;