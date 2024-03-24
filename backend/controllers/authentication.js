"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');
const User = db;
// router.post('/', async (req, res) => {
//     console.log('IN HERE')
// })
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield User.findOne({
        where: { email: req.body.email }
    });
    if (!user || !(yield bcrypt.compare(req.body.password, user.passwordDigest))) {
        res.status(404).json({
            message: `Could not find a user with the provided username and password`
        });
    }
    else {
        res.json({ user });
    }
}));
module.exports = router;
