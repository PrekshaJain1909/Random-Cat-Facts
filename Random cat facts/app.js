let button=document.querySelector("button");
let para=document.querySelector("#paragraph");
let imagee=document.querySelector("#image");
button.addEventListener('click',async()=>{
    try{
        let fact= await getFunction();
        para.innerText=fact.data.fact;
        para.classList.add("backg");
    }
    catch(e){
        console.log("Error ", e);
    }
    try{
        let im=await getImamge();
        imagee.setAttribute("src",im);
    }
    catch(e){
        console.log("Error ", e);
    }
});
let url="https://catfact.ninja/fact";
let url2="https://api.thecatapi.com/v1/images/search";
async function getFunction(){
  try{
    let res=await axios.get(url);
    return res;
  }
  catch(e){
   return "No Error Found";
  }
}
async function getImamge(){
 try{
    let res=await axios.get(url2);
    return res.data[0].url;
 }
 catch(e){
    return "Image Not Found";
 }
}