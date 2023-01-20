//Question 1:

let a=[{"name":"abc","dept":"B.com"},{"name":"xyz","dept":"B.E"}];

//for loop
for (let i=0;i<a.length;i++){
    console.log(a[i].name+" "+a[i].dept);
   
}

// for in
for(var key in a){
    
console.log(key,a[key].name+" "+a[key].dept);

}

//for each
a.forEach(ele=>{
    console.log(ele.name+" "+ele.dept); 
});

// for of
for (const el of a) {
  console.log(el.name+" "+el.dept);
}