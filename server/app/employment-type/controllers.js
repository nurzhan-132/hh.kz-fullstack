const EmploymentType = require('./EmploymentType');

const getEmploymentTypes = async(req, res) => {
    try{
        const employmentTypes = await EmploymentType.findAll();
        res.status(200).send(employmentTypes);
    } catch(error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getEmploymentTypes,
}