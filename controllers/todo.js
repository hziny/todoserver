// Model
const TodoTask = require("../models/todoTask");

// KST Setting
var moment = require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

// Controller - 서비스 로직

// 그날에 맞는 할일 가져오기
exports.getToDoTaskForTheDay = async function (req, res) {
  const date = req.params.date;
  TodoTask.find({ date: date }, null, { sort: { date: -1 } }, (err, tasks) => {
    return res.status(200).json({ success: "SUCCESS", data: tasks });
  });
};

// 할일 저장하기
exports.addTodoTask = async function (req, res) {
  try {
    const todoTask = new TodoTask({
      content: req.body.content,
      date: req.body.date,
      done: false,
    });
    await todoTask.save();
    return res.status(200).json({
      success: "SUCCESS",
    });
  } catch (err) {
    return res.status(400).json({
      success: "Fail",
    });
  }
};

// 완료 수정
exports.updateTask = function (req, res) {
  const id = req.params.id;
  const done = req.body.done;

  if (!done) {
    TodoTask.findByIdAndUpdate(id, { done: true }, (err) => {
      if (err) {
        return res.status(400).json({
          success: "Fail",
        });
      }
      return res.status(200).json({
        success: "업데이트 완료",
      });
    });
  } else {
    TodoTask.findByIdAndUpdate(id, { done: false }, (err) => {
      if (err) {
        return res.status(400).json({
          success: "Fail",
        });
      }
      return res.status(200).json({
        success: "업데이트 완료",
      });
    });
  }
};

//삭제
exports.deleteTask = function (req, res) {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, (err) => {
    if (err) {
      return res.status(400).json({
        success: "Fail",
      });
    }
    return res.status(200).json({
      success: "삭제완료",
    });
  });
};
