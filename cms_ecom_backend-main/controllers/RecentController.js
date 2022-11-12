const ChatRoom = require("../models/ChatRoom");
const User = require("../models/User");
const Product = require("../models/Product");
const messageService = require("../services/messageService");
// mail client
const Unknow = require("../models/Unknow");

exports.recent = async (req, res) => {
  try {
  console.log(req.body.user_id);
  const userFound = await Unknow.findOne({_id:req.body.user_id});
  console.log(userFound.recentViewed);
  // userFound.recentViewed.hpus(req.body.product_id);
  userFound.recentViewed.push(req.body.product_id)
  const userSave = await userFound.save()
  return res.status(201).json(userSave);
  }catch (err) {
    console.log(err);
  }
};
exports.recentlist = async (req, res) => {
  try {
    var list = [];
    let userFound = await Unknow.findOne({_id:req.body.user_id});
     
    for (const key in userFound.recentViewed) { 
      const element = userFound.recentViewed[key];
      // console.log("iii",element);   
      try{
      const productFound = await Product.findById(element).select("_id title category image active")
      list.push(productFound);
      }catch{
        continue
      }    
    } 
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
};

// router.post("/viewlist", async (req, res) => {
//   try {
//     var list = [];
//     let userFound = await User.find();
//     for (let index = 1; index < userFound.length; index++) {
//       const element = userFound[index];
//       // console.log("key", index, element._id);
//       var idadd = [
//         {
//           user_id: element._id,
//           user_name: element.name,
//           email: element.email,
//           dp: element.avatar,
//         },
//       ];
//       // console.log("ccc", element.wishedProducts.length);
//       // if (element.wishedProducts.length != 0) {
//       for (const key in element.wishedProducts) {
//         let itemFound = await Product.findOne({
//           _id: element.wishedProducts[key],
//         }).select("_id title price image active");

//         idadd.push(itemFound);
//       }
//       list.push(idadd);
//       // }
//     }
//     res.status(200).json(list);
//   } catch (err) {
//     console.log(err);
//   }
// });
