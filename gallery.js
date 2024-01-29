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
    image.classList.add("img-fluid" );
    image.classList.add("rounded","w-100","gallery-item");

    let imgaeBody = document.createElement("div");
    imgaeBody.classList.add("mt-2","row");

    let imageBodyContainer = document.createElement("div");
    imageBodyContainer.classList.add("col","text-center");

    let title = document.createElement("p");
    title.classList.add("uppercase","text-black","text-break","fw-bold");

    let desc = document.createElement("p");
    desc.classList.add("text-white","text-break");

    desc.innerText = `${element.Description}`;
    title.innerText= `${element.Title}`;

    image.src = `${element.Base64Img}`;

    imageBodyContainer.appendChild(title);
    imageBodyContainer.appendChild(desc);



    container.appendChild(image);
    container.appendChild(imageBodyContainer);

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

