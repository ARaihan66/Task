

exports.getData = async (req, res) => {
    const data = req.inputText;
    res.status(200).json({
        success: true,
        user: data
    })
}