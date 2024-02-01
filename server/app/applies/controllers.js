const {Op} = require('sequelize');

const Apply = require('./Apply');
const Vacancy = require('../vacancy/models/Vacancy');
const Resume = require('../resume/models/Resume');
const User = require('../auth/User');
const {NEW, INVITATION, DECLINED} = require('./utils');
const sendMail = require('../utils/sendMail');
const Company = require('../auth/Company');

const createApply = async(req, res) => {
    try {        
        const apply = await Apply.create({
            resumeId: req.body.resumeId,
            vacancyId: req.body.vacancyId,
            status: NEW,
        })
        const resume = await Resume.findByPk(req.body.resumeId);
        const vacancy = await Vacancy.findByPk(req.body.vacancyId);

        const user = await User.findByPk(vacancy.userId);

        sendMail(
            user.email,
            `Новый отклик на вакансию ${vacancy.name}`,
            `Имя соискателя: ${resume.first_name}\nФамилия соискателя: ${resume.last_name}\nНомер соискателя: ${resume.phone}`
          );

        res.status(200).send(apply);        
    } catch (error) {
        res.status(500).send(error);        
    }
}

const getEmployeeApplies = async(req, res) => {
    try{
        const resumes = await Resume.findAll({
            where: {
                userId: req.user.id
            }
        })

        const ids = resumes.map(item => item.id);

        const applies = await Apply.findAll({
            where: {
                resumeId: { [Op.in]: ids }
            },
            include: {
                model: Vacancy,
                as: 'vacancy'
            }
        }) 

        res.status(200).send(applies);
    } catch(error) {
        res.status(500).send(error);
    }
}

const deleteApply = async(req, res) => {
    try {
        await Apply.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).end();  
    } catch(error) {
        res.status(500).send(error);
    }
}

const acceptEmployee = async(req, res) => {
    try {
        await Apply.update(
            {
                status: INVITATION
            }, 
            {
                where: {
                    id: req.body.applyId
                }
        })

        const apply = await Apply.findByPk(req.body.applyId);
        const resume = await Resume.findByPk(apply.resumeId);
        const user = await User.findByPk(resume.userId);
        const vacancy = await Vacancy.findByPk(apply.vacancyId);
        const company = await Company.findByPk(req.user.companyId);
        
        sendMail(
            user.email, 
            `Сообщение от работодателя (Приглашение) ${vacancy.name}`, 
            `Здравствуйте, ${resume.first_name}!\n\nВы были приглашены на вакансию ${vacancy.name}\Компания: ${company.name}\nПриходите по адресу ${company.address} или свяжитесь с менеджером: ${req.user.full_name}, ${req.user.phone}, ${req.user.email}`
        );
        res.status(200).end();
    } catch(error) {
        res.status(500).send(error);
    } 
}

const declineEmployee = async (req, res) => {
    try {
        await Apply.update(
            {
                status: DECLINED
            }, 
            {
                where: {
                    id: req.body.applyId
                }
        })

        const apply = await Apply.findByPk(req.body.applyId);
        const resume = await Resume.findByPk(apply.resumeId);
        const user = await User.findByPk(resume.userId);
        const vacancy = await Vacancy.findByPk(apply.vacancyId);

        sendMail(
            user.email, 
            'Работодатель не готов пригласить вас на интервью', 
            `Здравствуйте, ${resume.first_name}!\n\nБольшое спасибо за интерес, проявленный к вакансии ${vacancy.name}. К сожалению, в настоящий момент мы не готовы пригласить Вас на дальнейшее интервью по этой вакансии. Мы внимательно ознакомились с Вашим резюме и, возможно, вернемся к Вашей кандидатуре, когда у нас возникнет такая потребность.`
        );
        res.status(200).end();
    } catch(error) {
        res.status(500).send(error);
    }
}

const getVacancyApplies = async (req, res) => {
    try {
        const options = {vacancyId: req.params.id};
        if(req.query.status && (req.query.status === NEW || req.query.status === INVITATION || req.query.status === DECLINED)) {
            options.status = req.query.status   
        }
        const applies = await Apply.findAll({
            where: options, 
            include: {
                model: Resume,
                as: 'resume',
            }
        })

        res.status(200).send(applies);
    } catch(error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createApply,
    getEmployeeApplies,
    deleteApply,
    acceptEmployee,
    declineEmployee,
    getVacancyApplies,
}