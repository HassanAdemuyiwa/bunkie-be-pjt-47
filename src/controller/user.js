const User = require("../models/user")


exports.userById = (req, res, next, id) =>{
    User.findById(id).exec((err, user)=> {
        if(err || !user){
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};


exports.allUser = (req, res, next) =>{

  
        User.find({}, function(err, users) { 
        
            if(err)
                res.send(err)
                // res.json(users)
                req.profile = users;
                next();






        // var userMap = {}; 
        
        // users.forEach(function(user) { 
        
        // userMap[user._id] = user; 
        
        // }); 
        
        // req.user = userMap; 
        
        
        });








            // User.find({}, function(err, users) {
    
            //    res.render({users: users});
    
            // });


}