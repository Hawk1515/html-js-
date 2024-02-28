
  alert('1-Uy ishi')
let son = +prompt("Qo'ylar sonini kiriting."  );
let qoylar = "";

for (let i = 1; i <= son; i++) {
  if (i == 1) {
    qoylar += i + " qo'y ";
  } else {
    qoylar += i + " qo'ylar ";
  }
}
console.log(qoylar);
 
alert('2-uy ishi')
 let a = +prompt("Dioganal sonini kiriting ")
 let box = ''

 for (let i= 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
        if(i==j || i==0 || j==0  || i==a-1 || j==a-1 || i+j==a-1 || i==a+1 ) {
            box=box+ ' ◼️ '
        }else{
            box+=' ◻️ '
        }  
    }
    console.log(box)
     box=''
    
 }
  alert("3-Uy ishi ")
   
let name = prompt(' Ismingizni kiriting: ')
let birthYear= +prompt(' Tug`ilgan yilingizni kiriting: ')
let currentYear = +prompt(' Hozirgi yilni kiriting: ')

if(isNaN(birthYear) || birthYear == " "  ) {
    birthYear = +prompt(' son kiriting !!! ')

}else if(isNaN(birthYear) || currentYear == ''){
    alert('son kiritishingiz kerak !!!')

}else if(name===birthYear && name===currentYear) {

}
function iD(currentYear,birthYear)  {
    return currentYear - birthYear
}
console.log('Sizning ismingiz ' + name )
console.log( iD (  currentYear,birthYear ) + "yoshdasiz" )

