const titleSection = document.querySelector(".title-section");
const descSection = document.querySelector(".description-section");
const imageSection = document.querySelector(".image-section");
const submitBtn = document.querySelector(".submit-btn");
let base64String = "";


submitBtn.addEventListener("click", () => {
  if(titleSection.value==="" || descSection.value==="" ){
    alert("Fill the form again");
  }
  else if(imageSection.files.length===0){
    alert("Select the image");
  }
  else{

    const newUser = { Base64Img:"data:image/png;base64,"+base64String, Title: titleSection.value , Description : descSection.value};


    fetch('http://localhost:3000/UserImage', {
    
      method: 'POST',
    
      headers: {
    
        'Content-Type': 'application/json',
    
      },
    
      body: JSON.stringify(newUser),
    
    })
    
    .then(response => response.json())
    
    .then(user => console.log(user));
  }

  titleSection.value="";
  descSection.value="";
  imageSection.value="";
});

imageSection.addEventListener("change", () => {

  base64String="";
  let file = document.querySelector(
    'input[type=file]')['files'][0];

  let reader = new FileReader();

  reader.onload = function () {
      base64String = reader.result.replace("data:", "")
          .replace(/^.+,/, "");

      // alert(imageBase64Stringsep);
      console.log(base64String);
  }
  reader.readAsDataURL(file);
});




