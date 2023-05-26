const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded( {extended:true} ));



const homeContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const aboutContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const contactContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let formData = [];

app.get("/", function(req, res){
  res.render("home", { homePage : homeContent , homeObj:formData });

  // console.log(formData);
});

app.get("/about", function(req, res){
  res.render("about", { aboutPage : aboutContent } );
});

app.get("/contact", function(req, res){
  res.render("contact", { contactPage : contactContent });
});

app.get("/compose", function(req,res){
  res.render("compose");
});

// Adding the custom route

app.get("/read/:post", function(req,res){
  let urlTitle = req.params.post;

  formData.forEach( function(element){
    if(urlTitle === element.heading )
    {
      console.log("Fouunded");
    }
  })
})

app.post("/compose", function(req,res){

  // console.log(req.body);

  // var composeText= composeText;
  // var textareaContent = textareaContent;

  let postObj = {
    heading : req.body.composeText,
    description : req.body.textareaContent
  };

  formData.push(postObj);

  // console.log(formData);
  // res.render("compose");
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
