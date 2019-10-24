



for (var i = 1; i < 101; i++) {
  // console.log(i);
  if ((i % 5 == 0) && (i % 3 == 0)){
    console.log("FRIZZBUZZ");
  } else if (i % 5 == 0){
    console.log("Buzz");
  } else if (i % 3 == 0){
    console.log("frizz")
  } else{
    console.log(i);
  }
}
