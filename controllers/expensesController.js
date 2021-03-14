const session = require('express-session');
const Expense = require('../models/expenseModel.js');


const add = (req, res) => {
  let sess = req.session;

  const {date,title,shop,type,price} = req.body;

  const expense = new Expense({
    username: sess.user.toLowerCase(),
    date,
    title,
    shop,
    type,
    price
  });

  expense.save().then(doc=>{
    res.json({saved:true});
  }).catch(err=>{
    res.status(502).json({saved:false});
  });
};

const load = (req, res) => {
  let sess = req.session;

  const {date,type,phrase} = req.body;
  const filters = {};

  if(type && type!=="")
  {filters.type=type;}

  if(phrase && phrase!=="")
  {filters.title={ "$regex": new RegExp(phrase), "$options": 'i' };}

  console.log(filters,phrase);

  if(!date){
    Expense.find({username:sess.user.toLowerCase()}).sort({date:-1}).then(docs=>{
      res.json(docs);
    }).catch(err=>{
      res.status(502).json({loaded:false});
    });
  }

  else{
    Expense.find({username:sess.user.toLowerCase(), ...filters}).sort({date}).then(docs=>{
      console.log(docs);
      res.json(docs);
    }).catch(err=>{
      res.status(502).json({loaded:false});
    });
  }

};

const checkExpense = (req, res) => {
  let sess = req.session;

  Expense.findOne({_id:req.params.id}).then(doc=>{
    if(doc.username===sess.user)
    {
      res.json({isOk:true});
    } else {
      res.json({isOk:false});
    }
  }).catch(err=>{
    res.status(502).json({isOk:false});
  })
};

const get = (req, res) => {
  Expense.findOne({_id:req.params.id}).then(doc=>{
    res.json({exp:doc});
  }).catch(err=>{
    res.status(502).json({isOk:false});
  })
};

const update = (req, res) => {
  Expense.findOneAndUpdate({_id:req.params.id},req.body.data).then(doc=>{
    res.json({updated:true});
  }).catch(err=>{
    res.status(502).json({updated:false});
  })
};

const deleteExp = (req, res) => {
  Expense.deleteOne({_id:req.params.id}).then(doc=>{
    res.json({deleted:true});
  }).catch(err=>{
    res.status(502).json({deleted:false});
  })
};

const piechart = (req, res) => {

  let username = req.session.user.toLowerCase();
  let types = req.body.types;
  const from = req.body.from;
  const to = req.body.to;

  let date_filter = {};

  if(from && from !=="")
  {
    date_filter.date = {
      $gte: from
    };
  }
  if(to && to !=="")
  {
    date_filter.date = {
      ...date_filter.date,
      $lte: to
    };
  }

  Expense.find({type:types, username:username, ...date_filter }).then(docs=>{
    let data = {};

    types.forEach(type => {
      data[type]=0;
    });

    docs.forEach(doc => {
      data[doc.type] += doc.price;
    });

    res.json(data);
  }).catch(err=>{
    res.status(502).json({isOk:false});
  });
};

const barchart = (req,res) => {

  const {from,to} = req.body;

  const username = req.session.user.toLowerCase();
  const date = {
    $gte: from,
    $lte:to
  };

  Expense.find({username, date }).sort({date: 1}).then(docs=>{
    const months = ['Jan','Feb','Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let data = {'Jan':0,'Feb':0,'Mar':0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sep":0,"Oct":0,"Nov":0,"Dec":0};

    docs.forEach(doc=>{
      const m = new Date(doc.date).getMonth();
      data[months[m]]+=doc.price;
    });

    for(let d in data)
    {
      data[d]=Math.round((data[d] + Number.EPSILON) * 100) / 100;
    }

    res.json(data);
  }).catch(err=>{
    res.status(502).json({isOk:false});
  });
};

module.exports={
  add,
  load,
  checkExpense,
  get,
  update,
  deleteExp,
  piechart,
  barchart
};
