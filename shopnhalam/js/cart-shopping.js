let product = [
    {
        chiso: 0,
        tag : "sp1",
        name: "Kone XP Air",
        price: 219,
        incart: 0,
        imagine : "../img/img_product/mouse/1b.png",
        linked: "../html/product.html",       
    },
    {   
        chiso: 1,
        tag : "sp2",
        name: "Burst Pro",
        price: 79,
        incart: 0,
        imagine : "../img/img_product/mouse/2b.png",
        linked: "../html/product.html",
        
    },
    {   
        chiso: 2,
        tag : "sp3",
        name: "Kone Pro Air",
        price: 129,
        incart: 0,
        imagine : "../img/img_product/mouse/3b.png",
        linked: "../html/product.html",
    },
    {
        chiso: 3,
        tag : "sp4",
        name: "Kone Pro",
        price: 69,
        incart: 0,
        imagine : "../img/img_product/mouse/4b.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 4,
        tag : "sp5",
        name: "Kone Pure ULtra",
        price: 79,
        incart: 0,
        imagine : "../img/img_product/mouse/5b.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 5,
        tag : "sp6",
        name: "Kone XP",
        price: 99,
        incart: 0,
        imagine : "../img/img_product/mouse/6b.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 6,
        tag : "sp7",
        name: "Syn Max Air",
        price: 319,
        incart: 0,
        imagine : "../img/img_product/headsets/1.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 7,
        tag : "sp8",
        name: "Elo 7.1 Air",
        price: 99,
        incart: 0,
        imagine : "../img/img_product/headsets/2.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 8,
        tag : "sp9",
        name: "Syn Buds Air",
        price: 139,
        incart: 0,
        imagine : "../img/img_product/headsets/3.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 9,
        tag : "sp10",
        name: "Elo 7.1 USB",
        price: 199,
        incart: 0,
        imagine : "../img/img_product/headsets/4.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 10,
        tag : "sp11",
        name: "Elo X Stereo",
        price: 69,
        incart: 0,
        imagine : "../img/img_product/headsets/5.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 11,
        tag : "sp12",
        name: "Syn Pro Air",
        price: 69,
        incart: 0,
        imagine : "../img/img_product/headsets/6.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 12,
        tag : "sp13",
        name: "Vulcan II Max",
        price: 299,
        incart: 0,
        imagine : "../img/img_product/keyboard/1w.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 13,
        tag : "sp14",
        name: "Magma",
        price: 79,
        incart: 0,
        imagine : "../img/img_product/keyboard/2.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 14,
        tag : "sp15",
        name: "Pyro",
        price: 99,
        incart: 0,
        imagine : "../img/img_product/keyboard/3.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 15,
        tag : "sp16",
        name: "Vulcan Pro",
        price: 149,
        incart: 0,
        imagine : "../img/img_product/keyboard/4.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 16,
        tag : "sp17",
        name: "Vulcan TKL Pro",
        price: 209,
        incart: 0,
        imagine : "../img/img_product/keyboard/5.png",
        linked: "../html/product.html",       
    },
    {
        chiso: 17,
        tag : "sp18",
        name: "Vulcan 120 AIMO",
        price: 139,
        incart: 0,
        imagine : "../img/img_product/keyboard/6.png",
        linked: "../html/product.html",       
    },
]; //du lieu cua san pham
 

function select(index){//index de phan biet san pham thu i (0<=i<n);
    var x=localStorage.getItem('notice');
    x++;
    localStorage.setItem('notice',x);

    let cart_item = localStorage.getItem('p_incart');
    cart_item = JSON.parse(cart_item);
    if(cart_item != null){
        if(cart_item[product[index].tag] == undefined){
            cart_item={
                ...cart_item,
                [product[index].tag]: product[index]
            }
        }
        cart_item[product[index].tag].incart+=1;
    }else{
        product[index].incart=1;
        cart_item={
            [product[index].tag]: product[index]
        }
    }   
    localStorage.setItem('p_incart',JSON.stringify(cart_item));
    totalcost(index,1);
    onloadCartNumber();
    displaycart();
}

function totalcost(index,nums){//tính tổng giá tiền
    let totalcost = localStorage.getItem('total');
    if(totalcost != null){
        totalcost=parseInt(totalcost);/*sua day*/
        localStorage.setItem('total',totalcost+nums*product[index].price);
    } else {
        localStorage.setItem('total',nums*product[index].price);
    }
}
function unselect(index){//xóa một phần tử ra khỏi giở
    let cart_item = localStorage.getItem('p_incart');
    let flag=0;
    cart_item = JSON.parse(cart_item);
    if(cart_item[product[index].tag].incart>0){
        cart_item[product[index].tag].incart-=1;
        if(cart_item[product[index].tag].incart==0) flag=1;;
        localStorage.setItem('p_incart',JSON.stringify(cart_item));
        var x=localStorage.getItem('notice');
        if(x>0) x--;
        else x=0;
        localStorage.setItem('notice',x);
        totalcost(index,-1);
    }
    onloadCartNumber();
    displaycart();
    if(flag==1) location.reload();
}

function remove(index){//xóa một mặt hàng ra khỏi giỏ hàng
    let cart_item = localStorage.getItem('p_incart');
    cart_item = JSON.parse(cart_item);
    totalcost(index,-cart_item[product[index].tag].incart)
    var x=localStorage.getItem('notice');
    x-=cart_item[product[index].tag].incart;
    localStorage.setItem('notice',x);
    cart_item[product[index].tag].incart=0;
    localStorage.setItem('p_incart',JSON.stringify(cart_item));
    onloadCartNumber();
    displaycart();
    location.reload();
}


function displaycart(){//hiện thông tin những sản phẩm trong giỏ hàng 
    let cart_item = localStorage.getItem("p_incart");
    cart_item = JSON.parse(cart_item);
    let productcontainer = document.querySelector(".product-in-cart");
    let dis_cost=document.querySelector('.payment');
    let pay=localStorage.getItem('total');
    if(cart_item && productcontainer){
        productcontainer.innerHTML ='';
        Object.values(cart_item).map(item =>{
            if(item.incart>0){
                productcontainer.innerHTML +=`
            <div class="display-p">
                <div class="name-product">
                    <button class="cart_but" onclick="remove(${item.chiso})">x</button>
                    <a href="${item.linked}"><img src="${item.imagine}"></a>
                    <h4><a href="${item.linked}">${item.name}</a></h4>
                </div>
                <div class="price-product">
                    <span class="price"><span id="unit">$</span>${item.price}</span>
                </div>
                
                <div class="quanlity-product">
                    <span>
                        <button class="cart_but" onclick="unselect(${item.chiso})">-</button>
                            ${item.incart}
                        <button class="cart_but" onclick="select(${item.chiso})")>+</button>
                    </span>
                </div>
                
                <div class="price-total">
                    <span class="price"><span id="unit">$</span>${item.price*item.incart}</span>
                </div>
            </div>
            `;
            }
        });
        
    }
    if(pay !=0 && pay!=null && productcontainer){
        dis_cost.innerHTML= `
        <h1>TỔNG TIỀN</h1>
        <h2><span id="unit">$</span>${pay}</h2>
        <button class="pay" onclick="payment(false)">THANH TOÁN</button>
    `;
    }
    if(pay !=0 && pay!=null && productcontainer==null){
        dis_cost.innerHTML= `
        <h1>TỔNG TIỀN</h1>
        <h2><span id="unit">$</span>${pay}</h2>
        <button class="pay" onclick="payment(true)">THANH TOÁN</button>
    `;
    }
}

function payment(trans){//chon thuc hien phan thanh toan
    if(trans){
        localStorage.removeItem('total');
        localStorage.removeItem('p_incart');
        localStorage.removeItem('notice');
        alert('THANH TOÁN THÀNH CÔNG');
        location.replace("./index.html");
    }
    else location.replace("./payment.html")
    displaycart();
}
function onloadCartNumber(){//hiện thông báo đã thêm bao nhiêu sản phẩm trong giỏ hàng
    var x=localStorage.getItem('notice');
    if(x){//neu ko trong thi hien so hien tai
        document.querySelector('span#note_cart').textContent = x;
    }
    else document.querySelector('span#note_cart').textContent = 0;//trong thi hien 0;
}

displaycart();
onloadCartNumber();