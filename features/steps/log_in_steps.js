

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

  this.Then('the user is logged', {timeout : 60 *1000} ,function (callback) {
      expect(browser.getCurrentUrl()).to.eventually.equal('https://app-dev.truespace.com/dashboard').and.notify(callback);
      expect(this.logIn.logOutText()).to.eventually.equal('Log Out').and.notify(callback);
      this.logIn.logOut();
  });

  this.Then('an invalid message is shown: Invalid email or password, try again', {timeout : 60 *1000} ,function (callback) {
    expect(browser.getCurrentUrl()).to.eventually.equal('https://app-dev.truespace.com/login').and.notify(callback);
    expect(this.logIn.alertMessage()).to.eventually.contain('Invalid email or password, try again').and.notify(callback);
      
});
};

module.exports = LogInSteps;