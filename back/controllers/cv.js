const Personne = require("../models/person");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

exports.getAllcandidats = async (req, res, next) => {
  const filter = req.query.filter;

  try {
    const result = await Personne.find({
      nom: new RegExp(filter, "i"), // insesible à la casse
    });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
exports.getCandidat = (req, res, next) => {
  const pId = req.params.id;

  Personne.findById(pId)
    .then((p) => {
      if (!p) {
        const error = new Error("Could not find this candidate");
        error.statusCode = 404;
        next(error);
      }
      res.status(200).json(p);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.createCandidat = (req, res, next) => {
  let newP = _.pick(req.body, ["prenom", "nom", "age", "profession"]);

  if (req.body.avatar) {
    const urlAvatar = req.protocol + "://" + req.get("host");
    newP.avatar = urlAvatar + "/avatars/" + req.body.avatar;
  }

  newP.recrue = false;

  const newPerson = new Personne(newP);

  newPerson
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New applicant created successfully",
        id: result["_id"].toString(),
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
exports.updateCandidat = (req, res, next) => {
  const pId = req.params["id"];

  Personne.findById(pId)
    .then((p) => {
      if (!p) {
        const error = new Error("Could not find this applicant");
        error.statusCode = 404;
        throw error;
      }

      p = _.merge(p, req.body);

      return p.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Applicant updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
exports.updateCandidat2 = (req, res, next) => {
  let p = _.pick(req.body, ["prenom", "nom", "age", "profession", "avatar"]);
  let newP = new Personne(p);
  newP
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Applicant updated successfully V2",
        result: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
exports.recruterCandidat = (req, res, next) => {
  const pId = req.params["id"];

  Personne.findById(pId)
    .then((p) => {
      if (!p) {
        const error = new Error("Could not find this applicant");
        error.statusCode = 404;
        throw error;
      }

      p = _.merge(p, req.body);

      return p.save();
    })
    .then((result) => {
      if (result["recrue"] == true)
        res.status(200).json({
          message: "Applicant hired successfully",
          result: result,
        });
      else
        res.status(200).json({
          message: "Applicant fired successfully",
          result: result,
        });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getAllrecrues = async (req, res, next) => {
  const filter = req.query.filter;

  try {
    const result = await Personne.find({
      recrue: true, // insesible à la casse
    });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
exports.deleteCandidat = (req, res, next) => {
  const pId = req.params["id"];
  console.log(pId);

  Personne.findByIdAndDelete(pId)
    .then((p) => {
      console.log(p);
      if (!p) {
        const error = new Error("Could not find this person");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Person successfully deleted",
        result: p,
      });
    })
    .catch((err) => {
      console.log(err);

      next(err);
    });
};
