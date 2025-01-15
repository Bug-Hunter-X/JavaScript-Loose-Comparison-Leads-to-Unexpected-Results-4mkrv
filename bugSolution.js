function foo(x){
  if (x === null) {
    throw new Error("x cannot be null"); // Handle null appropriately
  }
  return x * 2; 
}