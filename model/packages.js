import {connection as db} from "../Config/index.js"
class Packages{
    fetchPackages(req, res){
        const qry = `
        SELECT packID, packName, packDescription,
        packavaiblity, packamount, packUrl,
        FROM packages;
        `;
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchPackages(req, res){
        const qry = `
        SELECT  packID,
         packName, 
         packDescription,
        packavaiblity, 
        packamount,
        packUrl
        FROM Packages
        WHERE packID = ${req.params.id};
        `;
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addPackage(req, res) {
        const qry = `
        INSERT INTO packages
        SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: 'New Package was added'
            })
        })
    }
    updatePackage(req, res) {
        const qry = `
        UPDATE packages
        SET ?
        WHERE packID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode, 
                msg: "The Package information has been updated."
            })
        })
    }
    deletePackage(req, res) {
        const qry = `
        DELETE FROM packages
        WHERE packID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The Package information has been deleted."
            })
        })
    }
}
export { Packages };