const add = (req,res) => {
    req.query;
    fetchAdd(x,y)
       .then((add) => {
           res.json(add);

       })
       .catch((err) =>{
           res.json(err.message);
       });
    }
export{add};