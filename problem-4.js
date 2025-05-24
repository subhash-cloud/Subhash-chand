let res={};
let arr= [1,2,8,9,12,46,76,82,15,20,30]
for(let i=1;i<=9;i++){
  res[i]=arr.filter(num => num % i === 0).length;
}
console.log(res)