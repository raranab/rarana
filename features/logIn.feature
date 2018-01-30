Feature: Log In
  As a user existing of truespace
  I would log in successfully
  So that I cannot log in with wrong user and password

   Scenario: Log In user Fail
    Given the log in page
     When I enter zzz@z.com and 1qazxsW@
      And I click log in
     Then an invalid message is shown: Invalid email or password, try again

  Scenario: Log In password Fail
    Given the log in page
     When I enter testa@test.com and 1qazxsW
      And I click log in
     Then an invalid message is shown: Invalid email or password, try again
    
  Scenario: Log In Success
    Given the log in page
     When I enter testa@test.com and 1qazxsW@
	    And I click log in
     Then the user is logged






  
	   
    




