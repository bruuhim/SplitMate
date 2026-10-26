# SplitMate — A-to-Z Beginner Project Plan

**Repository:** https://github.com/bruuhim/SplitMate  
**Plan checked against repository:** 26 October 2026  
**Team:** 2 beginner developers  
**Target:** Complete the required MVP first, then add the standard features and bonuses if time allows.

## 1. Repository check: current status

I checked the GitHub repository before writing this plan.

- The repository is public and its default branch is **develop**.
- The existing branches are **main**, **develop**, **feature/dashboard**, **feature/groupes**, **feature/membres**, **feature/depenses**, **feature/soldes**, and **feature/filtres**.
- The six feature branches currently point to the same starting commit as develop. That means no feature work has diverged yet.
- There are currently no pull requests.
- The expected source files and folders exist: index.html, css/style.css, and the JavaScript modules listed in the brief.
- The source files are empty placeholders. This is expected because coding has not started. README.md contains only a short project description.
- The latest develop commit includes the initial README and project structure.

**Collaborator check:** the repository can be viewed publicly, but this check did not confirm whether your friend has accepted a collaborator invitation because her GitHub username was not provided. Check Settings → Collaborators and make sure she accepts the invitation so she can push branches to this repository.

## 2. What you are building

SplitMate is a browser-based app for groups of friends, roommates, and travelers to track shared expenses. It has no backend, no account system, and no authentication. Store the data in the browser with LocalStorage.

### Choose a beginner-friendly stack

- **HTML5** for page structure and forms.
- **Bootstrap 5** for responsive layout, cards, buttons, navigation, forms, and modals.
- **One custom stylesheet:** css/style.css, for SplitMate colours and custom styling.
- **Vanilla JavaScript ES6+** with ES modules. Do not mix Bootstrap and Tailwind in the same project.
- **LocalStorage** for persistence. No server or database is required.
- Use VS Code and its Live Server extension to run the page. Because the project uses JavaScript ES modules, open it through Live Server rather than relying on double-clicking index.html.

Start without npm, a framework, a chart library, or a backend. A CSS progress bar is enough for the category chart.

## 3. Understand the Git branches

- **main:** final, stable version. Do not code directly here.
- **develop:** shared integration version. Completed features are merged here after review and testing.
- **feature/dashboard, feature/groupes, feature/membres, feature/depenses, feature/soldes, feature/filtres:** working branches for individual features.

A feature branch is a workspace, not a separate person account. Give each feature one main owner. A developer creates a feature branch from develop, makes commits, pushes it, and opens a Pull Request (PR) whose base is develop. The other teammate reviews it. Merge develop into main only after final validation.

All six feature branches already exist. **Do not create duplicates.** If you need to start a fresh feature, update the existing branch from origin/develop first.

## 4. How both of you can work on HTML and CSS

You can both work on HTML and CSS, but you must divide the files into clearly owned sections. If both people edit the same lines at the same time, Git may report a merge conflict.

### Phase A — work together on the foundation

Start on feature/dashboard. Pair-program this first step together:

1. Create the basic page structure in index.html.
2. Add a sidebar/navigation, page header, and main content area.
3. Put empty section containers in place for Dashboard, Groups, Members, Expenses, Balances/Refunds, and Filters.
4. Add clear HTML comments around each section so it is easy to find its boundary.
5. In css/style.css, create labelled blocks for global layout, Dashboard, Groups/Members, Expenses, Balances/Refunds, Filters, and Responsive rules.
6. Use Bootstrap classes for the grid and standard components; use css/style.css for your own colours, spacing, small layout fixes, and mobile tweaks.
7. Commit the foundation, open a PR into develop, review it together, and merge it.

Swap driver/navigator roles while pair-programming: one person types while the other reads the brief, checks the layout, and tests it. Then switch roles. This lets both beginners practise HTML and CSS.

### Phase B — split the sections after the foundation is merged

Once the foundation is on develop, each person edits their assigned HTML section and CSS block. The empty section containers and CSS comment blocks should already exist. Do not both append new code to the very end of the same file.

- **You:** Dashboard, Groups, and Members sections and their CSS blocks.
- **Your friend:** Expenses, Balances/Refunds, and Filters sections and their CSS blocks.
- **You (integration owner):** global navigation, shared layout, global styles, main.js, and the final integration.
- **Both:** test the complete page at desktop and mobile widths; discuss changes to shared layout before making them.

If you find this single-file arrangement too confusing, tell your teammate before changing the architecture. You can add separate CSS files per feature, but keep the structure simple unless there is a clear need.

**Important:** after the foundation PR is merged, both developers must bring the latest develop into their feature branch before continuing. The existing branches were created before any feature code was written, so synchronise them after the first merge.

## 5. Task ownership

Use these as primary owners, not as a reason to refuse help. You can pair-program when one of you gets stuck, but avoid both independently editing the same section at once.

| Work item / branch | Primary owner | Main responsibility |
|---|---|---|
| feature/dashboard | You | Shared page shell, navigation, dashboard HTML/CSS and dashboard statistics |
| feature/groupes | You | Group create/read/update/delete and group cards |
| feature/membres | You | Add/edit/delete members and prevent invalid deletions |
| feature/depenses | Your friend | Expense forms, CRUD, equal/custom shares and validation |
| feature/soldes | Your friend | Member balances, suggested reimbursements, completed reimbursements |
| feature/filtres | Your friend | Search, category/payer/date filters and sorting |
| Shared integration | You coordinate; both review | Main event flow, LocalStorage integration, responsive checks and final QA |

Both people should contribute interface code, not only JavaScript. The shared skeleton lets each person edit separate HTML and CSS sections. The primary owner is responsible for submitting the PR and responding to review comments.

## 6. Suggested file responsibilities

Keep the starter architecture from the brief:

- **index.html:** app shell, navigation, forms, section containers, and the Bootstrap/custom CSS links. Use one page and show/hide sections with JavaScript so normal CRUD actions do not reload the page.
- **css/style.css:** shared design tokens, layout, feature-specific styles separated by comments, responsive rules.
- **js/main.js:** startup, load initial data, register events, call feature functions, save changes, and refresh the screen.
- **js/storage.js:** load and save the entire application state to LocalStorage.
- **js/groups.js:** group operations and group-specific validation.
- **js/members.js:** member operations and deletion rules.
- **js/expenses.js:** expense operations, equal/custom shares, and expense validation.
- **js/sales.js:** balance calculations and reimbursement suggestions/completion. The filename is specified by the brief, even though the feature is not sales.
- **js/filters.js:** search, filtering, and sorting expenses.
- **js/ui.js:** render data into the DOM, show toasts, and handle confirmation prompts.
- **js/utils.js:** shared ID creation, date/currency formatting, and reusable validation helpers.

Do not put all of the app into main.js. Keep functions small and give each module one clear responsibility. Use export and import where one module needs a function from another.

## 7. Agree on the data model before coding

The brief gives these main entities. You may use English property names in JavaScript, provided both people agree and use the same names everywhere.

~~~js
const initialState = {
  groups: [],
  members: [],
  expenses: [],
  refunds: []
};
~~~

Suggested records:

~~~js
// Group
{
  id: "unique-id",
  name: "Weekend Trip",
  description: "Trip expenses",
  currency: "EUR",
  startDate: "2026-10-26",
  closed: false
}

// Member
{
  id: "unique-id",
  groupId: "group-id",
  name: "Sara",
  nickname: "Sasa"
}

// Expense
{
  id: "unique-id",
  groupId: "group-id",
  title: "Groceries",
  amount: 60,
  category: "Shopping",
  date: "2026-10-26",
  payerId: "member-id",
  shares: [
    { memberId: "member-id", amount: 30 },
    { memberId: "another-member-id", amount: 30 }
  ]
}

// Refund
{
  id: "unique-id",
  groupId: "group-id",
  fromMemberId: "debtor-id",
  toMemberId: "creditor-id",
  amount: 10,
  date: "2026-10-26",
  completed: false
}
~~~

The extra completed field is needed to represent the requirement to mark a reimbursement as completed; it is missing from the brief's sample refund object.

### Agree on these rules

1. Each ID is unique. Use the same ID references throughout the app.
2. A member and the expense payer must belong to the selected group.
3. Each expense has a positive amount and at least one member share.
4. The sum of all shares must equal the expense total to two decimal places.
5. In equal split, distribute any leftover cent correctly. For example, 10.00 divided between three members becomes 3.34, 3.33, and 3.33.
6. A payer may also be included in the shares.
7. A member who is used as an expense payer or share cannot be deleted. Show an explanation instead.
8. Deleting a group requires confirmation and should clearly warn that its related members, expenses, and refunds will also be removed.
9. Closing a group should distinguish it from an open group. Decide together whether closed groups should prevent new expenses; make the behaviour visible.
10. Store all arrays together under one LocalStorage key such as splitmate-data-v1 so data is easy to load and back up.
11. Never use display names as IDs. Two people can have the same name.

A simple approach is to let main.js load a state object, pass that state into feature functions, replace it with the returned updated state, save it, and refresh the UI. This avoids each module independently loading and overwriting LocalStorage.

## 8. Build order: nine working days

The brief's launch is Monday, 26 October 2026, and the deadline is written as 05/11/2026. Assuming the French day/month/year format, this means Thursday, 5 November 2026. The nine working days are 26–30 October and 2–5 November. The scenario assessment window is 3–5 November, so keep the MVP working before that period.

### Day 1 — Monday, 26 October: setup and UI foundation

**Both together**
- Verify collaborator access and ensure both can clone the repository.
- Agree to use Bootstrap 5, not Bootstrap and Tailwind together.
- Pair-program the page shell and blank section containers.
- Agree on the data model and CSS/HTML section ownership.
- Merge the foundation PR into develop.
- Update each feature branch from origin/develop.

**Done when:** the page opens via Live Server, the navigation is visible, all main sections have placeholders, and the layout does not overflow on mobile.

### Day 2 — Tuesday, 27 October: groups and members scaffolding

**You — feature/groupes**
- Build the group form and groups list/cards in your HTML section.
- Style them in the Groups CSS block.
- Implement add and list functions first; then edit and delete.
- Add currency, start date, description, and open/closed status.

**Friend — feature/depenses**
- Build the expense form layout in her HTML section.
- Style inputs, buttons, amount field, category, date, payer, and involved-member area.
- Use temporary sample options only until the real groups/members data is connected.
- Do not bypass the agreed data model.

**Done when:** groups can be created and displayed without reloading the page, and the expense form layout is ready to connect.

### Day 3 — Wednesday, 28 October: members and basic expense CRUD

**You — feature/membres**
- Add, list, edit, and delete members.
- Provide name and nickname fields.
- Block deletion if the member appears as a payer or in an expense share.

**Friend — feature/depenses**
- Implement creating, viewing, editing, and deleting expenses.
- Load group members and payer options from the shared state.
- Implement equal splitting for selected members.
- Validate that the payer belongs to the group.

**Together:** integrate the modules and resolve the first PR conflicts.

**Done when:** members and equal-split expenses can be managed with valid data.

### Day 4 — Thursday, 29 October: validation and custom shares

**You**
- Finish LocalStorage functions in storage.js and reusable helpers in utils.js.
- Ensure loading missing or malformed saved data does not crash the app.
- Confirm all mutations can save updated state.

**Friend**
- Add custom share amounts.
- Validate positive amounts, at least one involved member, and the exact sum of shares.
- Recalculate shares when an expense is edited.

**Done when:** data survives refresh, and invalid expenses cannot be saved.

### Day 5 — Friday, 30 October: balances and dashboard data

**You**
- Connect real group/member/expense totals to the dashboard.
- Show the number of groups, members, and total expenses.
- Show recent expenses and category totals.
- Add clear empty states when no data exists.

**Friend**
- Calculate each member's balance.
- Show creditors and debtors.
- Generate suggested repayments, such as “Sara owes 24.50 EUR to Karim.”
- Add refund completion and recalculate balances after it changes.

**Done when:** dashboard statistics reflect actual state, and simple manual balance examples produce the expected answer.

### Weekend — 31 October and 1 November: optional buffer

Use this time only if necessary. Review what you have learned, fix small problems, and practise explaining each other's code. Do not spend the weekend polishing bonus features while required features are broken.

### Day 6 — Monday, 2 November: filters and full integration

**You**
- Connect navigation and shared event handling in main.js.
- Check that UI updates happen without a page reload.
- Review group/member constraints and cascade deletion behaviour.

**Friend**
- Implement search by expense title.
- Add category, payer, and period filters.
- Add date and amount sorting.
- Display a helpful message when no results match.

**Both**
- Merge finished PRs into develop and test them together.
- Resolve import/export and naming mismatches before adding more features.

**Done when:** feature modules work together using the same state and filters return consistent results.

### Day 7 — Tuesday, 3 November: persistence and scenario readiness

- Recheck save/load after refreshing the browser.
- Test a complete scenario: create a group, add three members, record expenses, view balances, and complete a repayment.
- Fix the most important bugs first.
- Ensure all required ES6 features are used naturally: destructuring, spread/rest, arrow functions, map, filter, reduce, and sort.
- Prepare to explain the code and change a small interaction during assessment.

**Done when:** the MVP scenario can be demonstrated reliably.

### Day 8 — Wednesday, 4 November: responsive design and regression tests

- Test mobile and desktop widths.
- Check keyboard-friendly form labels, required fields, empty states, toasts, and deletion confirmations.
- Test editing and deleting an expense updates dashboard totals and balances.
- Verify a completed reimbursement isn't counted twice.
- Add the JSON export bonus only if the required features are working.

**Done when:** the core features pass the manual checklist in section 11.

### Day 9 — Thursday, 5 November: final release and presentation

- Stop adding new features; fix high-impact defects.
- Test the whole app from a clean LocalStorage state.
- Check README setup instructions and the Git history.
- Merge develop into main only after both teammates approve.
- Prepare a 10-minute presentation and practise the demo.
- Each person should explain their own module and at least one module written by the other person.

**Done when:** main contains the validated version, the demo works, and both teammates can explain the application logic.

## 9. Git workflow: exact commands

### Start work on an existing feature branch

Run from the project folder. Replace the branch name for the feature you own.

~~~powershell
git fetch origin
git switch feature/dashboard
git merge origin/develop
~~~

For example, use feature/groupes for group work or feature/depenses for expense work. If Git says the branch does not exist locally, create a tracking branch with:

~~~powershell
git switch --track origin/feature/dashboard
~~~

Then merge origin/develop if develop has advanced since that branch was created.

### Save and push your work

~~~powershell
git status
git add .
git commit -m "feat: add group management"
git push -u origin feature/groupes
~~~

Use a message that describes the change. Examples:
- feat: add member management
- feat: validate custom expense shares
- fix: prevent deleting members with expenses
- style: improve mobile dashboard layout
- docs: add project plan

### Open a Pull Request

1. Open the repository on GitHub.
2. Choose Compare & pull request for your feature branch.
3. Set **base = develop** and **compare = your feature branch**.
4. Explain what changed and how you tested it.
5. Ask the other teammate to review.
6. Merge only after both understand the changes and the app still works.

### After a PR is merged

~~~powershell
git fetch origin
git switch develop
git pull origin develop
~~~

Before starting more work on an existing feature branch, merge the latest origin/develop into it. Never use a force push to fix an unfamiliar Git problem. If a conflict appears, stop, read the conflicting file, and ask your teammate for help before accepting either version blindly.

## 10. Recommended order of implementation

Implement features in this dependency order:

1. Page shell and data model.
2. Group CRUD.
3. Member CRUD and deletion rules.
4. Equal-split expenses.
5. Custom shares and expense editing/deletion.
6. Balance calculations.
7. Reimbursement suggestions and completion.
8. LocalStorage validation and integration.
9. Search, filters, and sorting.
10. Dashboard statistics using real state.
11. Responsive polish and JSON export bonus.

Although the dashboard starts first visually, some of its statistics cannot be real until the group, member, and expense data exists. Start with placeholders, then connect the real numbers later.

## 11. Manual test checklist

### Groups
- [ ] Create a group with name, description, currency, and start date.
- [ ] Edit the group and confirm the updated values appear.
- [ ] Delete a group only after confirmation.
- [ ] Open and closed groups are visually different.

### Members
- [ ] Add and edit a member.
- [ ] Delete a member who has never been used.
- [ ] Attempt to delete a member used by an expense and confirm deletion is blocked with an explanation.

### Expenses
- [ ] Create an expense and select the correct group, payer, and involved members.
- [ ] Equal shares add up to the total, including a total such as 10.00 shared by three people.
- [ ] Reject zero, negative, or missing amounts.
- [ ] Reject a missing member selection.
- [ ] Reject shares whose sum differs from the expense total.
- [ ] Reject a payer from another group.
- [ ] Edit or delete an expense and verify totals update.

### Balances and refunds
- [ ] Check one simple example manually before trusting the calculation.
- [ ] Creditor and debtor signs are correct.
- [ ] Suggested repayments reduce the outstanding balances only when marked completed.
- [ ] The same completed repayment is never applied twice.

### Persistence and filters
- [ ] Create data, refresh the browser, and confirm the data remains.
- [ ] Search by title.
- [ ] Filter by category, payer, and date range.
- [ ] Sort by date and amount.
- [ ] Show an empty state when there are no matches.

### Interface and code
- [ ] Operations update the DOM without reloading the page.
- [ ] Toasts or clear validation messages appear.
- [ ] Mobile and desktop layouts are usable.
- [ ] ES modules use clear import/export boundaries.
- [ ] Code uses the required ES6 features for a meaningful purpose.
- [ ] Both developers can describe their code and make a small change live.

## 12. Important balance calculation note

A member's starting balance is:

**balance = expenses paid − expense shares owed**

A positive balance means the member should receive money; a negative balance means the member owes money.

When a repayment is completed, add the amount to the payer of that repayment's balance and subtract it from the recipient's balance. Recompute the suggested repayment list after each completed repayment. Keep suggested repayments separate from completed transactions so the same payment is not counted twice.

For money, work to two decimal places consistently. Avoid comparing raw floating-point sums without rounding to cents.

## 13. Map the work to the required user stories

| Story | Planned implementation |
|---|---|
| US01 — Manage groups | feature/groupes |
| US02 — Manage members | feature/membres |
| US03 — Record shared expense | feature/depenses |
| US04 — Edit/delete expense | feature/depenses |
| US05 — Check balances | feature/soldes |
| US06 — Know who reimburses whom | feature/soldes |
| US07 — Search/filter/sort | feature/filtres |
| US08 — Dashboard | feature/dashboard |
| US09 — Restore data after update/refresh | storage.js and integration |
| US10 — Mobile and desktop | shared HTML/CSS and QA |

## 14. Presentation outline (10 minutes)

1. **1 minute:** problem, target users, and what SplitMate solves.
2. **2 minutes:** create a group and add members.
3. **2 minutes:** record an expense, demonstrate equal/custom shares, and show validation.
4. **2 minutes:** show balances and complete a reimbursement.
5. **1 minute:** show search/filter/sort and dashboard statistics.
6. **1 minute:** refresh to demonstrate LocalStorage.
7. **1 minute:** explain the module architecture, Git branches, and one problem you solved.

Both team members should speak and answer questions. Do not rely on a feature neither of you can explain.

## 15. Keep scope realistic

**MVP — do these first:** groups, members, equal expenses, balance calculation, LocalStorage, and a usable responsive interface.

**Standard — after MVP works:** custom shares, repayment optimization, filters, real dashboard statistics, and toasts.

**Bonus — only when stable:** JSON export/import, dark mode, category chart, recurring expenses.

Do not add a backend, authentication, a new framework, or a complicated build system. They are outside the brief and will cost valuable time.

## Final rule

**Build a small working feature, commit it, test it, open a PR, review it, and merge it into develop. Repeat.** A simple working app that both teammates can explain is better than a large interface full of broken buttons.
