const connection = require('../config/connection');

// get all cats//
const getCats = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM  cats', (err, catdata) => {
      if (err) {
        console.log(err);
        // this will go to promise's .catch()//
        return reject(err);
      }
      resolve(catdata);
    });

  });
};

// create a cat//

const createCat = (catObj) => {
  return new Promise ((resolve,reject) => {
    connection.query('INSERT INTO cats SET ?', catObj, (err, catdata) => {
      if (err) {
        console.log(err);
        // this will go to promise's .catch()//
        return reject(err);
      }
      resolve(catdata); 
    });
  });
};

// update a cats adoption status//

const updateCat = (catObj, catId) => {
  return new Promise ((resolve, reject)=>
  connection.query('UPDATE cats SET ? WHERE ? id = ?', [catObj, catId], (err, catdata) => {
    if(err) {
      console.log(err);
      return reject(err);
    }
    else if (catdata.affectedRows === 0) {
      return resolve({ message: "Couldn't update successfully!"});
    }
  });
});
};

const deleteCat = (catId) => {
  connection.query('DELETE FROM cats WHERE id = ?',[catId], (err.catdata) => {
    if(err) {
      console.log(err);
      return reject(err);
    } else if (catdata.affectedRows === 0) {
      return resolve({ message: "Couldn't update successfully!"});
  
  });
});
};

module.exports ={gettCats, createCat, updateCat, deleteCat}