const { stripe } = require("stripe")("sk_test_51LcPq0SF67Jsqbd4ErruOj5w4ykXiTaeZiiBsevtZxcByDCBcnMWWCE5cY0bkhy9Qg0iwsbPWMzRqtyszhbMgq2i00Ar3CZU61")
const {v4:uuidv4} = require("uuid")
// Backendurl/public/videos/file_name.mp4
exports.payment = async (req, res) => {

//   const { token,subTotal,cartItems,currentUser} = req.body;
  
  console.log("hrllooooo",req.body)
//   try {
//     const customer = await stripe.customers.create({
//       email:token.email,
//       source:token.id,
//     });
//     const payment = await stripe.charges.create({
//         amount:subTotal*100,
//         currency:'inr',
//         customer:customer.id,
//         receipt_email:token.email
//       },{
//         idempotencyKey:uuidv4()

//       });
//       if(payment){
//         res.send("payment sucess")
//       }else{
//         res.send("payment failed")
//       }

//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
};
