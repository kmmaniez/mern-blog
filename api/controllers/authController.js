import {db} from '../database'

export const register = (req, res) => {

    // CHECK EXISTING USER
    const query = "SELECT * FROM users WHERE email = ? OR username = ?"
    
    db.query(query, [req.body.email, req.body.name], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user exist")
      
        // HASH PASSWORD
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username, 
            req.body.email, 
            hash
        ]
        db.query(q,[values], (err,data) => {
            if(err) return res.json(err)
            return res.status(200).json("user has been created")
        })

    })
}

export const login = (req, res) => {
    // CHECK USER
    const query = "SELECT * FROM users WHERE username = ?"
    db.query(query, [req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("user not found")

        // check password
        const isPassCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isPassCorrect) return res.status(400).json("wrong username or pass")

        const token = jwt.sign({id: data[0].id}, "jwtkey")
        const {password, ...other} = data[0]
        
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    })
}

export const logout = (req, res) => {
    
}