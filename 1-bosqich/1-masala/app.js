// 1 masala

let n = +prompt("boshlar sonini kiriting")
let m = +prompt("panjalar sonini kiriting")
let ordaklarsoni = 0

if(0<n,m  &&  n,m<999999  ){
    if(m % 2 === 0){
    ordaklarsoni = ordaklarsoni + n + (m/2)
        alert(ordaklarsoni + " ta o'rdak bor");
    } else{
    alert("-1")
}
}



