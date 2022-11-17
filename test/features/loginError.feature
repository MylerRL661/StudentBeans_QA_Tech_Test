Feature: Login Error

Scenario: As a user I want to login to studentbeans.com
    Given I open studentbeans.com
    And I select the login page
    When I enter the login credentials
    Then An error will be present