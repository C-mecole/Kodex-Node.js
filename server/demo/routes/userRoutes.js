const express = require("express");
const userController = require("../controllers/userController");
const validate = require("../middleware/validator");
const usersSchema = require("../validators/usersSchema");
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", validate(usersSchema), userController.createUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
