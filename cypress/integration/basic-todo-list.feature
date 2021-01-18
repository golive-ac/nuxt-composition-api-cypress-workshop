Feature: Basic Todo List

  Scenario: Add todo into list
    Given I go to add todo page
    And todo list is empty
    When add "something todo" into list
    Then should number of list eq 1
    And should see "something todo" in list
