# Todoist Web App - Implementation Task List

## Phase 1: Project Setup & Foundation (Tickets #1-8)

### **Ticket #1: Initial Next.js Project Setup**

1. Initialize Next.js 14+ project with App Router
2. Configure TypeScript with strict mode
3. Set up ESLint and Prettier
4. Create basic folder structure (/app, /components, /lib, /types)
5. Set up Tailwind CSS for styling
6. Configure path aliases (@/ for imports)
7. Install testing dependencies (@testing-library/react, @testing-library/jest-dom, jest, @playwright/test)
8. Configure Jest with Next.js test utilities
9. Set up Prettier configuration (.prettierrc, .prettierignore)
10. Install and configure Husky for git hooks
11. Set up lint-staged for pre-commit code quality
12. Install and configure commitlint for conventional commits
13. Create .env.example with all required variables
14. Set up environment variable validation with Zod
15. Create comprehensive README with setup instructions
16. Add NPM scripts for lint, format, test, type-check
17. Configure .vscode/settings.json for consistent IDE experience

### **Ticket #2: Database Schema Design & Setup**

1. Choose database (PostgreSQL recommended via Supabase/Vercel Postgres)
2. Design schema for: users, projects, tasks, labels, filters, comments
3. Set up Prisma ORM or Drizzle ORM
4. Create initial migrations
5. Set up database connection and client

### **Ticket #3: Authentication System**

1. Implement NextAuth.js or Clerk
2. Create sign up, login, logout flows
3. Set up session management
4. Create protected route middleware
5. Build auth UI components (login/signup forms)

### **Ticket #4: Base Layout & Navigation**

1. Create main app layout with sidebar
2. Build responsive navigation structure
3. Implement sidebar toggle for mobile
4. Create top header with user menu
5. Set up basic routing structure

### **Ticket #5: Design System & UI Components**

1. Create design tokens (colors, spacing, typography)
2. Build reusable UI components library:  
    a) Button  
    b) Input  
    c) Checkbox  
    d) Select  
    e) Modal/Dialog  
    f) Dropdown  
    g) Tooltip  
    h) Date picker component  
    i) Icons library (Lucide or Heroicons)
3. Implement dark/light theme toggle with system

### **Ticket #6: API Route Structure**

1. Set up Next.js API routes folder structure
2. Create base API utilities and error handling
3. Implement API middleware for auth checks
4. Set up API response types and utilities
5. Create API client/fetcher utilities

### **Ticket #7: State Management Setup**

1. Choose and set up state management (Zustand/Jotai recommended)
2. Create store structure for tasks, projects, UI state
3. Set up React Query for server state
4. Implement optimistic updates pattern
5. Create custom hooks for common operations

### **Ticket #8: Real-time Sync Infrastructure**

1. Set up WebSocket connection or Server-Sent Events
2. Implement real-time data sync strategy
3. Create sync conflict resolution logic
4. Build offline detection and queue system
5. Test sync across multiple browser tabs

## Phase 2: Basic Task Management (Tickets #9-18)

### **Ticket #9: Task Data Model & API**

1. Create Task model with fields:  
   a) id  
   b) title  
   c) description  
   d) due_date  
   e) priority  
   f) completed  
   g) user_id  
   h) project_id
2. Build CRUD API endpoints for tasks
3. Implement validation with Zod
4. Create TypeScript types for tasks
5. Write API tests

### **Ticket #10: Inbox View & Basic Task List**

1. Create Inbox default project
2. Build task list component with virtualization
3. Implement task item component with checkbox
4. Show task count and grouping headers
5. Handle empty states

### **Ticket #11: Task Creation (Quick Add)**

1. Build quick add input component
2. Create task creation modal
3. Implement basic form with title and description
4. Add task creation API call with optimistic updates
5. Add keyboard shortcut (Ctrl/Cmd + K) for quick add
6. Handle form validation and errors

### **Ticket #12: Task Details Panel**

1. Create slide-out task detail panel
2. Display full task information
3. Make title and description editable inline
4. Show creation and modification timestamps
5. Implement panel routing (URL state)

### **Ticket #13: Task Editing & Deletion**

1. Add edit functionality to task items
2. Implement inline editing for task titles
3. Create task update API endpoints
4. Add delete task with confirmation
5. Implement undo/redo for deletions
6. Add keyboard shortcuts (e, del)

### **Ticket #14: Task Completion & Checkboxes**

1. Implement task checkbox interaction
2. Add completion animation
3. Update completed_at timestamp
4. Move completed tasks to separate section
5. Add toggle to show/hide completed tasks
6. Track completion count

### **Ticket #15: Task Priority System**

1. Add priority field to tasks (P1-P4)
2. Create priority picker UI component
3. Style task items by priority (colors, flags)
4. Implement priority sorting
5. Add keyboard shortcuts for priority (1-4)

### **Ticket #16: Task Due Dates**

1. Add due_date field to task model
2. Create date picker component
3. Implement date display formatting (Today, Tomorrow, date)
4. Add overdue visual indicators
5. Support clearing due dates
6. Show tasks without dates in separate section

### **Ticket #17: Natural Language Date Parsing**

1. Integrate date parsing library (chrono-node or date-fns)
2. Parse dates from task input (tomorrow, next Monday, Dec 25)
3. Extract and highlight date text in quick add
4. Auto-fill date picker from parsed text
5. Handle relative dates and recurring patterns basics

### **Ticket #18: Task Sorting & Filtering**

1. Implement sort options (date, priority, name, manual)
2. Add sort dropdown to list header
3. Enable drag-and-drop manual sorting
4. Persist sort preferences per view
5. Create filter UI for basic filtering (completed/active)

## Phase 3: Project Management (Tickets #19-26)

### **Ticket #19: Project Data Model & API**

1. Create Project model with fields:  
   a) id  
   b) name  
   c) color  
   d) icon  
   e) user_id  
   f) favorite  
   g) archived
2. Build CRUD API endpoints for projects
3. Create project list endpoints
4. Implement project-task relationships
5. Add validation and error handling

### **Ticket #20: Projects Sidebar**

1. Build projects list in sidebar
2. Display project names with colors/icons
3. Show task count per project
4. Add favorites section at top
5. Implement project reordering (drag-and-drop)

### **Ticket #21: Project Creation & Management**

1. Create "Add Project" button and modal
2. Build project creation form (name, color, icon picker)
3. Implement project editing
4. Add project deletion with confirmation
5. Handle project archiving/unarchiving

### **Ticket #22: Project View**

1. Create project detail page/view
2. Display project name and metadata in header
3. Show project-specific task list
4. Add project actions menu (edit, archive, delete)
5. Implement project description/notes

### **Ticket #23: Project Sections**

1. Add sections model (belongs to project)
2. Create section CRUD APIs
3. Build section UI within project view
4. Allow adding tasks to specific sections
5. Implement section collapse/expand
6. Enable section reordering

### **Ticket #24: Moving Tasks Between Projects**

1. Add project picker to task detail panel
2. Implement move task API endpoint
3. Update UI optimistically
4. Show move action in activity log
5. Support bulk move (select multiple tasks)

### **Ticket #25: Favorite & Archived Projects**

1. Add favorite toggle to projects
2. Create favorites section in sidebar
3. Implement archive project functionality
4. Create archived projects view
5. Add restore from archive option

### **Ticket #26: Project Templates**

1. Create template model and storage
2. Build template creation from existing project
3. Create template gallery/browser
4. Implement "Create from Template" flow
5. Include sample templates (Work, Personal, etc.)

## Phase 4: Advanced Task Features (Tickets #27-35)

### **Ticket #27: Sub-tasks**

1. Add parent_task_id to task model
2. Create sub-task UI (indented under parent)
3. Implement add sub-task action
4. Show sub-task progress on parent (2/5 completed)
5. Support multiple nesting levels
6. Enable converting tasks to sub-tasks

### **Ticket #28: Task Labels/Tags**

1. Create Label model (id, name, color, user_id)
2. Build label CRUD APIs
3. Create label picker component
4. Display labels on task items (colored badges)
5. Implement label filtering
6. Add labels management page

### **Ticket #29: Task Comments**

1. Create Comment model (task_id, user_id, content, created_at)
2. Build comments API endpoints
3. Add comments section to task detail panel
4. Implement comment creation and editing
5. Show comment timestamps and author
6. Support markdown in comments

### **Ticket #30: File Attachments**

1. Set up file storage (S3, Cloudinary, or Vercel Blob)
2. Create attachment upload API
3. Add file upload to task detail and comments
4. Display attached files with previews
5. Implement file download
6. Add file deletion

### **Ticket #31: Task Description Rich Text**

1. Integrate markdown editor (Tiptap or similar)
2. Add rich text toolbar to description field
3. Support markdown syntax and preview
4. Handle links, lists, code blocks
5. Implement @mentions in descriptions
6. Auto-save description changes

### **Ticket #32: Recurring Tasks**

1. Add recurrence model/fields (pattern, interval, type)
2. Create recurrence picker UI component
3. Implement recurrence engine (generates next occurrence)
4. Support patterns:  
    a) daily  
    b) weekly  
    c) monthly  
    d) yearly
5. Handle completion-based vs date-based recurrence
6. Show recurrence info on task items

### **Ticket #33: Task Search**

1. Implement full-text search backend (Postgres FTS or Algolia)
2. Create search bar in top navigation
3. Build search results page
4. Highlight matching text in results
5. Support search filters and operators
6. Show recent searches

### **Ticket #34: Bulk Task Operations**

1. Add multi-select mode to task lists
2. Create selection checkboxes on tasks
3. Build bulk actions toolbar (complete, delete, move, reschedule)
4. Implement select all/none
5. Add keyboard shortcuts for selection
6. Show selection count

### **Ticket #35: Task Duplication**

1. Add duplicate task action
2. Copy all task attributes and sub-tasks
3. Prompt for modifications (new date, project)
4. Implement duplicate with variations
5. Add to context menu and keyboard shortcut

## Phase 5: Views & Filters (Tickets #36-43)

### **Ticket #36: Today View**

1. Create dedicated Today view page
2. Filter tasks due today or overdue
3. Group by project or priority
4. Show overdue section at top
5. Add motivational header/greeting
6. Display daily productivity stats

### **Ticket #37: Upcoming View**

1. Create Upcoming/Next 7 Days view
2. Group tasks by date (Today, Tomorrow, dates)
3. Show date headers with day names
4. Display no tasks message for empty days
5. Add "Upcoming" to main navigation
6. Implement date range picker (7/14/30 days)

### **Ticket #38: Labels & Filters View**

1. Create all labels overview page
2. Show tasks grouped by label
3. Display label count and color
4. Add filter by multiple labels
5. Implement "no label" filter
6. Create label management from this view

### **Ticket #39: Custom Filter Builder**

1. Create Filter model for saved filters
2. Build query builder UI component
3. Support operators: AND, OR, NOT
4. Implement filter by:  
   a) date  
   b) project  
   c) label  
   d) priority  
   e) assigned  
   f) keyword
5. Create filter preview while building
6. Add filter syntax guide/help

### **Ticket #40: Saved Filters**

1. Implement save filter functionality
2. Display saved filters in sidebar
3. Create filter management page
4. Allow editing filter queries
5. Support filter favoriting
6. Add filter sharing (generate link)

### **Ticket #41: Board View (Kanban)**

1. Create board view layout component
2. Display sections as columns
3. Implement horizontal scrolling
4. Add drag-and-drop between columns
5. Create "Add Task" at bottom of columns
6. Toggle between list and board view

### **Ticket #42: Calendar View**

1. Integrate calendar component (FullCalendar or react-big-calendar)
2. Display tasks on calendar grid
3. Support month, week, day views
4. Enable drag-to-reschedule on calendar
5. Add task creation by clicking dates
6. Show task details on calendar event click

### **Ticket #43: View Preferences & Settings**

1. Create view settings panel
2. Save view preferences per user
3. Implement default view selection
4. Add density options (compact/comfortable)
5. Create view-specific filters
6. Remember last viewed project/filter

## Phase 6: Collaboration Features (Tickets #44-52)

### **Ticket #44: User Profiles**

1. Create user profile model extensions
2. Build profile page with editable info
3. Add avatar upload functionality
4. Display user info in header
5. Create account settings page
6. Implement email preferences

### **Ticket #45: Project Sharing**

1. Create project_members join table
2. Build share project modal
3. Implement invite by email
4. Add user search for existing users
5. Show shared status on projects
6. Create "Shared with me" sidebar section

### **Ticket #46: Role-Based Permissions**

1. Define roles: owner, admin, member, viewer
2. Implement permission checks in API
3. Create role assignment UI
4. Enforce permissions in frontend
5. Add role explanations/tooltips
6. Handle permission denied states

### **Ticket #47: Task Assignment**

1. Add assignee_id to task model
2. Create assignee picker component
3. Display assignee avatar on task items
4. Filter tasks by assignee ("Assigned to me")
5. Show unassigned tasks section
6. Add assignment notifications

### **Ticket #48: @Mentions in Comments**

1. Parse @mentions from comment text
2. Create mention picker dropdown
3. Link mentions to user profiles
4. Send notifications on mention
5. Highlight mentions in rendered text
6. Support @project and @task mentions

### **Ticket #49: Activity Log**

1. Create activity/audit log model
2. Track all task and project changes
3. Build activity feed component
4. Display in project/task sidebars
5. Filter by user or action type
6. Show relative timestamps (2 hours ago)

### **Ticket #50: Real-time Collaboration Updates**

1. Implement presence system (who's viewing)
2. Show real-time task updates from others
3. Display "User X is editing" indicators
4. Handle concurrent edit conflicts
5. Add collaborative cursors (optional)
6. Show online/offline status

### **Ticket #51: Email Notifications**

1. Set up email service (Resend, SendGrid)
2. Create email templates for notifications
3. Implement notification preferences
4. Send emails for: assignments, mentions, comments
5. Add digest emails (daily/weekly summary)
6. Include unsubscribe links

### **Ticket #52: Team Workspaces**

1. Create workspace model (multi-tenant)
2. Build workspace switcher in navigation
3. Implement workspace invitation flow
4. Separate personal vs team workspaces
5. Add workspace settings and management
6. Handle workspace data isolation

## Phase 7: Productivity & Analytics (Tickets #53-58)

### **Ticket #53: Karma Points System**

1. Create karma tracking model
2. Calculate points for task completion
3. Assign points by task attributes (priority, etc.)
4. Build karma display in header
5. Create karma history/log
6. Add daily/weekly goals

### **Ticket #54: Productivity Dashboard**

1. Create dashboard page/view
2. Build completed tasks chart (daily/weekly)
3. Show tasks by project breakdown (pie chart)
4. Display completion streaks
5. Add productivity trends over time
6. Show current week summary

### **Ticket #55: Task Statistics**

1. Calculate total tasks (active, completed)
2. Show completion rate percentages
3. Display average completion time
4. Create project-level statistics
5. Add label usage statistics
6. Build personal insights section

### **Ticket #56: Completion Streaks**

1. Track daily task completion
2. Calculate current and longest streaks
3. Build streak calendar visualization
4. Show streak in karma section
5. Add streak maintenance reminders
6. Celebrate streak milestones

### **Ticket #57: Goals & Targets**

1. Create goals model (daily/weekly targets)
2. Build goal setting interface
3. Track progress toward goals
4. Display goal completion indicators
5. Send goal reminder notifications
6. Show goal history and achievements

### **Ticket #58: Productivity Insights & Tips**

1. Analyze user patterns and habits
2. Generate personalized insights
3. Show most productive times/days
4. Identify underutilized labels/projects
5. Suggest optimizations
6. Create weekly review summary

## Phase 8: Integrations & Extensions (Tickets #59-65)

### **Ticket #59: Email to Task**

1. Generate unique email address per user
2. Set up email receiving service (SendGrid Inbound)
3. Parse incoming emails to tasks
4. Extract title from subject, body as description
5. Support email attachments
6. Add email-to-task instructions page

### **Ticket #60: Google Calendar Integration**

1. Implement OAuth for Google Calendar
2. Build calendar connection flow
3. Sync tasks to calendar as events
4. Support two-way sync (calendar to tasks)
5. Handle sync conflicts and updates
6. Add calendar sync settings

### **Ticket #61: iCal Feed**

1. Generate user-specific iCal URLs
2. Create iCal feed endpoint
3. Include tasks as calendar events
4. Support filtered feeds (by project/label)
5. Add subscribe instructions
6. Handle feed authentication

### **Ticket #62: Import from Other Apps**

1. Build import wizard UI
2. Support CSV file format import
3. Parse common formats (Todoist, Wunderlist, Asana)
4. Map fields to internal structure
5. Handle import errors and validation
6. Show import preview before confirming

### **Ticket #63: Export Functionality**

1. Create export modal with options
2. Support CSV export format
3. Export tasks by project or filter
4. Include all task metadata
5. Generate JSON backup export
6. Add automatic backup downloads

### **Ticket #64: Browser Extension Setup**

1. Create browser extension project (Chrome/Firefox)
2. Build quick add popup
3. Implement web page clip to task
4. Add keyboard shortcut in browser
5. Sync with main app via API
6. Publish to extension stores

### **Ticket #65: Webhook & API Access**

1. Create public API documentation
2. Generate user API tokens
3. Build webhook configuration UI
4. Support webhook triggers (task created, completed)
5. Implement rate limiting
6. Add API usage dashboard

## Phase 9: Polish & Optimization (Tickets #66-75)

### **Ticket #66: Keyboard Shortcuts**

1. Implement global keyboard shortcut handler
2. Add shortcuts for common actions:  
   a) Quick add (Q), Search (/)  
   b) Navigation (G+T for Today, G+U for Upcoming)  
   c) Task actions (E edit, Del delete, Space complete)
3. Create shortcuts help modal (?)
4. Support custom shortcut configuration
5. Show shortcuts in tooltips

### **Ticket #67: Drag & Drop Polish**

1. Enhance drag and drop for tasks
2. Add visual feedback during drag
3. Support multi-task drag
4. Implement drag to reorder
5. Add drop zones highlighting
6. Handle drag between projects/sections

### **Ticket #68: Undo/Redo System**

1. Implement undo stack
2. Add undo notifications with action
3. Support undo for:  
   a) delete  
   b) complete  
   c) move
4. Add keyboard shortcuts (Ctrl/Cmd+Z)
5. Create redo functionality
6. Show undo history (optional)

### **Ticket #69: Offline Mode**

1. Implement service worker
2. Cache static assets
3. Store data in IndexedDB
4. Queue mutations while offline
5. Show offline indicator
6. Sync changes when online

### **Ticket #70: Performance Optimization**

1. Implement virtual scrolling for large lists
2. Add lazy loading for projects/tasks
3. Optimize database queries with indexes
4. Implement caching strategy (Redis)
5. Add request debouncing and throttling
6. Measure and optimize bundle size

### **Ticket #71: Responsive Design Refinement**

1. Optimize for mobile breakpoints
2. Create mobile-friendly navigation (bottom bar)
3. Adjust modals for small screens
4. Test on various screen sizes
5. Implement touch gestures where appropriate
6. Add mobile-specific optimizations

### **Ticket #72: Animations & Transitions**

1. Add smooth transitions for task operations
2. Implement completion animations
3. Create loading skeletons
4. Add page transition animations
5. Polish modal entrance/exit
6. Implement micro-interactions

### **Ticket #73: Theme System Enhancement**

1. Create multiple color themes
2. Add theme customization (accent colors)
3. Build theme preview
4. Support custom color schemes
5. Add theme marketplace/gallery (optional)
6. Persist theme preferences

### **Ticket #74: Error Handling & Validation**

1. Implement global error boundary
2. Create user-friendly error messages
3. Add form validation feedback
4. Handle API errors gracefully
5. Implement retry mechanisms
6. Add error reporting (Sentry)

### **Ticket #75: Testing & Documentation**

1. Write unit tests for critical functions
2. Add integration tests for API routes
3. Create E2E tests for key user flows
4. Write component tests (React Testing Library)
5. Build user documentation/help center
6. Create developer documentation

## Optional Enhancement Tickets

### **Ticket #76: Pomodoro Timer**

1. Build timer component
2. Integrate with task tracking
3. Add timer controls (start, pause, reset)
4. Track time spent per task
5. Show time statistics
6. Add timer preferences (work/break durations)

### **Ticket #77: Task Templates**

1. Create task template model
2. Build template creation UI
3. Add template library/browser
4. Implement "Create from Template"
5. Support parameterized templates
6. Share templates between users

### **Ticket #78: Habit Tracking**

1. Create habit model (recurring goals)
2. Build habit tracker UI
3. Display habit calendar/streak
4. Add habit reminders
5. Show habit completion statistics
6. Integrate with productivity dashboard

### **Ticket #79: Time Tracking**

1. Add time tracking to tasks
2. Build time entry interface
3. Show total time logged
4. Create time reports
5. Support manual and timer-based entry
6. Add time tracking visualizations

### **Ticket #80: Smart Scheduling**

1. Analyze task patterns
2. Suggest optimal due dates
3. Auto-schedule tasks based on availability
4. Detect task overload
5. Recommend task distribution
6. Add ML-based prioritization suggestions

---

## Implementation Notes

**Technology Stack Recommendations:**

1. **Framework**: Next.js 14+ with App Router
2. **Database**: PostgreSQL (via Supabase or Vercel Postgres)
3. **ORM**: Prisma or Drizzle
4. **Auth**: NextAuth.js or Clerk
5. **Styling**: Tailwind CSS + shadcn/ui components
6. **State Management**: Zustand + React Query
7. **Real-time**: Supabase Realtime or Pusher
8. **File Storage**: Vercel Blob or AWS S3
9. **Email**: Resend or SendGrid

**Development Best Practices:**

1. Commit after each completed ticket
2. Write tests as you build
3. Keep components small and reusable
4. Use TypeScript strictly
5. Document complex logic
6. Review accessibility (WCAG 2.1)
7. Optimize for performance continuously

**Suggested Order of Execution:**

1. Follow the phases sequentially (1→9)
2. Within each phase, parallelize tickets that don't depend on each other
3. Critical path: Tickets #1-18 should be completed first to have a functional MVP

This gives you **75 core tickets** plus **5 optional enhancements** that can be built sequentially to recreate Todoist as a full-featured web app!
