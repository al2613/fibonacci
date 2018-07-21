// algorithm 1 - iteration using a for loop
// time complexity = O(n)
// time complexity grows as n increases
var fibonacci = (num)=>{
  var previous_first = 0, previous_second = 1, next=1;

  if (num<=2)
    return 1;
  }

  else {
    for (var i = 2; i <= num; i++){
      next = previous_first + previous_second;
      previous_first = previous_second;
      previous_second = next;
    }
  }
  return next;
}

// uncomment to test: console.log(fibonacci(4));

// algorithm 2 - recursion
// time complexity O(n^2) - not the fastest algorithm as it takes exponential
// time to go through the recursion tree and calculate t(n-1) & t(n-2)
// each recursive call contributes two new recursive calls
// this algorithm works well when n is small but performance will degrade as n increases
// as the recursive calls repeat the same work

var fibonacci = (num)=>{
  if (num <= 2){
    return 1;
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
// uncomment to test: console.log(fibonacci(4));

// algorithm 3 - optimizing recursion method using memoization if we're going to call the
// same function multiple times. We can essentially cache previous results
// if the data exists, we can simply return the value without executin the entire function
// demonstration of using cache to make runtime close to O(n) which is faster

var cache = {};
var sum;

var fibonacci = (num)=>{
  if (num <= 2){
    return 1;
  }
  else{
    if (num in cache){
      return sum = cache[num];
    }

    sum = fibonacci(num-1) + fibonacci(num-2);
    cache[num]= sum;
  }
  return sum;
}
// uncomment to test: console.log(fibonacci(4));
