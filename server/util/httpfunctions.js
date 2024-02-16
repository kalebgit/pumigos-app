

async function get({id, limit, model}){
    try{
        if(id){
            const instance = await model.findById(id);
            if(instance) return {code: 200, data: instance}
            else return {code: 404};
        }else if(limit) return {code: 200, data: await model.find().limit(limit)}
        else return {code: 200, data: await model.find()}
    }catch(err){
        console.log(err)
        return {code: 500}
    }
}

async function post({data, model}){
    try{
        await model.create(data);
        console.log("instance created")
        return {code: 201}
    }catch(err){
        console.log(err)
        return {code: 501}
    }
}

module.exports = {
    get, post
}