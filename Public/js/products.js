let product=document.querySelectorAll('#product_option>img');

for(let i=0;i<product.length;i++){

    product[i].addEventListener('click',()=>{
        if(i===0){
            document.querySelector('#product_display>img').src="/images/products/yellowc.jpg";
            document.querySelector('body').style.backgroundColor="#f9c702";
        }

        if(i===1){
            document.querySelector('#product_display>img').src="/images/products/blackc.jpg";
            document.querySelector('body').style.backgroundColor="black";
        }
        
        if(i===2){
            document.querySelector('#product_display>img').src="/images/products/pinkc.jpg";
            document.querySelector('body').style.backgroundColor="#cfcdbf";
        }
    })
}