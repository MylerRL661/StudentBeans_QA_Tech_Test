Feature: Top 20 Offers Search

Scenario: As a user I want to open studentbeans.com and search for a specific offer in the top 20
    Given I am on the studentbeans homepage and select the top 20 offers
    When I select the 6th offer
    Then I should have loaded onto the 6th offer page