Feature: Example Feature
  As a user of initium project
  I want to read the available tools list
  So I can concentrate on building awesome applications

  Scenario: Checking the page title
    Given I am on home page
    When I visit the page
    Then I should see "Initium" as the page title

  Scenario: Reading available tool list
    Given I am on the home page
    When I visit "index.html" page
    Then I should see "GruntJS" in the list of available tools