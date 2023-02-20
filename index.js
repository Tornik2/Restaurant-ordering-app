import {menuArray} from "/data.js"


const modal = document.getElementById('modal')
const submitBtn = document.getElementById('submit-button')
const completeBtn = document.getElementById('complete')
const closeModalBtn = document.getElementById('close-modal')

const orderSection = document.getElementById('order-section')
const orderConfirmed = document.getElementById('order-confirmed')

const inputName = document.getElementById('input-name')
const inputNumber = document.getElementById('input-number')
const inputCvv = document.getElementById('input-cvv')

let total = 0
let orderArray = []
const totalPrice = document.getElementById("total-price")




document.addEventListener('click', function(e){
    if (e.target.dataset.button) {
        handleAddButton(e.target.dataset.button)
        orderSection.style.display = 'block'
        orderConfirmed.style.display = 'none'
    } else if (e.target.dataset.remove) {
        handleRemoveButton(e.target.dataset.remove, e.target.dataset.index)
    } 
    
    
})

submitBtn.addEventListener('click', function(e){
   e.preventDefault()
   
   if(inputName.value && inputNumber.value && inputCvv.value){
       orderSection.style.display = 'none'
       modal.style.display = 'none'
       orderConfirmed.style.display = 'block'
       
       inputCvv.value = ''
       inputName.value = ''
       inputNumber.value = ''
       orderArray = []
       total = 0
   }
       
})



completeBtn.addEventListener('click', function(){
  modal.style.display = 'block'  
})

closeModalBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

function handleAddButton(itemId) {
   
    const itemToAdd = menuArray.filter(function (item){ 
        return item.id.toString() === itemId
})[0]

orderArray.push(itemToAdd)

total += itemToAdd.price

totalPrice.innerHTML = "$" + total

render()

} 

function handleRemoveButton(itemId, index) {
    const itemToRemove = menuArray.filter(function(item) {
        return itemId === item.id.toString()
    })[0]
    
    orderArray.splice(index, 1)
    
    
    
    total -= itemToRemove.price
    
    totalPrice.innerHTML = "$" +  total
    
    render()
    
    if (total === 0) {
        orderSection.style.display = 'none'
    }
    
}

function getOrderSection() {
    
    let orderSection = ''
    
    orderArray.forEach(function(item, index){
    
        
        orderSection += `
                         <div class="order-list-div">
                                <h3 class="order-list">${item.name}</h3>
                                <button class="remove-button" data-remove="${item.id}" data-index="${index}" >remove</button>
                                <h3 class="item-price" id="item-price">$${item.price}<h3>
                    </div>`

    })
    
    
    
    return orderSection
    
    
    }



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
                    <p class="price">$${item.price}</p>
                </div>
                        <div class="button-div">
                        <button class="add-button" data-button="${item.id}">+</button>
                        </div>
        </div>
    `
    
})
return menu
}

function getThanks() {
    let thanksText = ''
    
     thanksText = `
            <div class="thanks" id="thanks">
                <h5> Thanks, ${inputName.value}! Your order is on its way!</h5>
            </div>
     `
     
     return thanksText
}

function render() {
    
    document.querySelector('main').innerHTML = getitforHtml()
    document.getElementById('to-render').innerHTML = getOrderSection()
    orderConfirmed.innerHTML = getThanks()
    
    
}

render()

