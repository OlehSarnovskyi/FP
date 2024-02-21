function calcTotal(quantity, price) {
    const discount = getDiscount(quantity)
    return (quantity * price) - discount
}

function getDiscount(quantity) {
  return quantity > 10 ? 10 : 0
}

const totalPrice = calcTotal(15, 5)

console.log(totalPrice)
