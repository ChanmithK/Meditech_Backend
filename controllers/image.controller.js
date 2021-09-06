
function upload(req,res){
    if(req.file.filename){
        res.status(201).json({
          message: "Image Upload Succesfully",
          url: req.file
        });
    }else{
        res.status(500).json({
            message: "Image Upload Error!!",
          });
    }
}

module.exports ={
    upload:upload
}