// zod 
const zod= require ("zod");

// post 
// o :{ str
const createtype = zod.object({
    title :zod.string(), //title
    desciption :zod.string(), // description
    doneby : zod.number
}
) ;


// put 
// id of todo
const puttype = zod.object({
    id: zod.string
});

module.exports = {
    createtype,
    puttype
}
