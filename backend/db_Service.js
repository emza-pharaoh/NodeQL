const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config()
let instance = null;






//connecting to database
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


//if there is an error connecting we handle it
con.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('database ' + con.state);
    console.log('We are in!')
});

////////////////////////////////////////////////






//A class for all the CRUD operations/functions
class DBService {

    static getDbServiceInstance(){
        return instance ? instance : new DBService()
    }


    async getAllData(){
        try{
            const response = await new Promise((resolve, reject) => {

                const query = "SELECT * FROM beers"; //Query to get the whole table

                //Running the Query
                con.query(query, (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results)

                    
                })

                return response
                console.log(response)
        
            });
            

        } catch (error) {
            console.log(error)
        }
    };
}

module.exports = DBService;
