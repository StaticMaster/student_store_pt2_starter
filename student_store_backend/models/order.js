const db = require("../db")
const {BadRequestError, NotFoundError} = require ("../utils/errors")

class Order {
static async listOrdersForUser ({list,order}){
const listOrder = await db.query(
  `SELECT o.id , o.customer_id, od.quantity, p.name,p.price
    FROM orders,orders_details, products
    JOIN orders_details 
    `
)
}



static async createOrder({order,user}) {

    const userOrder = await db.query(
        `INSERT INTO users (customer_id)
         VALUES ($1)
         RETURNING  customer_id;`, [user.id]
    )
    for(let i=0; i<orders.shoppingCart.length; i++) {
   await db.query (
   `INSERT INTO order_details(order_id,product_id,quantity)
    VALUES ($1,$2,$3,$4)  
    RETURNING order_id, product_id, quantity;`,[order.id, product.id, quantity.id]
   )

    }
}

}


module.exports = Order