// Exercise 1: Minimum

function showMin (a,b) {
  let min = Math.min(a,b)
  return min;
}

// Exercise 2: Recursion

const isEven = function(n) {
  if (n % 2 == 0)
  {
    return true;
  }
  else if (n < 0) {
    return "??"
  }
  else {
    return false;
  }
}

// Exercise 3: Bean counting

function countBs(value, string = "B") {
  let noofchar = String(value).length;
  let count = 0;
  for (i=0; i<noofchar; i++) {
    if(value[i] == string) {
      count ++;
    }
  }
  return count;
}

function countChar(value, string) {
  let noofchar = String(value).length;
  let count = 0;
  for (i=0; i<noofchar; i++) {
    if(value[i] == string) {
      count ++;
    }
  }
  return count;
}
