let imgBox=document.getElementById('display');
let qrImage=document.getElementById("qrImg");
let url=document.getElementById("qrText");
let error=document.querySelector('.error');


 document.querySelector(".button").addEventListener("click",qrGenerator);


function qrGenerator(){
   let urlValue=url.value.trim();
   if(urlValue === ""){
    imgBox.style.display="none";
   }

else{

    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url.value;
    imgBox.style.display="flex";
}
}