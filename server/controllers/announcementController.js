const { createTokenForAnnouncement } = require("../token/createToken");

const announcementPage = async (req, res) => {
    const token = createTokenForAnnouncement(req.user._id);
    res.status(200).json({
        success: true,
        userrole: req.user.userrole,
        token
    });
};

module.exports = {
    announcementPage
};