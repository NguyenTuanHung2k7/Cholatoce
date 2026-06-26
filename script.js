const cartIcon = document.querySelector(`.cart-icon`);
const cartContainer = document.querySelector(`.cart-container`);
const closeCart = document.querySelector(`.close-cart`);
const overlay = document.querySelector(`.overlay`);

//Trigger Cart
cartIcon.addEventListener(`click`,()=>{
    cartContainer.classList.add(`active`);
    overlay.style.width = `100%`;
})
//Close Cart
closeCart.addEventListener(`click`,()=>{
    cartContainer.classList.remove(`active`);
     overlay.style.width = `0%`;
});


shuffleProducts(products)
function shuffleProducts(prod) {
    // Tạo một bản sao của mảng để tránh thay đổi mảng gốc ban đầu
    let shuffled = [...prod]; 
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Chọn một chỉ số ngẫu nhiên từ 0 đến i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Hoán đổi vị trí (Destructuring assignment)
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


//Import Products
// import { products } from "./products.js";


//CART
const listHotStatus = document.querySelector(`.card-grid`);
const listOnSale = document.querySelector(`.card-grid.sale`);
const listofOther = document.querySelector(`.card-grid.other`);

// let myListCards = [];

let myListCards = localStorage.getItem(`myCart`) 
    ? JSON.parse(localStorage.getItem(`myCart`))
    : [];

function renderCard(){
    if (!listHotStatus || !listOnSale || !listofOther) return;
    if (!products || products.length === 0) return;

    listofOther.innerHTML = '';

    const popular = products.filter(items => items.status == `hot`).slice(1);
    const onSale = products.filter(items => items.status == `onSale`).slice(0,4);
    const otherProd = products.filter(items => items.status != `hot` && items.status != `onSale`);

    const shuffleOnOtherList = shuffleProducts(otherProd);
    // const finalShuffleList = shuffleOnOtherList;

    
    popular.forEach((prod, key) =>{
        let card = document.createElement(`div`);

        card.innerHTML = `
        <div class="card seller">
            <div class="product-img">
                <img src="${prod.img}" alt="">
             </div>
            <label for="">${prod.name}</label>
            <p>$${prod.price.toLocaleString()}</p>
            <button onclick="addtoCart(${prod.id})">Add to cart <span><i class="fa-solid fa-bag-shopping"></i></span></button>
        </div>
        `;
        listHotStatus.appendChild(card);
    });

    onSale.forEach((prod,key)=> {
        let card = document.createElement(`div`);
        card.innerHTML = `
        <div class="card sale">
            <div class="discount-wrapper">-${prod.salePercentage}%</div>
            <div class="product-img">
                <img src="${prod.img}" alt="">
            </div>
            <label for="">${prod.name}</label>
            <p>$${prod.salePrice} <span>$${prod.price}</span></p>
            <button onclick="addtoCart(${prod.id})">Add to cart <span><i class="fa-solid fa-bag-shopping"></i></span></button>
        </div>
        `;
        listOnSale.appendChild(card);
    });

    shuffleOnOtherList.slice(0,4).forEach((prod,key)=>{
        let card = document.createElement(`div`);
        card.innerHTML = `
        <div class="card seller">
            <div class="product-img">
                <img src="${prod.img}" alt="">
             </div>
            <label for="">${prod.name}</label>
            <p>$${prod.price.toLocaleString()}</p>
            <button onclick="addtoCart(${prod.id})">Add to cart <span><i class="fa-solid fa-bag-shopping"></i></span></button>
        </div>
        `;
        listofOther.appendChild(card);
    });
}

const quantityDisplay = document.querySelector(`.quantity span`);
const cartListContainer = document.querySelector(`.cart-list-container`);
const totalPrice = document.querySelector(`.overall`);
const cartcount = document.querySelector(`.cartcount`);

function addtoCart(id){
    // if(myListCards[key] == null){
    //     myListCards[key] = products[key];
    //     myListCards[key].quantity = 1;
    // };
    const findCurrentId = products.find(prod => prod.id === id);
    const existingItem = myListCards.find(prod => prod.id === id);

    if(existingItem){
        existingItem.quantity += 1;
    }
    else{
        myListCards.push({...findCurrentId, quantity:1});
    }
    reloadCard();
    alert(`Added!`);
}

function reloadCard(){

    if(!cartListContainer) return;

    cartListContainer.innerHTML = ``;
    let count = 0;
    let total = 0;
    
    myListCards.forEach((prod,key)=>{
        const unitPrice = prod.status === `onSale` ? prod.salePrice : prod.price;
        total += unitPrice * prod.quantity;
        count += prod.quantity;

        let list = document.createElement(`li`);
        list.innerHTML = `
            <div class="item-info">
                <div class="item-img">
                    <img src="${prod.img}" alt="">
                </div>
                <label for="">${prod.name}</label>
                
            </div>
            <div class="right-info">
                <div class="quantity">
                    <button class="minus"><i class="fa-solid fa-minus"></i></button>
                    <p>${prod.quantity}</p>
                    <button class="plus"><i class="fa-solid fa-plus"></i></button>
                    <span>$${(unitPrice * prod.quantity).toLocaleString()}</span>
                </div>
                    <button class="remove-list"><i class="fa-solid fa-trash"></i></button>
            </div>

        `;
        cartListContainer.appendChild(list);

        //Delete list 
        const removeItem = list.querySelector(`.remove-list`);
            removeItem.addEventListener(`click`, ()=>{
            myListCards = myListCards.filter(item => item.id != prod.id);
            reloadCard();
        });

        //
        const SubItem = list.querySelector(`.minus`);
        SubItem.addEventListener(`click`, ()=>{
            if(prod.quantity > 1){
                prod.quantity -= 1;
            }
            else{
                myListCards = myListCards.filter(item => item.id !== prod.id);
            };
            reloadCard();
        });

        const plusItem = list.querySelector(`.plus`);
        plusItem.addEventListener(`click`, ()=>{
            prod.quantity += 1;
            reloadCard();
        })
    });
    //Update count
    if(quantityDisplay) quantityDisplay.textContent = `${count}`;
    if(totalPrice)  totalPrice.textContent = `$`+ total.toLocaleString() ;
    if(cartcount)  cartcount.innerHTML = count;
   
    saveMyCart();
};

renderCard();
reloadCard();
//SAVE to Local Storage
function saveMyCart(){
    localStorage.setItem(`myCart`,JSON.stringify(myListCards));
};





//IMAGE SLIDER
let indexValue = 1;
const contentSlider = document.querySelector(`.img-slider .content`);
const img_Slider = document.querySelector(`.img-slider`);

function showImg(e){
    if(!img_Slider || !contentSlider) return;

    const slide = document.querySelectorAll(`.content .slide`);
    const bullets = document.querySelectorAll(`.bullets-slider span`);
    if(e > slide.length) indexValue = 1;
    if(e < 1) indexValue = slide.length;

    if(slide.length === 0) return;

    bullets.forEach(bullet => bullet.classList.remove(`active`));
    bullets[indexValue - 1].classList.add(`active`);
     contentSlider.style.transform = `translateX(-${(indexValue -1)*100}%)`;
}

function initSlide(){
    isAutoSlide = setInterval(() => {
        showImg(++indexValue);
    }, 6000);
  
};
showImg(indexValue);
initSlide();

// const imgWrapper = document.querySelector(`.img-slider`);
// imgWrapper.addEventListener(`mouseover`,()=>{
//     clearInterval(isAutoSlide);
// })
// imgWrapper.addEventListener(`mouseleave`,()=>{
//     initSlide();
// })

//next btn

const nextBtn = document.querySelector(`.right`);
if(nextBtn){
    nextBtn.addEventListener(`click`,()=>{
    clearInterval(isAutoSlide);
    showImg(indexValue  += 1) ;
    initSlide();
});
}

//prevbtn
const prevBtn = document.querySelector(`.left`);
if(prevBtn){
    prevBtn.addEventListener(`click`,()=>{
    clearInterval(isAutoSlide);
    showImg(indexValue -= 1);
    initSlide();
});
}

//Bullet event
const bulletsSlider = document.querySelectorAll(`.bullets-slider span`);
if(bulletsSlider){
    bulletsSlider.forEach((bullet, index) =>{
    bullet.addEventListener(`click`,()=>{
        clearInterval(isAutoSlide);
        showImg(indexValue = index +1);
        initSlide();
    });
});
}




// LOGIN FORM
const loginBtn = document.querySelector(`.login-btn`);
const closeFormBtn = document.querySelector(`.close-form`);
const overlayofLoginForm = document.querySelector(`.overlay2`);



const registerLink = document.querySelector(`.register-`);
const linkToLogin = document.querySelector(`.login-`);
const formSection = document.querySelector(`.form-section`);
const sectionForm = document.querySelector(`.form-section section`);

registerLink.addEventListener(`click`,()=>{
    sectionForm.classList.add(`active`);
    formSection.classList.add(`extended`);
});

linkToLogin.addEventListener(`click`,()=>{
    sectionForm.classList.remove(`active`);
    formSection.classList.remove(`extended`);
});


//Trigger login form
loginBtn.addEventListener(`click`,()=>{
    formSection.classList.add(`active`);
    overlayofLoginForm.classList.add(`active`);

    document.body.style.overflow = `hidden`;
});

closeFormBtn.addEventListener(`click`,()=>{
    // sectionForm.classList.remove(`active`);
    // formSection.classList.remove(`extended`);
    formSection.classList.remove(`active`);
    overlayofLoginForm.classList.remove(`active`);
     document.body.style.overflow = ``;
    setTimeout(() => {
        sectionForm.classList.remove(`active`);
        formSection.classList.remove(`extended`);
    }, 1000);
});


shuffleProducts(products)
function shuffleProducts(prod) {
    // Tạo một bản sao của mảng để tránh thay đổi mảng gốc ban đầu
    let shuffled = [...prod]; 
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Chọn một chỉ số ngẫu nhiên từ 0 đến i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Hoán đổi vị trí (Destructuring assignment)
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}




