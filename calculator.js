let store=""
// let ans=""
let pressed=(value)=>{
    let show=document.querySelector("#display")
    store=store+value;
    show.innerHTML=store
}

let equall=()=>{
    let show=document.querySelector("#display")

    show.innerHTML=eval(store)
    store=eval(store)
    // eval is used to perform all the arithmetic operations
    
}
let del=()=>{
    let show=document.querySelector("#display");
    store=store.slice(0,-1);
    show.innerHTML=store;
}
let ac=()=>{
    store=""
    let show=document.querySelector("#display");
    show.innerHTML=store;

}
let sq=()=>{
   
    let show=document.querySelector("#display");
    store=store*store;
    show.innerHTML=store;

}