module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        db.get_vacations().then((responce) => {
            res.send(responce)
        }).catch(err => console.error(err))
    },
    create: (req,res) => {
        let db = req.app.get('db');
        
        // let { location, days, type, description, imageUrl } = req.body;
        // db.create_vacation({ location: location, type: type, days: days, image_url: imageUrl }) => db.create_vacation({ location, type, days, imageUrl}) bc names match could do this instead
        //can also descontructure in one step
        db.create_vacation(req.body).then((res) => {
            res.send();
        }).catch(err => {
            console.error(err);
        });
    
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        let db = req.app.get('db');
        // '/packages/:id/:name'
    // if end point was /packages/5/katie
    // req.params = {
    //     id: 5,
    //     name: 'katie'
    // }
        db.delete_vacation({id: req.params.id}).then(() => {
            res.send();
        }).catch(err => {
            console.log(err);
        });
    }



}