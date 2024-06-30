const { User } = require("../models/userModel");
const { Vacancy } = require("../models/vacancyModel");

const getNumbers = async (req, res) => {
    const users = await User.find({
        userrole: { $ne: "admin" }
    });
    const vacancies = await Vacancy.find({});

    res.status(200).json({
        success: true,
        numbers: {
            users: users.length,
            vacancies: vacancies.length
        }
    });
};

const getUsers = async (req, res) => {
    const users = await User.find({
        userrole: { $ne: "admin" }
    });

    users.reverse();

    res.status(200).json({
        success: true,
        users
    });
};

const getVacancies = async (req, res) => {
    const vacancies = await Vacancy.find({});

    vacancies.reverse();

    res.status(200).json({
        success: true,
        vacancies
    });
};

const getUser = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "UserNotFound"
        });
    };

    if (!user || (user && user.userrole === 'admin')) {
        return res.status(400).json({
            success: false,
            message: "UserNotFound"
        });
    };

    res.status(200).json({
        success: true,
        user
    });
};

const deleteUser = async (req, res) => {
    let user;
    try {
        user = await User.findById(req.params.id);
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "UserNotFound"
        });
    };

    if (!user || (user && user.userrole === 'admin')) {
        return res.status(400).json({
            success: false,
            message: "UserNotFound"
        });
    };

    await User.findByIdAndDelete(req.params.id);

    if (user.userrole === "employer") {
        const vacancies = await Vacancy.find({ user: user._id });

        vacancies.forEach(async vacancy => {
            await Vacancy.findByIdAndDelete(vacancy._id);
        });
    };

    res.status(200).json({
        success: true
    });
};

const getVacancy = async (req, res) => {
    let vacancy;
    try {
        vacancy = await Vacancy.findById(req.params.id)
            .populate("user", "-password -_id");
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    if (!vacancy) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    res.status(200).json({
        success: true,
        vacancy
    });
};

const updateVacancy = async (req, res) => {
    let vacancy;
    try {
        vacancy = await Vacancy.findById(req.params.id)
            .populate("user", "-password -_id");
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    if (!vacancy) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    const keys = ["title", "description", "salary", "location", "deadline"];

    Object.keys(req.body).forEach(key => {
        if (!keys.includes(key)) {
            return res.status(400).json({ success: false });
        };
    });

    const { title, description, salary, location, deadline } = req.body;

    try {
        await Vacancy.findByIdAndUpdate(
            req.params.id,
            {
                title: title,
                description: description,
                salary: salary,
                location: location,
                deadline: deadline
            }
        );

        res.status(200).json({
            success: true
        });
    } catch (err) {
        let errors = new Object();

        if (err.name === "ValidationError") {
            Object.keys(err.errors).forEach(key => {
                errors[key] = err.errors[key].message;
            });
        };

        res.status(400).json({
            success: false,
            errors
        });
    };
};

const deleteVacancy = async (req, res) => {
    let vacancy;
    try {
        vacancy = await Vacancy.findById(req.params.id)
            .populate("user", "-password -_id");
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    if (!vacancy) {
        return res.status(400).json({
            success: false,
            message: "VacancyNotFound"
        });
    };

    await Vacancy.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true
    });
};

module.exports = {
    getNumbers,
    getUsers,
    getVacancies,
    getUser,
    deleteUser,
    getVacancy,
    updateVacancy,
    deleteVacancy
};