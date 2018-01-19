Feature: Log In
  As a user existing of truespace
  I would log in successfully
  So that I cannot log in with wrong user and password

  Scenario: Log In Success
    Given the log in page
    When I enter testa@test.com and 1qazxsW@
	 And I click log in
	#Then The user is logged
    




