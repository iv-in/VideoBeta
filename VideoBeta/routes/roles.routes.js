const express = require('express');
const router = express.Router();

const checkRoles = (role) => (req, res, next) => req.user && req.user.role === role ? next() : res.render("index", { msg: `Necesitas ser un ${role} para acceder aquí` })

router.get('/miPerfil', checkRoles("GUEST"), (req, res, next) => res.render('roles/guest'));
router.get('/admin', checkRoles("ADMIN"), (req, res, next) => res.render('roles/admin'));

module.exports = router;