
  // Car slider
  const cars = ['./Resource/Galary/slide/s7.png', './Resource/Galary/slide/s6.png', './Resource/Galary/slide/s3.png', './Resource/Galary/slide/s4.png', './Resource/Galary/slide/s5.png'];
  let currentCar = 0;
  const carImg = document.getElementById('car');

  function nextCar(){
    currentCar = (currentCar + 1) % cars.length;
    carImg.src = cars[currentCar];
  }

  function prevCar(){
    currentCar = (currentCar - 1 + cars.length) % cars.length;
    carImg.src = cars[currentCar];
  }

  // Rotate car on mouse move
  const car=document.getElementById('car');
  document.addEventListener('mousemove',e=>{
    const x=(window.innerWidth/2-e.pageX)/30;
    car.style.transform=`rotateY(${x}deg)`;
  });
