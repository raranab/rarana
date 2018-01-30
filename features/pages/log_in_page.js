
var LogInPage = function() {
    
      this.get = function() {
        browser.get('https://app-dev.truespace.com/login');
      };
    
      this.logOut = function() {
        element(by.buttonText('Log Out')).click();
      };

      this.logOutText = function() {
        return element(by.buttonText('Log Out')).getText()
      };
    
      // Log in element

    this.emailLogIn = function(value) {
        element(by.css('[name="email"]')).sendKeys(value);
      };
    this.pass = function(value) {
        element(by.css('[ng-reflect-name="password"]')).sendKeys(value);
      };
    this.logInButton = function(){
        element(by.buttonText('Log In')).click();
      };
  
    this.alertMessage = function(){
       return element.all(by.css('[class="ng-star-inserted"]')).getText();
    };
    this.getStarted = function(){
        element(by.buttonText('GET STARTED')).click();
    }
    };
  
    
    
    module.exports = LogInPage;