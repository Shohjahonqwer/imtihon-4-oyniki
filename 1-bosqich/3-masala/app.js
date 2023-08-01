// 3 masala

let N = +prompt("kerak sonni kiriting") 
  let number = N.toString();
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }
  
alert(sum);
  