const dataSample = require('./sample.json');
var user_name = 'vimalvs';
var userName = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">${user_name}</span></strong></p>`;
var image1 =
  'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg';
var image2 =
  'https://assets.cdn.msgsndr.com/dJs02EcmedN7BV0yEpv4/media/62eb92ccef6fa889c148e24d.jpeg';
var image3 =
  'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg';
var data = dataSample;

let result = data.body.rows.map((e) => {
  e.columns.map((h) => {
    h.contents.filter((j, num) => {
      if (j.type == 'image' && num == 0) {
        console.log(j.id);
        if (j.id == 'E6QqYzhIDp') {
          j.values.src.url = image1;
        }
        if (j.id == 'N89QkLpkI-') {
          j.values.src.url = image2;
        }
        if (j.id == 'bSCv6xONew') {
          j.values.src.url = image3;
        }
      }
      if (j.type == 'text' && num == 3) {
        j.values.text = userName;
      }
    });
  });
  return e;
});
data.body.rows = result;
// console.log(JSON.stringify(data), 'resultresult');
