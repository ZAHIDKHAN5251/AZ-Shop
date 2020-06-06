let carts = document.querySelectorAll('.add-cart');

let products =[
    {
        name: "Best Bridal Foundation";
        tag: "BestBridalFoundation";
        price: 15000 ;
        Incart: 0;    
    },
    {
        name: "Best Bridal Highlighter";
        tag: "BestBridalHighlighter";
        price: 15000 ;
        Incart: 0;    
    },
    {
        name: "Best Bridal Blush";
        tag: "BestBridalBlush";
        price: 15000 ;
        Incart: 0;    
    },
    {
        name: "Best Bridal Lip Liner";
        tag: "BestBridalLipLiner";
        price: 15000 ;
        Incart: 0;    
    },
    {
        name: "Best Bridal Lipstick";
        tag: "BestBridalLipstick";
        price: 15000 ;
        Incart: 0;    
    }
]

for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}
function onloadcartNumbers(){
    let productNumbers = localStorage.getItem('cartnumbers');
    
    if(productNumbers){
         document.querySelector('.icon-area span').textContent = productNumbers;
    }
}

function cartNumbers(){
   let productNumbers = localStorage.getItem('cartnumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.icon-area span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.icon-area span').textContent = 1;
    }
}
onloadcartNumbers();





