var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var LogInSteps = function() {

  var LogInPage = require("../pages/log_in_page.js");

  this.World = function MyWorld() {
    this.logIn = new LogInPage();
  };

  this.Given('the log in page', function (callback) {
    this.logIn.get();
    callback();
  });

  this.When('I enter $user and $password', function (user, password,  callback) {
    this.logIn.emailLogIn(user);
    this.logIn.pass(password);
    callback();
  });
  
   this.When('I click log in', function (callback) {
    this.logIn.logInButton();
   
   callback();
  });

  this.Then('The user is logged', function (callback){
    expect(browser.getCurrentUrl()).to.eventually.equal('https://app-dev.truespace.com/dashboard').and.notify(callback);
  });
};

module.exports = LogInSteps;