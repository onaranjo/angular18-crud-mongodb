const userModel = require('../models/UserModel')

// getUsers
exports.getUsers = async(req, res) => {
    try{
        const result = await userModel.find({})

        if(result){
            res.status(200).json({result});
        }
        else{
            res.status(400).json({msg:"Resultados no encontrados!"});
        }
    }
    catch(e){
        //console.log(e);
        res.status(500).json({msg:"Internal Server Error!"});
    }
}

// getUser
exports.getUser = async(req, res) => {
    try{
        const {id} = req.params;

        const result = await userModel.findOne({_id: id});

        if(result){
            res.status(200).json({result});
        }
        else{
            res.status(400).json({msg:"Usuario no encontrado!"});
        }
    }
    catch(e){
        //console.log(e);
        res.status(500).json({msg:"Internal Server Error!"});
    }
}

// postUser
exports.postUser = async(req, res) => {
    try{
        const {firstname, lastname, email, contact, age, gender, skill} = req.body;

        const newForm = new userModel({
            firstname, 
            lastname, 
            email, 
            contact, 
            age,
            gender, 
            skill
        })

        //console.log(req.body);

        await newForm.save();

        res.status(201).json({msg:"Nuevo usuario registrado satisfactoriamente!"});
    }
    catch(e){
        //console.log(e);
        res.status(500).json({msg:"Internal Server Error!"});
    }
}

// updateUser
exports.updateUser = async(req, res) => {
    try{
        const {id, firstname, lastname, email, contact, age, gender, skill} = req.body;

        const user = await userModel.findByIdAndUpdate({_id: id}, {
            $set: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                contact: contact,
                age: age,
                gender: gender,
                skill: skill
            }
        }, {new: true})

        res.status(201).json({msg:"Actualizado satisfactoriamente!", user});
    }
    catch(e){
        //console.log(e);
        res.status(500).json({msg:"Internal Server Error!"});
    }
}

// deleteUser
exports.deleteUser = async(req, res) => {
    try{
        const {id} = req.params;

        const result = await userModel.findByIdAndDelete({_id: id})

        res.status(201).json({msg:"Eliminado satisfactoriamente!", result});
    }
    catch(e){
        //console.log(e);
        res.status(500).json({msg:"Internal Server Error!"});
    }
}