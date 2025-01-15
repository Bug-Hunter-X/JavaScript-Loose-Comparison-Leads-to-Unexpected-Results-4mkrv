function foo(x){
  if (x == null) {
    return 0; //This is a common mistake.  It should be x === null
  }
  return x * 2; 
}