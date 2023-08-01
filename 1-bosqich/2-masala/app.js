// 2 masala


let b = Math.floor(Math.random() * 1000000)

function checkNumber(number) {

    let a = number.toString();
    
    let first = a.slice(0, 3);
    let last = a.slice(3);
    

    if (first === last) {
      alert("YES");
    } else {
      alert("NO");
    }
}
checkNumber(b)


  



  
