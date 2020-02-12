function loopyLighthouse([start, end], [num1, num2],[word1, word2]){
  for(let i = start; i <= end; i++){
    if(i % num1 ===  0 && i % num2 === 0){
      console.log(word1 + word2);
    } else if(i % num1 === 0){
      console.log(word1);
    } else if(i % num2 === 0){
      console.log(word2);
    } else {
      console.log(i)
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]))