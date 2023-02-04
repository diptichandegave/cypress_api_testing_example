Feature: API Testing

    API testing scenarios

@happy-path
Scenario: Verify when user access API it should work properly
Given I access the API to get music festival data
Then I verify API is working 

@happy-path
Scenario: Verify each band should have festival name
Given I access the API to get music festival data
Then I verify API is working 
Then I verify each band have festival name     

@regression
Scenario: Verify all text follows pascal case
Given I access the API to get music festival data
Then I verify API is working 
Then I verify all text follows pascal case

@regression
Scenario: Verify festivals names are unique
Given I access the API to get music festival data
Then I verify API is working 
Then I verify festival names are unique

@regression
Scenario: Verify band names are unique under each festival
Given I access the API to get music festival data
Then I verify API is working 
Then I verify band names are not repeated under each festival