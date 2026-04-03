const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const app=(express());
const multer=require("multer");
const path=require("path");
const { request } = require("http");
app.use('/Upload',express.static('Upload'));
app.use("/Upload/image", express.static("Upload/image"));
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"waste_management"
})


// upload image 
const storage=multer.diskStorage({
    destination:function(request,file,cb){
        cb(null,'Upload/image/');
    },
    filename:function(request,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

const Upload=multer({storage,storage});


app.post('/Uploading',Upload.single('file'),(request,response)=>{

    try{
        console.log(request.file.fieldname)
        response.send({
            message:request.file.filename,
            img:request.file,
        });
    }
      catch(error){
            response.status(500).send({message:"Faild to Upload"+error})
        }
})

// Register 
app.post("/Register/",(request,response)=>{
    const sql="insert into admin(adnam,adid,img,email,phno,pass)values(?)"
    const values=[
        request.body.adname,
            request.body.adid,
            request.body.image,
            request.body.email,
            request.body.phno,
            request.body.pass
           
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return response.json(err)
        }
        return response.json("Successfully")
    })
})

// Admin profile 

app.get('/adminprofile/:aid',(req,res)=>{
    const sql="select * from admin where id=?"
    const aid=req.params.aid
   
    db.query(sql,aid,(err,data)=>{
        if(err)
        {
            return res.json("Error"+err)
        }
        console.log(aid)
        console.log(data)
        return res.json(data)
    })
})


//Admin Login

app.post('/adminlogin/',(req,res)=>{
    const sql="select * from admin where email=? and pass=?"
    const values=[
        req.body.email,
        req.body.pass
    ];
    // console.log(values)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json("error" +err)
        }
        return res.json(data)
    })
})

// Admin profile update 
const storage1=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Upload/image/');
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload=multer({storage:storage1});
app.put("/updateadmin/:aid",upload.single("image"),(req,res)=>{
    const aid=req.params.aid;
    let imgName;

  if (req.file) {
    imgName = req.file.filename;
  } else {
    imgName = req.body.img;
  }
    const sql='update admin set adnam=?, adid=?, email=?, phno=?, img=? where id=? ';
    const values=[
        req.body.adnam,
        req.body.adid,
        req.body.email,
        req.body.phno,
        imgName,
        aid
    ];
    db.query(sql,values,(err,data)=>{
        if (err) {
           return res.status(500).json({ message: "Update failed error" });
        }

        return res.json({ message: "Profile updated successfully" });
    
    });
})


// email check 

app.post('/emailcheck/',(req,res)=>{
    const sql="select id from admin where email=? ";
    const email=req.body.email;

    console.log(email)
    db.query(sql,[email],(err,data)=>{
        if(err)
        {
            return res.json("Error"+err)
        }
       else
       {
         return res.json(data);
       }

      
        
    })
})

// New password   

app.put("/updatepassword/",(req,res)=>{
    const sql="update admin set pass=? where email=?";
    console.log( req.body.newpass)
   console.log( req.body.email)
   
    const values=[ 
        req.body.newpass,
        req.body.email,
      
    ]
    console.log(values)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json("Error"+err)
        }

        return res.json("Update Successfully"+data)
    })
})

					

//Upload user img

const storage2=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Upload/image/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

// Upload to data base

const Upload1=multer({storage:storage2})

app.post("/useruploadimage",Upload1.single('file'),(req,res)=>{

    try{
        console.log(req.file.filename)
        res.send({
            message:req.file.filename,
            uimg:req.file
        });
    }
    catch(err){
        res.status(500).send({message:"failed to upload file"+err})
    }
})

//Useradd page

app.post("/useradd/",(req,res)=>{
    const sql="insert into useradd(uname,ulname,uphno,uimg,uaddress,upass)values(?)"
    const values=[
                req.body.uname,
                req.body.ulname,
                req.body.uphno,
                req.body.uimage,
                req.body.uaddress,
                req.body.upass
                
    ]

    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return res.json({message:"Error"+err})
        }
        return res.json("Data Successfully")
    })
})	


// User login page

app.post("/userloginsubmit/",(req,res)=>{
    const sql="select * from useradd where ulname=? and upass=?";
    const values=[
        req.body.ulname,
        req.body.upass
    ]

    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json({message:"Error"+err})
        }

        return res.json(data)
    })
})


// total usere page
app.get('/totalusers/',(req,res)=>{
    const sql="select * from useradd"
    
    db.query(sql,(err,data)=>{
        if(err)
        {
            return res.json("Error" +err)
        }
        console.log(data)
        return res.json(data)
    })
})

// Get all users
app.get('/totalusers/', (req, res) => {
    const sql = "SELECT * FROM useradd";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error: " + err);
        return res.json(data);
    });
});

// Multer setup for image uploads
const storage3 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Upload/image/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const Upload2 = multer({ storage: storage3 });

// Update user
app.put('/updateuser/:uid', Upload2.single("userimg"), (req, res) => {
    const sql = "UPDATE useradd SET uimg=?, uname=?, uphno=?, uaddress=? WHERE uid=?";
    const uid = req.params.uid;

    const values = [
        req.file ? req.file.filename : req.body.uimg || null,
        req.body.uname,
        req.body.uphno,
        req.body.uaddress,
        uid
    ];

    db.query(sql, values, (err, data) => {
        if (err) return res.json({ message: "Error: " + err });
        return res.json("Update Successfully");
    });
});

// Delete user
app.delete("/userdelete/:uid", (req, res) => {
    const sql = "DELETE FROM useradd WHERE uid=?";
    const uid = req.params.uid;

    db.query(sql, [uid], (error, data) => {
        if (error) return res.json("Error: " + error);
        return res.json("Success");
    });
});


// Verify user
app.post("/wasteupdate", (req, res) => {
    const sql = "select * from useradd where uname=? and uphno=?";
    const values = [req.body.uname, req.body.uphno];
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error: " + err);
        return res.json(data);
    });
});

// Get single user by uid
app.get("/wasteget/:uid", (req, res) => {
    const sql = "select * from useradd where uid=?";
    db.query(sql, [req.params.uid], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Add waste
app.post("/wasteadd/:uid", (req, res) => {
    const sql = "insert into wasteadd(id,uname,uphno,uopation,udt,wastety,status)values(?,?,?,?,?,?,?)";
    const values = [
        req.params.uid,
        req.body.uname,
        req.body.uphno,
        req.body.opation,
        req.body.udt,
        req.body.wastetype.join(" , "),
        "pending"
    ];
    console.log(values)
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error: " + err);
        return res.json("Successfully");
    });
});


// Get all tasks with waste submissions
app.get('/totaltask', (req, res) => {
  const sqlUsers = "select * from useradd";
  const sqlWastes = "SELECT * FROM wasteadd WHERE status = 'pending'";

  db.query(sqlUsers, (err, users) => {
    if (err) return res.json("Error: " + err);

    db.query(sqlWastes, (err, wastes) => {
      if (err) return res.json("Error: " + err);

      // Send users and wastes separately
      return res.json({ users, wastes });
    });
  });
});



// update pending -> completed
app.put('/updatepending', (req, res) => {
  const { id } = req.body;

  const sql = "UPDATE wasteadd SET status = 'completed' WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ error: err });

    return res.json({ message: "Status updated to completed" });
  });
});



// Worker add page

app.post('/workeradd',(req,res)=>{
    const sql="insert into workeradd(wname,wuname,wid,wgender,wvehic,wlocation,wphno,wpass)values(?,?,?,?,?,?,?,?)";
    const values=[
        req.body.name,
        req.body.uname,
        req.body.workid,
        req.body.gender,
        req.body.vehicl,
        req.body.lcation,
        req.body.phno,
        req.body.pass
    ]
    console.log(values)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json("Error "+err);
        }
        return res.json("Successfully");
    })
})

// worker login   page

app.post("/workerlogin",(req,res)=>{
    const sql="select * from workeradd where wname=? and wpass=?";
    const values=[
        req.body.wname,
        req.body.wpass
    ]
    console.log(values)
    db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json("Error"+err);
        }
        return res.json(data);
    })
})

// Worker List page 

app.get("/workerlist",(req,res)=>{
    const sql="select * from workeradd";

    db.query(sql,(err,data)=>{
        if(err)
        {
            return res.json("Error"+err)
        }
        console.log(data)
        return res.json(data)
    })
})


// completed task 
app.get("/completed/",(req,res)=>{
    const sql="select * from wasteadd where status='completed' ";

    db.query(sql,(err,data)=>{
        if(err)
        {
             return res.json(err);
        }
        console.log(data)
        return res.json(data)       
    })
})

// comment page 
app.post("/comment",(req,res)=>{
     const sql="insert into comment(comment)values(?)";
     const values=[req.body.commt];

     db.query(sql,values,(err,data)=>{
        if(err)
        {
            return res.json(err)
        }
        return res.json("successfully")
     })
})

app.listen(5252,()=>{
    console.log("Server Start path 5252")
})