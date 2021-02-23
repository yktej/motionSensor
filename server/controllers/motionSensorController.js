const loginService = require("../services/loginService");


exports.getMonthlyStatus = async ({ body }, res) => {
  try {
    const data = await loginService.validatePasswordAndProceed(body);
    res.status(200).json({test:"data is here test"});
  } catch (err) {
    res.status(200).json({ success: false, message: '' });
  }
};
;



module.exports = exports;
