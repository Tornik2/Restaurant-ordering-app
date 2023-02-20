import {menuArray} from "/data.js"
const orderArray = []
document.addEventListener('click', function(e){
    if (e.target.dataset.button) {
        handleAddButton(e.target.dataset.button)
    }
    
})

function handleAddButton(itemId) {
    
    const itemToAdd = menuArray.filter(function (item){ 
        return item.id.toString() === itemId
})
orderArray.push(itemToAdd)
console.log(orderArray)
render()
} 


function getitSection() {
    
    let orderSection = ''
    
    orderArray.forEach(function(items){
    items.forEach(function(item){
        
        orderSection += `
                         <div class="order-list-div">
                                <h3 class="order-list">${item.name}</h3>
                                <button class="remove-button">remove</button>
                                <h3 class="item-price" id="item-price">${item.price}<h3>
                    </div>`

    })
    return orderSection
    })
    return orderSection
    
    
    }
console.log(getitSection())


function getitforHtml() {
  
let menu = ''
 
menuArray.forEach(function(item){
    menu += `
        <div class="container">
            <div class="food-emoji">
            ${item.emoji}
            </div>
                <div class="description">
                    <p class="name">${item.name}</p>
                    <p class="ingredient">${item.ingredients}</p>
                    <p class="price">${item.price}</p>
                </div>
                        <div class="button-div">
                        <button class="add-button" data-button="${item.id}">+</button>
                        </div>
        </div>
    `
    
})
return menu
}

function render() {
     
    document.querySelector('main').innerHTML = getitforHtml()
    document.getElementById('to-render').innerHTML = getitSection()
    
}

render()

/*`
                        <h3 class="your-order"> Your order </h3>
                    <div class="order-list-div">
                                <h3 class="order-list">ITEMS</h3>
                                <button class="remove-button">remove</button>
                                <h3 class="item-price" id="item-price">${item.price}<h3>
                    </div>
                            <div class="total-price-div">
                        <h3 class="total"> Total price </h3>
                        <h3 class="total-price">20</h3>
                            </div>
                            <div class="complete-div">
                                <button class="complete">Complete order</button>
                     </div>`
*/