# TwoHearts Connect

============================================================
TWOHEARTS — CONTINUE EXISTING BUILD
============================================================

You are taking over an existing TwoHearts project that was previously
worked on by another AI builder.

DO NOT start the project from scratch.

The previous builder successfully accessed the GitHub repository and
began implementing the project using React + Capacitor for Android
packaging.

Your job is to CONTINUE the existing implementation.

============================================================
0. GITHUB CONNECTOR & PERMISSION CHECK — DO THIS FIRST
============================================================

BEFORE making ANY code changes, verify the GitHub connection and
repository access.

Expected repository:

https://github.com/https10011/TwoHearts

Check ALL of the following:

1. Is the GitHub connector currently connected?
2. Can you access the TwoHearts repository?
3. Can you read the repository contents?
4. Can you access the relevant/default branch?
5. Do you have the necessary permissions to modify the repository?
6. Can you create and edit files in the repository?

DO NOT begin implementation until this check succeeds.

------------------------------------------------------------
IF ACCESS AND PERMISSIONS ARE SUCCESSFUL
------------------------------------------------------------

If:

- the connector is connected
- the repository is accessible
- the repository can be read
- the relevant branch is accessible
- the necessary write permissions are available

THEN:

PROCEED WITH THE BUILD.

Do not stop after reporting that access works.

Immediately continue from the existing implementation described below.

Do not ask the owner to manually recreate files that already exist.

------------------------------------------------------------
IF ACCESS FAILS
------------------------------------------------------------

STOP BEFORE MAKING CODE CHANGES.

Clearly identify the actual problem.

Classify it as one of:

CONNECTOR PROBLEM
- GitHub connector is not connected.
- Authentication failed.
- Repository cannot be reached through the connector.

PERMISSION PROBLEM
- Repository can be read but cannot be modified.
- Write permissions are missing.
- The connected GitHub account cannot edit the repository.

REPOSITORY PROBLEM
- Repository cannot be found.
- Expected branch cannot be accessed.
- Required repository contents cannot be read.

OTHER ACCESS PROBLEM
- Explain the exact issue preventing work.

Do NOT guess.

Do NOT claim that access failed without actually checking.

Do NOT create a replacement project if the repository cannot be
accessed.

If access fails, report:

- connector status
- repository read-access status
- repository write-access status
- exact error/problem
- whether it is a connector, permission, repository, or other issue
- what must be fixed before implementation can continue

The connection check is a GATE, not a separate task.

============================================================
CURRENT PROJECT STATE
============================================================

The previous builder stopped because its credits ran out.

Repository access was successfully verified previously.

The previous builder confirmed:

- GitHub connector worked
- repository was readable
- repository was writable
- branch was accessible

The repository contained:

- MasterPrompt.txt
- TwoHeartsRDMap.txt
- 77 UI reference screens

The implementation has now ALSO been started in the repository.

Therefore:

THIS IS NOT A NEW PROJECT.

There is already implementation work that must be preserved.

============================================================
IMPORTANT — DO NOT RESTART
============================================================

DO NOT:

- delete the existing implementation
- recreate the project from scratch
- replace the current architecture without a real technical reason
- rebuild completed systems unnecessarily
- recreate existing customization files
- recreate the existing design system

FIRST inspect the current implementation enough to understand what
already exists.

Then continue from the next genuinely incomplete area.

============================================================
CURRENT IMPLEMENTATION ALREADY COMPLETED
============================================================

The previous builder already completed the following.

------------------------------------------------------------
1. CAPACITOR FOUNDATION
------------------------------------------------------------

Installed:

- @capacitor/core
- @capacitor/cli
- @capacitor/android
- @capacitor/preferences
- @capacitor/local-notifications
- @capacitor/app
- @capacitor/status-bar
- @capacitor/haptics

The project uses:

REACT
+
CAPACITOR
+
ANDROID

Do NOT remove Capacitor.

Do NOT convert this into a browser-only website.

Do NOT replace Capacitor with another wrapper.

------------------------------------------------------------
2. TW0HEARTS DESIGN SYSTEM
------------------------------------------------------------

Already implemented:

src/styles.css

It contains the TwoHearts design system including:

- burgundy primary accent
- warm cream
- blush
- rose
- sand
- gold
- serif display typography
- sans-serif body typography
- mobile card styling
- press states
- safe-area utilities
- dark mode
- system-wide text-size scaling

Text sizes:

- Small
- Default
- Large
- Extra Large

Do not rebuild this from scratch.

Preserve and extend it when necessary.

------------------------------------------------------------
3. OWNER CUSTOMIZATION SYSTEM
------------------------------------------------------------

Already implemented:

src/customization/

Files include:

branding.ts
theme.ts
content.ts
notifications.ts
defaults.ts

These centralize customizable values such as:

- branding
- theme
- default text
- notification text
- notification channels
- reminder defaults
- Period Tracker defaults
- security defaults
- mood defaults

Preserve this architecture.

------------------------------------------------------------
4. GAME CUSTOMIZATION SYSTEM
------------------------------------------------------------

Already implemented:

src/customization/games/

Including:

catalogue/index.ts
wouldYouRather
thisOrThat
coupleTrivia
trivia
emojiGuess
words
riddles
twoTruths
twentyQuestions
memoryMatch

Game content is intentionally separated from the game engines.

The owner must be able to customize:

- questions
- answers
- choices
- prompts
- categories
- descriptions

without rewriting game engine code.

Do NOT move game content into components or Activities.

The existing comments explaining how to edit/add/remove content must
be preserved.

============================================================
REMAINING IMPLEMENTATION
============================================================

The remaining major areas include:

1. Logo/icon SVG assets
2. Local storage layer
3. Versioned storage/schema strategy
4. Repositories
5. Notification service
6. Mobile application shell
7. Top bar
8. Bottom navigation
9. Sheets/dialogs
10. Android back-button handling
11. Onboarding
12. Home
13. Us / Relationship
14. Memories
15. Notes
16. Timeline
17. Reminders
18. Our Places
19. Mood
20. Period Tracker
21. Private Vault
22. Settings
23. Search
24. Notification Center
25. Game engines
26. Functional gameplay
27. capacitor.config.ts
28. Android project
29. GitHub Actions APK workflow
30. README.md
31. TWOHEARTS_CUSTOMIZATION_GUIDE.md

============================================================
SOURCE OF TRUTH
============================================================

The repository contains:

MasterPrompt.txt
TwoHeartsRDMap.txt
77 UI reference screens

These are the project's source-of-truth materials.

Use them together.

MASTER PROMPT
→ implementation rules, architecture, privacy, functionality,
  customization, notifications, sustainability

ROADMAP
→ feature and screen architecture

77 UI REFERENCES
→ visual design and screen references

Match screens by:

- title
- purpose
- visual content
- feature context

Do NOT assume that a reference screen number equals the roadmap
screen number.

The numbering inconsistencies are expected.

============================================================
NO REDUNDANCY
============================================================

Before implementing a new screen or feature:

Compare against:

- TwoHeartsRDMap.txt
- MasterPrompt.txt
- existing implementation
- existing UI reference screens

If the feature already exists:

DO NOT CREATE A DUPLICATE.

If it exists partially:

EXTEND THE EXISTING IMPLEMENTATION.

If it is genuinely missing:

IMPLEMENT IT.

Do not create redundant screens simply because numbering differs.

============================================================
NATIVE-LIKE MOBILE REQUIREMENT
============================================================

This project is intentionally using React + Capacitor because the
final application will be packaged as an Android APK.

The application must NOT feel like a generic website inside an APK.

Build the UI specifically as a mobile application.

Use:

- safe-area handling
- mobile-first layouts
- native-like navigation
- proper touch targets
- Android back-button behavior
- Capacitor native APIs where appropriate
- local device storage
- native Android notifications through Capacitor
- mobile transitions and interaction states

The final APK should feel like a deliberately designed mobile app,
not a desktop website squeezed into a phone.

Do NOT create:

- desktop-first layouts
- browser navigation
- webpage-style menus
- generic website components
- WebView-based architecture

============================================================
OFFLINE-FIRST
============================================================

TwoHearts V1 remains:

OFFLINE-FIRST
LOCAL-FIRST
PRIVATE
NO MANDATORY BACKEND

Core functionality must work with:

Wi-Fi OFF
+
Mobile Data OFF

Do NOT introduce:

- Firebase
- Supabase
- mandatory cloud database
- mandatory online authentication
- cloud synchronization
- remote APIs
- mandatory internet

Capacitor local storage and native device functionality should be
used instead.

============================================================
LOCAL STORAGE
============================================================

Continue by implementing a sustainable local storage architecture.

Use the existing project architecture and appropriate Capacitor
storage mechanisms.

Persistent application data should include appropriate entities such
as:

- profile
- relationship
- important dates
- memories
- notes
- timeline
- reminders
- places
- moods
- period tracker
- vault
- game progress
- game statistics
- achievements
- settings
- notification schedules

Do not put all application data into one uncontrolled object.

Use versioned storage/schema handling so future changes do not require
destroying user data.

============================================================
REPOSITORY / DATA SEPARATION
============================================================

Maintain:

UI
↓
Business Logic
↓
Repository
↓
Local Storage

Do not scatter storage logic throughout components.

Do not hard-code data that should be persistent.

============================================================
NOTIFICATIONS
============================================================

Notifications are a critical feature.

Use:

@capacitor/local-notifications

and the appropriate Android native scheduling behavior.

Notifications must be real Android system notifications.

They must NOT depend on:

- browser notifications
- JavaScript timers
- an open application screen
- web push
- Firebase
- backend servers

Handle:

- notification permission
- scheduled reminders
- reminder editing
- reminder deletion
- duplicate prevention
- notification channels
- reboot/rescheduling where supported
- timezone changes where appropriate
- Period Tracker schedule changes

Do not create notification spam.

============================================================
APP SHELL
============================================================

Implement the main mobile application shell.

Include as appropriate:

- top bar
- bottom navigation
- screen navigation
- sheets
- dialogs
- safe-area support
- Android back-button handling
- consistent transitions
- global font-size scaling

Navigation must actually work.

Do not create static mockups.

============================================================
FUNCTIONALITY
============================================================

Every implemented screen must be functional.

Examples:

Add Memory
→ opens editor
→ saves locally

Save
→ persists data

Delete
→ confirmation
→ removes data

Reminder
→ persists reminder
→ schedules notification

Game
→ launches actual gameplay

Settings
→ changes actual settings

Search
→ searches local data

Back
→ behaves correctly

Do not implement screenshot-only pages.

============================================================
GAMES
============================================================

Implement games as functional systems.

Keep:

game content
≠
game engine
≠
game state
≠
game UI
≠
statistics

Changing one game's content must not break another game.

Continue using:

src/customization/games/

for customizable content.

============================================================
PERIOD TRACKER
============================================================

Period Tracker is completely local/offline in V1.

Implement the roadmap's Period Tracker functionality including:

- Home
- Calendar
- Log Period
- Cycle Details
- Cycle History
- Settings
- Reminders
- Privacy
- First-Time Setup

Calculations happen locally.

Predictions must clearly be presented as:

ESTIMATED

Do not present predictions as guaranteed medical information.

Do not introduce online health services.

============================================================
PRIVATE VAULT
============================================================

Vault data is sensitive.

Do not allow Vault content to accidentally appear in:

- Global Search
- notifications
- home previews
- ordinary content lists

unless explicitly permitted.

============================================================
CUSTOMIZATION
============================================================

Preserve the existing:

src/customization/

system.

The owner should be able to customize:

- photos
- logos
- icons
- colors
- default text
- notification text
- game questions
- game answers
- choices
- reminders
- Period Tracker defaults
- other reasonable configurable content

Normal customization should not require editing unrelated feature
logic.

============================================================
CUSTOMIZATION GUIDE
============================================================

The final repository MUST contain:

TWOHEARTS_CUSTOMIZATION_GUIDE.md

It must use the ACTUAL paths from the completed project.

Explain how to change:

- welcome photo
- logo
- icons
- colors
- font/text-size defaults
- default text
- notification text
- game questions
- game answers
- game choices
- reminder defaults
- Period Tracker defaults
- other owner-customizable content

Also include:

"WHERE DO I CHANGE THIS?"

with a quick index.

Do not invent paths.

Only document paths that actually exist.

============================================================
README
============================================================

Create:

README.md

It should explain:

- TwoHearts V1
- React + Capacitor architecture
- Android packaging
- offline/local-first design
- project structure
- customization
- game content
- storage
- notifications
- GitHub Actions
- APK generation

============================================================
GITHUB ACTIONS
============================================================

Create a GitHub Actions workflow capable of producing an Android APK.

The workflow should:

1. Checkout repository
2. Configure Node
3. Install dependencies
4. Build the React application
5. Sync Capacitor
6. Configure/build Android
7. Generate APK
8. Upload APK as a workflow artifact

The owner should be able to:

EDIT
→ PUSH TO GITHUB
→ RUN ACTION
→ DOWNLOAD APK
→ INSTALL ON ANDROID

No proprietary cloud build service should be required.

============================================================
IMPLEMENTATION ORDER
============================================================

Continue systematically.

NEXT:

PHASE 1 — Storage layer
PHASE 2 — App shell
PHASE 3 — Onboarding
PHASE 4 — Home / Relationship
PHASE 5 — Memories
PHASE 6 — Notes
PHASE 7 — Timeline
PHASE 8 — Reminders + notification engine
PHASE 9 — Games framework
PHASE 10 — Games
PHASE 11 — Our Places
PHASE 12 — Mood
PHASE 13 — Period Tracker
PHASE 14 — Vault + App Lock
PHASE 15 — Settings
PHASE 16 — Search
PHASE 17 — Notification Center
PHASE 18 — Android/Capacitor integration
PHASE 19 — GitHub Actions
PHASE 20 — Documentation

============================================================
CRITICAL CONTINUATION RULE
============================================================

Do NOT stop after inspecting the repository.

If the connector works and the repository is writable:

BUILD.

If you discover an implementation problem:

Diagnose it and fix it where possible.

If you encounter an issue that genuinely prevents progress:

Stop and clearly explain the issue.

Do not silently work around a repository access or permission
problem.

Do not claim completion without actually making the changes.

============================================================
FINAL PRINCIPLE
============================================================

Do not think:

"Convert screenshots into a website."

Think:

"Continue building the complete TwoHearts mobile application using
React + Capacitor, with a native Android experience, offline/local-first
architecture, real Android notifications, functional features,
modular code, and extensive owner customization."

Preserve what is already built.

Continue from where the previous builder stopped.

Do not restart.

============================================================
START NOW
============================================================

FIRST:

Perform the GitHub connector + repository + permission check defined
in Section 0.

IF SUCCESSFUL:

Inspect the current implementation briefly.

Then immediately continue from:

STORAGE LAYER
+
APP SHELL

IF UNSUCCESSFUL:

STOP and clearly report whether the problem is:

- connector
- permission
- repository
- other access issue

Do not make unrelated changes until repository access is resolved.
============================================================

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eae374cb-e2c0-4afe-a8a8-c1253cf73f68).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
