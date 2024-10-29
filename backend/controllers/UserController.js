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

// postUser
exports.postUsers = async(req, res) => {
    try{
        const {firstName, lastName, email, contact, gender, skill} = req.body;

        const newForm = new userModel({
            firstName, 
            lastName, 
            email, 
            contact, 
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
exports.updateUsers = async(req, res) => {
    try{
        const {id, firstName, lastName, email, contact, gender, skill} = req.body;

        const user = await userModel.findByIdAndUpdate({_id: id}, {
            $set: {
                skill: skill,
                contact: contact
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
exports.deleteUsers = async(req, res) => {
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