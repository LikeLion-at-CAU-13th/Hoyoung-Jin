const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";


const option = {
    //인증 키 입력
  serviceKey:
    "fDUx97%2FqTZ10XnGSAi7qNXcgYVnmxyniU0%2B83ZVKB2b2fc%2Bk4ZbKsU0isOwbnrGFdeu9BSJFajNdywU5EKTYJQ%3D%3D",
  numofRows: 6, //한페이지 결과 수
  MobileApp: "test", //서비스명(어플 명)
  MobileOS: "ETC", // OS구분 ETC는 기타
  arrange: "A",    // 정렬구분: A=촬영일
  _type: "json",   // 응답메시지 형식: json으로 설정
};


const container = document.getElementById('container');

let i = 0
function getPlusI() {
  i++
  return i
};


let count = Math.floor(Math.random * 50) + 1;

async function getData () {

  let count = Math.floor(Math.random() * 50) + 1;
    
  console.log(count)
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${count}&serviceKey=${option.serviceKey}`

  //get 리쿼스트 후 await로 url의 promise fulfilled 값 리턴 
  const fetchData = await fetch(url);
  console.log(fetchData);

  //get 리쿼스트 후 await로 fetchData의 json변환값 promise fulfilled 값 리턴
  const toJson = await fetchData.json();
  //  console.log(toJson);

  // json 객체의 내부의 body(실질적인 내용을 담고 있는 데이터)의 items의 item의 데이터들
  //근데 여기 await 필요 없지않나? 이미 json으로 반환된 값인데
  const datas = toJson.response.body.items.item;
  // 즉 여기서 datas는 galContentId, galContentTypeId, galTitle... 등 <item></item> 내부의 모든 정보를 말함
  console.log(datas);
     
  // map 메소드: 주어진 함수의 결과값을 모아 배열로 반환
  datas.map((data) => {

    // list 노드 요소 생성
    const list = document.createElement('div');
    list.className = 'list';
        
    // img 요소 노드 생성
    const image = document.createElement('img')
    image.src = data.galWebImageUrl;
      
    // span 노드요소에 사진에 대한 세부내용 적기
    const info = document.createElement('span');
    info.innerText =`
    ${getPlusI()}번째 사진
    제목 : ${data.galTitle}
    장소 : ${data.galPhotographyLocation}`;

    // div list 아래에 자식요소로 추가
    list.appendChild(image);
    list.appendChild(info);
    
    //div list를 div container의 자식요소로 추가   
    container.appendChild(list);

    // 더보기 버튼에 클릭 이벤트 추가하고 정보 넘겨주기
    // 영현님 감사합니다.
    const button = document.createElement('button');
    button.innerText = '더보기';
    button.addEventListener('click', () => {
      const params = new URLSearchParams({
        title: data.galTitle,
        img: data.galWebImageUrl,
        location: data.galPhotographyLocation,
        time: data.galCreatedtime,
        photographer: data.galPhotographer,
        keyword: data.galSearchKeyword,
      });
      //params.toString으로 detail.html에 넘겨주기
      window.location.href = `detail.html?${params.toString()}`;
    })
    list.appendChild(button);
   
  
  })
}
