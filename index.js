// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function Arrayfunctions(){
    cats.length = [0];
    cats.push ('Milo', 'Otis', 'Garfield');
}
//console.log (Arrayfunctions(cats));
function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    let newNames = [...cats,'Broom'];
    return newNames;
}
function prependCat(){
    let name = ['Arnold', ...cats];
    return name;
}
function removeLastCat(){
  let remove = cats.slice(0,cats.length-1);
  return remove;
}
function removeFirstCat(){
    let removeFirst = cats.slice(1);
    return removeFirst;
}

    
