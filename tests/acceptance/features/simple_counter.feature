# Basic example without using tables:
# Feature: Simple counter
#   User wants to use counter to increase or decrease the number on screen

#   Scenario: Counter is increased
#     Given User visits homepage
#     When User clicks the + button
#     Then User sees the counter get increased

Feature: Simple counter
  User wants to use counter to increase or decrease the number on screen

  Scenario: Counter is clicked
    Given User visits homepage
    When User clicks the "<name>" button
    Then User sees the counter get "<name>"d

  Examples:
    | name     |
    | increase |
    | decrease |
