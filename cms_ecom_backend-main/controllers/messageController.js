const router = require("express").Router();
const ChatRoom = require("../models/ChatRoom");
const User = require("../models/User");
const Product = require("../models/Product");
const messageService = require("../services/messageService");
// mail setup .env variable
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

router.post("/createChatRoom", async (req, res) => {
  const { message, receiver } = req.body;
  try {
    let chatRoom = await messageService.createChatRoom(req.user._id, receiver);
    await ChatRoom.updateOne(
      { _id: chatRoom._id },
      { $push: { conversation: { senderId: req.user._id, message } } }
    );
    res.status(200).json({ messageId: chatRoom._id });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getUserConversations", async (req, res) => {
  let allChats = await ChatRoom.find().populate("buyer").populate("seller");
  let userChats = allChats.filter(
    (x) => x.buyer._id == req.user._id || x.seller._id == req.user._id
  );
  let checkedChats = userChats.map((x) => ({
    chats: x,
    isBuyer: x.buyer._id == req.user._id,
    myId: req.user._id,
  }));
  res.status(200).json(checkedChats);
});

router.post("/sendMessage", async (req, res) => {
  const { chatId, message } = req.body;
  let chat = await ChatRoom.updateOne(
    { _id: chatId },
    { $push: { conversation: { senderId: req.user._id, message } } }
  );

  console.log(chat);
  res.status(200).json({ sender: req.user._id });
});

router.post("/emailsent", async (req, res) => {
  // Create sendEmail params
  var params = {
    Destination: {
      ToAddresses: [req.query.email_id],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: req.body.data,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "CDP360 - Product List",
      },
    },
    Source: "vimal@cdp360.com" /* required */,
    ReplyToAddresses: ["vimal@cdp360.com"],
  };
  // Set the region
  var sesConfig = {
    accessKeyId: "AKIASRFPN37OIWEVYFUP",
    secretAccessKey: "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",
    region: "ap-south-1",
  };
  // Create the promise and SES service object
  var SES = new AWS.SES(sesConfig);
  var sendPromise = SES.sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      console.log(data.MessageId);
      res.status(200).json({ sender: "mail sent id : " + data.MessageId });
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });

  //   res.status(200).json({ sender: "mail sent" });
});

router.get("/cartlist", async (req, res) => {
  try {
    var list = [];
    let userFound = await User.find();
    for (let index = 1; index < userFound.length; index++) {
      const element = userFound[index];
      console.log("key", index, element._id);
      var idadd = [
        {
          user_id: element._id,
          user_name: element.name,
          email: element.email,
          dp: element.avatar,
        },
      ];
      console.log("ccc", element.wishedProducts.length);
      // if (element.wishedProducts.length != 0) {
      for (const key in element.wishedProducts) {
        let itemFound = await Product.findOne({
          _id: element.wishedProducts[key],
        }).select("_id title price image active");

        idadd.push(itemFound);
      }
      list.push(idadd);
      // }
    }
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
