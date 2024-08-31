


function celsiusConv(){
  const x = document.getElementById("Fh");
 const fahrenheit = parseFloat(x.value);

 if(isNaN(fahrenheit)){
  console.log("Enter a valid number");
  return;
 }

 const y = fahrenheit - 32 ; 
 const z = (5 * y) / 9 ; 
 
 
 document.write('<span style="font-size: 100px; font-family: Arial; ">I love you</span>');
 document.body.style.backgroundImage = "url('yes.jpg')";
document.body.style.backgroundSize = "cover"; 
document.body.style.backgroundRepeat = "no-repeat"; 
document.body.style.backgroundPosition = "center"; 



}

document.querySelector("button").addEventListener("click" , celsiusConv);