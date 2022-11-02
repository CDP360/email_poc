const data = require('./sample.json');
var user_name = 'vimalvs';
var userName = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">${user_name}</span></strong></p>`;

// console.log('jsonRows', data);
// var modifiedString = kurzerText.replace("'+relation+'", newValue);

let result = data.body.rows.map((e) => {
  return e.columns.map((h) => {
    return h.contents.map((j) => {
      return j.filter((k) => k.type === 'text');
    });
  });
});

console.log(result, 'resultresult');
