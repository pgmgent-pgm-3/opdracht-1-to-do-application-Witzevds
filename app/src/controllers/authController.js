/**
 * An auth controller that handles login, register, and logout
 */

import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import User from "../models/user.js";

/**
 * Login
 */
export const login = async (req, res) => {
  const flash = req.flash || {};

  res.render("pages/login", { flash });
};

export const postLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.formErrorFields = {};
    errors.array().forEach((error) => {
      req.formErrorFields[error.path] = error.msg;
    });

    req.flash = {
      type: "danger",
      message: "Er zijn fouten gevonden in het formulier",
    };

    return next();
  }
  const user = await User.query().findOne({ email: req.body.email });
  if (!user) {
    req.flash = {
      type: "danger",
      message: "Gebruiker bestaat niet",
    };
    return next();
  }

  // check password
  const match = bcrypt.compareSync(req.body.password, user.password);

  if (!match) {
    req.flash = {
      type: "danger",
      message: "Wachtwoord is fout",
    };
    return next();
  }

  // token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.TOKEN_SALT,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("user", token, { httpOnly: true });
  res.redirect("/");
};

/**
 * Register
 */
export const register = async (req, res) => {
  const flash = req.flash || {};

  res.render("pages/register", flash);
};

export const postRegister = async (req, res, next) => {
  // check errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.formErrorFields = {};
    errors.array().forEach((error) => {
      req.formErrorFields[error.path] = error.msg;
    });

    // set flash messageF
    req.flash = {
      type: "danger",
      message: "Er zijn fouten gevonden in het formulier",
    };
    // redirect to the register page
    return next();
  }

  // check if user exists
  const userExists = await User.query().findOne({ email: req.body.email });
  if (userExists) {
    req.flash = {
      type: "danger",
      message: "Gebruiker bestaat al",
    };
    return next();
  }

  const pass = bcrypt.hashSync(req.body.password, 10);

  // create user
  await User.query().insert({
    username: req.body.username,
    email: req.body.email,
    password: pass,
  });

  // redirect to the login page
  res.redirect("/login");
};

/**
 * Logout
 */
export const logout = async (req, res) => {
  // Delete the user cookie
  res.cookie("user", null, { expires: new Date(0), httpOnly: true });

  // Redirect to the home page or wherever appropriate after logout
  res.redirect("/");
};
