const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AVS8GhNOyOvp1yW8kEonwqmUDlmiKvQ0iL5Cdqjflz_MMi3oj9gvJ-17fwJpjsRuTgOvAjLOSChq9YrO",
  client_secret:
    "EDo3LoltWqXMHjDnldTbJTnkYZBXllFuMRPdX5Ur6U8S0KfKB4kATOoLHhyFg0CZACN6y-gaRC9KIgz1",
});

module.exports = paypal;
