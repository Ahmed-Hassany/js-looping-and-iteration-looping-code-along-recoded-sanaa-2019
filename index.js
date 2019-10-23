// Code your solutions in this file
function writeCards(names,e)
{
  var arr=[];
  for(let i=0;i<names.length;i++)
  {
    arr[i]=`Thank you, ${names[i]} for the wonderful ${e} gift!`;
  }
  return arr;
}
