export const signup = async(req,res)=>{
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;
    } catch (error) {
        
    }
}

export const login = async(req,res)=>{
    console.log("Loginuser");
    res.send("Loginuser")
}

export const logout = async(req,res)=>{
    console.log("Logoutuser");
    res.send("Logoutuser")
}

