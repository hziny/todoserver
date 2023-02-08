const express = require("express");
const app = express();
const router = express.Router();

// Controller 를 불러와서 exports 메소드 사용
const controller = require("../controllers/todo");

//getday
router.get("/:date", controller.getToDoTaskForTheDay);

// Write
router.post("/write", controller.addTodoTask); // http://localhost:3000/todo/write

// Update
router.post("/update/:id", controller.updateTask);

// Remove
router.get("/delete/:id", controller.deleteTask);

module.exports = router;
