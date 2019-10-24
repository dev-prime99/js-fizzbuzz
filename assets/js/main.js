
var appoggio, i;

i = 1;

var num = [];

while (i < 101) {
  // console.log(i);
  if ((i % 5 == 0) && (i % 3 == 0)){
    //console.log("FrizzBuzz");
    appoggio = num.push("FrizzBuzz");
  } else if (i % 5 == 0){
    //console.log("Buzz");
    appoggio = num.push("Buzz");
  } else if (i % 3 == 0){
    //console.log("Frizz")
    appoggio = num.push("Frizz");
  } else{
    //console.log(i);
    appoggio = num.push(i);
  }
  i++;
}

appoggio = num.join('</br>');
document.getElementById('list').innerHTML = appoggio;
