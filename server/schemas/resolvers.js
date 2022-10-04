const {Bosses} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const resolvers = {

        Query:{
            me: async (parent, args,context) =>{
                if(context.user){
                    const userData = await user.findOne({
                        _id: context.user_id
                    }).select("-__v -password");
    
                    return userData;
                }
                throw new AuthenticationError("Not Logged In");
            },
            bosses: async () => {
                return Bosses.find();
              },
        },




};




module.exports = resolvers;
