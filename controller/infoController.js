exports.getInfo = (req, res) => {
    res.json({
        status: true,
        message: "JSON server run successful!",
        server: "Express",
    });
};
