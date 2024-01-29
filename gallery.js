const imageContainer = document.querySelector(".image-container");
const imageTitle = document.querySelector(".image-title");
const imageDesc = document.querySelector(".image-desc");

async function getData(){
  let data= await fetch('http://localhost:3000/UserImage');
  let dataArray = await data.json();

  console.log(dataArray);
  let row  = document.createElement("div");

  row.classList.add("image-container", "row", "gy-4","gx-4", "row-cols-1", "row-cols-sm-2", "row-cols-md-3");

  dataArray.forEach((element) => {
    let container = document.createElement("div");
    container.classList.add("col","rounded","text-center");

    let image = document.createElement("img");
    image.classList.add("img-fluid");
    image.classList.add("rounded","gallery-item");

    let button = document.createElement("button");
    button.classList.add("btn","btn-primary","mt-3","btn-md");
    button.innerText=`More Info`;
    button.setAttribute("data-bs-toggle","modal");
    button.setAttribute("data-bs-target","#exampleModal");

    let imgaeBody = document.createElement("div");
    imgaeBody.classList.add("d-none");

    let title = document.createElement("p");
    title.classList.add("card-title","h3","uppercase");

    let desc = document.createElement("p");
    title.classList.add("card-text");

    desc.innerText = `${element.Description}`;
    title.innerText= `${element.Title}`;

    image.src = `${element.Base64Img}`;

    imgaeBody.appendChild(title);
    imgaeBody.appendChild(desc);

    container.appendChild(image);
    container.appendChild(button);
    button.appendChild(imgaeBody);

    row.appendChild(container);
  });

  console.log(row);
  imageContainer.appendChild(row);  

}

getData();

document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
      myModal.show();
  }
  else if(e.target.classList.contains("btn")){
    // console.log(e.target.childNodes[1].childNodes);

    const imageInformation = e.target.childNodes[1].childNodes;
    // console.log();

    let title = imageInformation[0].innerText;
    let desc = imageInformation[1].innerText;

    imageTitle.innerText=`${title}`;
    imageDesc.innerHTML=`${desc}`;
  }
});
