function generateQR(){
  let url=document.getElementById("urlid").value;
  if(!url){
    alert("please enter a valid URL");
    return;
  }

  document.getElementById("qrcode").innerHTML="";

  let qr= new QRCode(document.getElementById("qrcode"),{
    text: url,
    width:200, 
    height:200});
  }

function qrDownload(){
  let qrCanvas=document.querySelector("#qrcode canvas");
  let qrImage=qrCanvas.toDataURL("image/png");
  let link =document.createElement("a");
  link.href=qrImage;
  link.download="QR_code.png";
  link.click();
} 