let obj1={ name : "PERSON1" , age : 5};
let obj2={age : 5 , name : "PERSON1"};
const a=function(obj1,obj2){
    let p1=Object.keys(obj1);
    if(p1.length===Object.keys(obj2).length)
    {
        return p1.every(keys=>obj2.hasOwnProperty(keys)&&obj2[keys]==obj1[keys]);
    }
    return ;
}
console.log(a(obj1,obj2));