const dataSample = require('./sample.json');
var user_name = 'vimalvs';
var userName = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">${user_name}</span></strong></p>`;

var data = dataSample

let result = data.body.rows.map((e) => {
  e.columns.map((h) => {
    h.contents.filter((j,num) => {
       if(j.type == "text" && num == 3){ 
         j.values.text =  userName
       }
    });
  });
  return e
});
data.body.rows = result
console.log(JSON.stringify(data), 'resultresult');
