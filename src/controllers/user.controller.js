import userModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
export default class userController{
    getRegister(req,res){
        res.render('register');
    }
    getProfile(req,res){
        var users = userModel.getAll();
    res.render('profile', { users });
       
    }
    getLogin(req,res){
        res.render('login',{errorMessage:null});
    }
    postRegister(req,res){
        const {name,email,password} = req.body;
        userModel.add(name,email,password);
        res.render('login',{errorMessage:null});
      }
      postLogin(req,res){
        const {email,password}= req.body;
        const isValid = userModel.authenticateUser(email,password);
        if(!isValid){
            return res.render('login',{
                errorMessage:'Invalid Credentials'
            })
        }
        req.session.userEmail = email;
        const products = ProductModel.getAll();
        return res.render('index',{products,userEmail:req.session.userEmail });
      }
      logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login');
            }
        });
        res.clearCookie('lastVisit');
    
      }




}