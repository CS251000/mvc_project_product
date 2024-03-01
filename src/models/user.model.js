export default class userModel{
    constructor(id,name,email,password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
      }
      static add(name,email,password){
        const newUser= new userModel(users.length+1,name,email,password);
        users.push(newUser);

      }
      static getAll(){
        return users;
      }
      static authenticateUser(email,password){
        for(var i=0;i<users.length;i++){
          if(users[i].email==email && users[i].password==password){
            return true;
          }else{
            return false;
          }

        }
      }

}
var users = [];
