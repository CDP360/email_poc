const router = require("express").Router();
const ChatRoom = require("../models/ChatRoom");
const User = require("../models/User");
const Product = require("../models/Product");
const messageService = require("../services/messageService");
// mail client
let nodemailer = require("nodemailer");
// mail setup .env variable
const fromMail = "vinoth@cdp360.com";
const pss = "89E4557162E4281FD373B4C0D7F79F70FB04";

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

// mail setup
let transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: fromMail,
    pass: pss,
  },
});

router.post("/emailsent", async (req, res) => {
  let mailOptions = {
    from: fromMail,
    to: req.query.email_id,
    subject: "Mail from CDP360",
    html: req.body.data,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(400).json({ message: "Invaild Email " + error });
    } else {
      if (info.response) {
        return res.status(201).json(info.response);
      }
    }
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
      if (element.wishedProducts.length != 0) {
        for (const key in element.wishedProducts) {
          let itemFound = await Product.findOne({
            _id: element.wishedProducts[key],
          }).select("_id title price image active");

          idadd.push(itemFound);
        }
        list.push(idadd);
      }
    }
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
