let products = fetch('https://fakestoreapi.com/products');
let container = document.querySelector('main');
let imgDiv = document.querySelector('.img-div');


products.then((data)=>{
  return data.json()
})

.then((data)=>{
  let errorDiv = document.querySelector('.error')
  errorDiv.style.display = 'none';

  data.map((item)=>{        
  let theproduct =  
    `<div class="product">
      <div class="img-div">
        <img src="${item.image}" alt="">
        <div class="hover-info">
          <button>$${item.price}</button>
          <button class="add-btn">Add To Cart</button>
        </div>
      </div>
      <div class="txt-div">
      <span data-product-description="${item.description}"> ${item.title} </span>
      <button class="moreinfo"> More Info <i class="fa-solid fa-arrow-up" style="color: black;"></i> </button>    
      </div>
    </div>`
                    
      container.innerHTML += theproduct
        
let item2 = document.querySelectorAll('.product');
let hoverInfo = document.querySelectorAll('.hover-info');
let txtDiv = document.querySelectorAll('.txt-div');
let moreinfo = document.querySelectorAll('.moreinfo');

item2.forEach((element)=>{
  element.children[0].addEventListener('mouseover',()=>{
    element.children[0].children[1].style.display = 'flex';
  });

  element.children[0].addEventListener('mouseout',()=>{
    element.children[0].children[1].style.display = 'none';
  });
});

txtDiv.forEach((element)=>{
  element.addEventListener('mouseover',()=>{
    element.children[0].style.display = 'none'
    element.children[1].style.display = 'block';
  });
  element.addEventListener('mouseout',()=>{
    element.children[1].style.display = 'none';
    element.children[0].style.display = 'block'
  });


  
let modal = document.querySelector('.modal');
let imgdiv2 = document.querySelector('.img-div2');
let txtdiv2 = document.querySelector('.txt-div2 p');
let cancel = document.querySelector('.modal i');
let overlay = document.querySelector('.overlay');

let item3 = document.querySelectorAll('.product');

  element.children[1].addEventListener('click',()=>{
    let picUrl = element.children[1].parentElement.parentElement.children[0].children[0].src;
    overlay.style.display = 'flex';
    imgdiv2.children[0].src = picUrl;
    
    cancel.addEventListener('click',()=>{
        overlay.style.display = 'none';
    });
  })
});
})

}).catch((error)=>{
  console.log('Error Message: ' + error);
  let errorDiv = document.querySelector('.error')
  errorDiv.style.display = 'flex';
  errorDiv.children[0].innerHTML = 'No Internet Connection...'
})