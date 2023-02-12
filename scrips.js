const btn_log=document.getElementById("btn_login")
const content=document.getElementsByClassName("content")[0]
const formlogin=document.getElementsByClassName("formlogin")[0]
const btn_submit=document.getElementById("btn_submit")
const ip_email=document.getElementById("email")
const ip_password=document.getElementById("password")
const btn_addcart=document.getElementsByClassName("addcart")
const shop=document.getElementsByClassName("shop")[0]
const number_add=document.getElementById("number_add")
const body_cart=document.getElementsByClassName("body_cart")[0]

if(localStorage.getItem("number_add")){
    number_add.innerHTML=localStorage.getItem("number_add");
}

formlogin.style.display="none"

btn_log.addEventListener("click",()=>{
    content.style.display = "none";
    formlogin.style.display="block"
    
})
if (btn_submit){
    btn_submit.addEventListener("click",()=>{
        localStorage.setItem("email",ip_email.value)
        localStorage.setItem("password",ip_password.value)
        content.style.display = "block";
        formlogin.style.display="none"
        alert(localStorage.getItem("email"))
    })
}

shop.addEventListener("click",()=>{

    body_cart.innerHTML=localStorage.getItem("body_cart")
})
for(var i=0;i< btn_addcart.length;i++){
   
   
    const src_img=btn_addcart[i].parentElement.childNodes[3].src
    const text=btn_addcart[i].parentElement.childNodes[5].innerHTML
    // const sell=btn_addcart[i].parentElement.childNodes[7].innerHTML
    const money=btn_addcart[i].parentElement.childNodes[7].childNodes[0].textContent.trim()
    const money1=btn_addcart[i].parentElement.childNodes[7].childNodes[1].innerHTML
    console.log(money1)
    btn_addcart[i].addEventListener("click",()=>{
       
        number_add.innerHTML=parseInt(number_add.innerHTML)+1;
        var body_content=localStorage.getItem("body_cart")
        var card_index=number_add.innerHTML
        body_content+=`
                    
                    <div class="card mb-3" style="max-width: 540px;" id="card-`+card_index+`">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="`+src_img +`" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Sản phẩm</h5>
                        <p class="card-text">`+text+`</p>
                        <p class="card-text">`+money+`<small class="text-muted"><span  style="text-decoration: line-through;">`+money1 +`</small></p>
                        <svg onclick="deletecart(`+card_index+`)"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                        </div>
                    </div>
                    </div>
                </div>
                </br>
            `
        localStorage.setItem("number_add",number_add.innerHTML)
        localStorage.setItem("body_cart",body_content)
        
    })
}

function deletecart(index){
    const cart_index=document.getElementById("card-"+index);
    cart_index.parentNode.removeChild(cart_index);
    let content_cart=localStorage.getItem("body_cart").split("</br>")
    var new_cart=""
    content_cart.forEach((text)=>{
        if(!text.includes('card-'+index)){
            new_cart+=text
        }
    })
    localStorage.setItem("body_cart",new_cart)
    number_add.innerHTML=parseInt(number_add.innerHTML)-1;
    localStorage.setItem("number_add",number_add.innerHTML)

}








