var selam1 = 'bu benim selamlamam'  //bu bir STRING

var sayi = 9
var sayi2 = 3       //bunlar bir NUMBER
var hesap =sayi * sayi2

var counter = 0
var c = document.getElementById('counter')

var b=document.getElementById('baslik')
console.log(b)
b.innerHTML='selam'
console.log(b)
b.append('123')
b.append(selam1 + (sayi + sayi2))
setInterval(()=>{
   counter = counter + 1
    c.innerHTML = counter
},1000)

setTimeout(()=>{
    window.location.href = 'https://www.formula1.com/'

},7000)

