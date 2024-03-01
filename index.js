import express from 'express';
import ProductsController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest  from './src/middlewares/validation.middleware.js';
import  {uploadFile}  from './src/middlewares/file-upload.middleware.js';
import userController from './src/controllers/user.controller.js';
import session from 'express-session';
import keygenerator from 'keygenerator';
import {auth} from './src/middlewares/auth.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
const app = express();
app.use(express.static('public'));
app.use(cookieParser());
app.use(setLastVisit);
app.use(session({
  secret:keygenerator.session_id(),
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false},
}));
// console.log(keygenerator.session_id());
const productsController =
  new ProductsController();
  const UserController= new userController();

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

app.get('/',auth, productsController.getProducts);
app.get('/update-product/:id',auth, productsController.getUpdateProductView);
app.get('/add-product',auth,productsController.getAddProduct);
app.post('/',auth,uploadFile.single('imageUrl'),validateRequest, productsController.postAddProduct);
app.post('/update-product',auth,productsController.postUpdateProduct);
app.post('/delete-product/:id',auth,productsController.deleteProduct);
app.get('/register',UserController.getRegister);
app.get('/login',UserController.getLogin);
app.post('/register',UserController.postRegister);
app.post('/login',UserController.postLogin);
app.get('/profile',auth,UserController.getProfile);
app.get('/logout',UserController.logout);

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
