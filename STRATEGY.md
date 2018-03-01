# Strategy

## Considerations

- I started 10:40AM. Will use a maximum of 4-5 hours. 
- Will try to split my strategy according the time and focused on AC.
- Will be updating this document related parts of the code that should be documented here and not in the codebase specifically.
- Will be doing atomic commits to be transparent in the whole process
- Hopefuly the combination of this file and the implmentation will give you an perspective on how I work

## Task

#### Feature 

As a user, I want to see percentage of total budget an item is contributing with, so I can better understand statistics of my inflow or outflow items 

#### Acceptance Criteria 

- Given that I have added at least one item to the budgeting grid 
- When I click on that item 
- Then I want to see a new page with a title corresponding to the item details 
- And route should be dynamic with item ID in it 
- And a subtitle under title should show percentage with red minus sign showing outflow, green plus sign for inflow 
- And a pie chart showing how much of the entire budget this item is contributing with should be on that page 
- And no other items from the budget should be on that pie chart 
- And there should be a back button to return back to the previous route 
- And the view should be mobile and desktop compatible 

## General Strategy

Will be following `top-down` approach for building react components.

## Process / Steps

1) Decided to use `npm` instead of `yarn` since `package-lock` was the most recent updated file
2) Added `.nvmrc` file to enforce `node` version
```bash
echo $(nvm current) > .nvmrc
```
3) Added click to row, wrapping existing row with Router (`BudgetGridRowDetails`)
4) Added bare component to show details for a budget (`BudgetDetails`)
