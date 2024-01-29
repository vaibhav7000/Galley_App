const imageContainer = document.querySelector(".image-container");

async function getData(){
  let data= await fetch('http://localhost:3000/UserImage');
  let dataArray = await data.json();

  console.log(dataArray);
  let row  = document.createElement("div");

  row.classList.add("image-container", "row", "gy-4","gx-4", "row-cols-1", "row-cols-sm-2", "row-cols-md-3");

  dataArray.forEach((element) => {
    let container = document.createElement("div");
    container.classList.add("col","rounded");

    let image = document.createElement("img");
    image.classList.add("img-fluid" ,"h-75");
    image.classList.add("rounded","w-100","gallery-item");

    let imgaeBody = document.createElement("div");
    imgaeBody.classList.add("card-body","flex","flex-col","items-center","justify-center","text-white");

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
    container.appendChild(imgaeBody);

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
});

