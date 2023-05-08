//Here is the teachable machine link :- https://teachablemachine.withgoogle.com/models/KfOpagDDD/;



Webcam.set({
    width:400,
    height:350,
    image_format : 'png',
    png_quality:144
});
  camera = document.getElementsById("camera");

  Webcam.attach('#camera');

  