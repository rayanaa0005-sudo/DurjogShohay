const loginUser = (req, res) => {

    const { email, password } = req.body;

    console.log("Login request received:");
    console.log("Email:", email);
  

    res.json({
        message: "Login request received successfully",
        email: email
    });
};

module.exports = { loginUser };