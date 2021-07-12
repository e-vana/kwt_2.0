const mailjet = require ('node-mailjet').connect('09cafd1672132284d11ff0cbdd6b28ea', 'c1e60760e0fe9375170cf1650e263911');

const sendEmail = async function (toEmail, toName, scrapeItemArray){
  try {
    let htmlString = ''
    scrapeItemArray.forEach(item => {
      let string = `<div><h2>${item.title}</h2><ul><li>Price: $${item.price}</li><li>${item.condition}</li><li><a href='${item.link}'>Link to item </a></li></ul></div>`
      htmlString = htmlString + string;
    });

    let timeNow = new Date().toLocaleTimeString();
    let dateNow = new Date().toLocaleDateString();

    let requestObject = {"Messages":[
      {
        "From": {
          "Email": "evjava@gmail.com",
          "Name": "Evan"
        },
        "To": [
          {
            "Email": `${toEmail}`,
            "Name": `${toName}`
          }
        ],
        "Subject": `GC Scrape Results ${dateNow} @ ${timeNow}`,
        "TextPart": "",
        "HTMLPart": `${htmlString}`,
        "CustomID": "AppGettingStartedTest"
      }
    ]};

    let request = await mailjet.post("send", {'version': 'v3.1'}).request(requestObject);
    if(request){
      console.log("Succesfully sent the email")
      return true;
    }else {
      return false;
    }
  } catch (error) {
    console.log(error.statusCode)
  }
  
}

exports.sendEmail = sendEmail;


