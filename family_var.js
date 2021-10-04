const family = [

                ['Маша', 8], 
                ['Максим', 1], 
                ['Таня', 33],
                ['Вадим', 3]
];

/*function sortArray (family){
const family_sort = [];
family_sort = family.sort(1);
return family_sort;}

console.table(sortArray (family));*/



const sortFunction = (a, b) => {
  return (a[1] < b[1]) ? -1 : 1;
};
family.sort(sortFunction);

console.log(family);
