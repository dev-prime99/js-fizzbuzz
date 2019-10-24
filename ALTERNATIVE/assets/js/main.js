

for (var i = 1; i < 51; i++) {
  // console.log(i);
  if ((i % 5 == 0) && (i % 3 == 0)){
    //console.log("FrizzBuzz");
    document.getElementById('list').innerHTML += "<li>" + 'FrizzBuzz' + "</li>";
  } else if (i % 5 == 0){
    //console.log("Buzz");
    document.getElementById('list').innerHTML += "<li>" + 'Buzz' + "</li>";
  } else if (i % 3 == 0){
    //console.log("Frizz")
    document.getElementById('list').innerHTML += "<li>" + 'Frizz' + "</li>";
  } else{
    //console.log(i);
    document.getElementById('list').innerHTML += "<li>" + i + "</li>";
  }
}


for (var ii = 51; ii < 101; ii++) {
  // console.log(i);
  if ((ii % 5 == 0) && (ii % 3 == 0)){
    //console.log("FrizzBuzz");
    document.getElementById('list2').innerHTML += "<li>" + 'FrizzBuzz' + "</li>";
  } else if (ii % 5 == 0){
    //console.log("Buzz");
    document.getElementById('list2').innerHTML += "<li>" + 'Buzz' + "</li>";
  } else if (ii % 3 == 0){
    //console.log("Frizz")
    document.getElementById('list2').innerHTML += "<li>" + 'Frizz' + "</li>";
  } else{
    //console.log(i);
    document.getElementById('list2').innerHTML += "<li>" + ii + "</li>";
  }
}
