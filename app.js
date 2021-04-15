const express =  require('express');
const mongoose = require('mongoose');
const {username, password} = require('./pass')
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dbURI = `mongodb+srv://${username}:${password}@cluster0.r64vm.mongodb.net/nodetuts?retryWrites=true&w=majority`;
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology:true})
.then(result=> console.log("Connected to DB"))
.catch(err => console.log('Error in connecting to DB'))

app.set("view engine", 'ejs')

app.listen(3000);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res)=> { 
    res.redirect("/blogs")
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
});

app.use("/blogs", blogRoutes)



app.use((req,res)=>{
    res.status(404).render('404',{title:'Not found'})
})
