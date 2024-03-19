import { connection as db } from "../Config/index.js";
import { hash, compare } from 'bcrypt';
import { createToken } from "../middleware/AuthenticateUser.js";

class Users {
    fetchUsers(req, res) {
     
            const qry = `SELECT userID,
                                firstName,
                                lastName, 
                                userAge,
                                gender,  
                                userRole,
                                emailAdd,  
                                userPass, 
                                userProfile
                        FROM users;`;
            // const results = await db.query(qry);
            // res.status(200).json({
            //     status: 200,
            //     results
            // });
            db.query(qry, (err, results)=> {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            });
        }

 fetchUser(req, res) {
        
            const qry = `SELECT userID,
                                firstName,
                                lastName, 
                                userAge,
                                gender,  
                                userRole,
                                emailAdd,  
                                userPass, 
                                userProfile
                               FROM users
                               WHERE userID = ${req.params.id};
                               `

           db.query(qry, (err, result)=>{
                    if(err) throw err
                    res.json({
                         status: res.statusCode,
                         result
                    })
           })
        
        }
    

        async register(req, res){
            const data = req.body;
            data.userPass = await hash(data.userPass, 15);
    
            const user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass
            };
            const query = `INSERT INTO users SET ?;`
            db.query(query, [data], (err)=>{
                if(err) throw err;
                let token = createToken(user);
                res.json({
                    status: res.statusCode,
                    msg: 'You are registered',
                });
            });
        }
    

    async updateUser(req, res) {
      
            const data = req.body;
            if (data.userPass) {
                data.userPass = await hash(data.userPass, 8);
            }
            const qry = `UPDATE users SET ? WHERE userID = ${req.params.id};
            `
            db.query(qry, [data], (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: 'Information updated'
                })
            })
            
        }
    
        deleteUser(req, res) {
            const qry = `
            DELETE FROM users
            WHERE userID = ${req.params.id};
            `
            db.query(qry, (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Information removed"
                })
            })
        }

        login(req, res){
            const {emailAdd, userPass} = req.body;
            const qry = `SELECT * FROM users WHERE emailAdd = '${emailAdd}';`
            db.query(qry, async(err, results)=>{
                if(err) throw err
                if(!results?.length){
                    res.json({
                        status: res.statusCode,
                        msg: 'You provided wrong email address'
                    })
                }else{
                    const validPassword = await compare(userPass, results[0].userPass)
                    if(validPassword){
                        const token = createToken({
                            emailAdd,
                           userPass
                        })
                    res.json({
                        status: res.statusCode,
                        msg: 'Welcome back!',
                        token,
                        result: results[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: 'Incorrect password'
                    })
                }
            }
            })
        }
       
    
    
    
    
    
    
    
    
}


export {Users} ;
