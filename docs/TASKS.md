# Todoist Web App - Implementation Task List

## Phase 1: Project Setup & Foundation (Tickets #1-8)

### **Ticket #1: Initial Next.js Project Setup**
- Initialize Next.js 14+ project with App Router
- Configure TypeScript with strict mode
- Set up ESLint and Prettier
- Create basic folder structure (/app, /components, /lib, /types)
- Set up Tailwind CSS for styling
- Configure path aliases (@/ for imports)

### **Ticket #2: Database Schema Design & Setup**
- Choose database (PostgreSQL recommended via Supabase/Vercel Postgres)
- Design schema for: users, projects, tasks, labels, filters, comments
- Set up Prisma ORM or Drizzle ORM
- Create initial migrations
- Set up database connection and client

### **Ticket #3: Authentication System**
- Implement NextAuth.js or Clerk
- Create sign up, login, logout flows
- Set up session management
- Create protected route middleware
- Build auth UI components (login/signup forms)

### **Ticket #4: Base Layout & Navigation**
- Create main app layout with sidebar
- Build responsive navigation structure
- Implement sidebar toggle for mobile
- Create top header with user menu
- Set up basic routing structure

### **Ticket #5: Design System & UI Components**
- Create design tokens (colors, spacing, typography)
- Build reusable UI components library:
  - Button, Input, Checkbox, Select
  - Modal/Dialog, Dropdown, Tooltip
  - Date picker component
  - Icons library (Lucide or Heroicons)
- Implement dark/light theme toggle with system

### **Ticket #6: API Route Structure**
- Set up Next.js API routes folder structure
- Create base API utilities and error handling
- Implement API middleware for auth checks
- Set up API response types and utilities
- Create API client/fetcher utilities

### **Ticket #7: State Management Setup**
- Choose and set up state management (Zustand/Jotai recommended)
- Create store structure for tasks, projects, UI state
- Set up React Query for server state
- Implement optimistic updates pattern
- Create custom hooks for common operations

### **Ticket #8: Real-time Sync Infrastructure**
- Set up WebSocket connection or Server-Sent Events
- Implement real-time data sync strategy
- Create sync conflict resolution logic
- Build offline detection and queue system
- Test sync across multiple browser tabs

## Phase 2: Basic Task Management (Tickets #9-18)

### **Ticket #9: Task Data Model & API**
- Create Task model with fields: id, title, description, due_date, priority, completed, user_id, project_id
- Build CRUD API endpoints for tasks
- Implement validation with Zod
- Create TypeScript types for tasks
- Write API tests

### **Ticket #10: Inbox View & Basic Task List**
- Create Inbox default project
- Build task list component with virtualization
- Implement task item component with checkbox
- Show task count and grouping headers
- Handle empty states

### **Ticket #11: Task Creation (Quick Add)**
- Build quick add input component
- Create task creation modal
- Implement basic form with title and description
- Add task creation API call with optimistic updates
- Add keyboard shortcut (Ctrl/Cmd + K) for quick add
- Handle form validation and errors

### **Ticket #12: Task Details Panel**
- Create slide-out task detail panel
- Display full task information
- Make title and description editable inline
- Show creation and modification timestamps
- Implement panel routing (URL state)

### **Ticket #13: Task Editing & Deletion**
- Add edit functionality to task items
- Implement inline editing for task titles
- Create task update API endpoints
- Add delete task with confirmation
- Implement undo/redo for deletions
- Add keyboard shortcuts (e, del)

### **Ticket #14: Task Completion & Checkboxes**
- Implement task checkbox interaction
- Add completion animation
- Update completed_at timestamp
- Move completed tasks to separate section
- Add toggle to show/hide completed tasks
- Track completion count

### **Ticket #15: Task Priority System**
- Add priority field to tasks (P1-P4)
- Create priority picker UI component
- Style task items by priority (colors, flags)
- Implement priority sorting
- Add keyboard shortcuts for priority (1-4)

### **Ticket #16: Task Due Dates**
- Add due_date field to task model
- Create date picker component
- Implement date display formatting (Today, Tomorrow, date)
- Add overdue visual indicators
- Support clearing due dates
- Show tasks without dates in separate section

### **Ticket #17: Natural Language Date Parsing**
- Integrate date parsing library (chrono-node or date-fns)
- Parse dates from task input (tomorrow, next Monday, Dec 25)
- Extract and highlight date text in quick add
- Auto-fill date picker from parsed text
- Handle relative dates and recurring patterns basics

### **Ticket #18: Task Sorting & Filtering**
- Implement sort options (date, priority, name, manual)
- Add sort dropdown to list header
- Enable drag-and-drop manual sorting
- Persist sort preferences per view
- Create filter UI for basic filtering (completed/active)

## Phase 3: Project Management (Tickets #19-26)

### **Ticket #19: Project Data Model & API**
- Create Project model with fields: id, name, color, icon, user_id, favorite, archived
- Build CRUD API endpoints for projects
- Create project list endpoints
- Implement project-task relationships
- Add validation and error handling

### **Ticket #20: Projects Sidebar**
- Build projects list in sidebar
- Display project names with colors/icons
- Show task count per project
- Add favorites section at top
- Implement project reordering (drag-and-drop)

### **Ticket #21: Project Creation & Management**
- Create "Add Project" button and modal
- Build project creation form (name, color, icon picker)
- Implement project editing
- Add project deletion with confirmation
- Handle project archiving/unarchiving

### **Ticket #22: Project View**
- Create project detail page/view
- Display project name and metadata in header
- Show project-specific task list
- Add project actions menu (edit, archive, delete)
- Implement project description/notes

### **Ticket #23: Project Sections**
- Add sections model (belongs to project)
- Create section CRUD APIs
- Build section UI within project view
- Allow adding tasks to specific sections
- Implement section collapse/expand
- Enable section reordering

### **Ticket #24: Moving Tasks Between Projects**
- Add project picker to task detail panel
- Implement move task API endpoint
- Update UI optimistically
- Show move action in activity log
- Support bulk move (select multiple tasks)

### **Ticket #25: Favorite & Archived Projects**
- Add favorite toggle to projects
- Create favorites section in sidebar
- Implement archive project functionality
- Create archived projects view
- Add restore from archive option

### **Ticket #26: Project Templates**
- Create template model and storage
- Build template creation from existing project
- Create template gallery/browser
- Implement "Create from Template" flow
- Include sample templates (Work, Personal, etc.)

## Phase 4: Advanced Task Features (Tickets #27-35)

### **Ticket #27: Sub-tasks**
- Add parent_task_id to task model
- Create sub-task UI (indented under parent)
- Implement add sub-task action
- Show sub-task progress on parent (2/5 completed)
- Support multiple nesting levels
- Enable converting tasks to sub-tasks

### **Ticket #28: Task Labels/Tags**
- Create Label model (id, name, color, user_id)
- Build label CRUD APIs
- Create label picker component
- Display labels on task items (colored badges)
- Implement label filtering
- Add labels management page

### **Ticket #29: Task Comments**
- Create Comment model (task_id, user_id, content, created_at)
- Build comments API endpoints
- Add comments section to task detail panel
- Implement comment creation and editing
- Show comment timestamps and author
- Support markdown in comments

### **Ticket #30: File Attachments**
- Set up file storage (S3, Cloudinary, or Vercel Blob)
- Create attachment upload API
- Add file upload to task detail and comments
- Display attached files with previews
- Implement file download
- Add file deletion

### **Ticket #31: Task Description Rich Text**
- Integrate markdown editor (Tiptap or similar)
- Add rich text toolbar to description field
- Support markdown syntax and preview
- Handle links, lists, code blocks
- Implement @mentions in descriptions
- Auto-save description changes

### **Ticket #32: Recurring Tasks**
- Add recurrence model/fields (pattern, interval, type)
- Create recurrence picker UI component
- Implement recurrence engine (generates next occurrence)
- Support patterns: daily, weekly, monthly, yearly
- Handle completion-based vs date-based recurrence
- Show recurrence info on task items

### **Ticket #33: Task Search**
- Implement full-text search backend (Postgres FTS or Algolia)
- Create search bar in top navigation
- Build search results page
- Highlight matching text in results
- Support search filters and operators
- Show recent searches

### **Ticket #34: Bulk Task Operations**
- Add multi-select mode to task lists
- Create selection checkboxes on tasks
- Build bulk actions toolbar (complete, delete, move, reschedule)
- Implement select all/none
- Add keyboard shortcuts for selection
- Show selection count

### **Ticket #35: Task Duplication**
- Add duplicate task action
- Copy all task attributes and sub-tasks
- Prompt for modifications (new date, project)
- Implement duplicate with variations
- Add to context menu and keyboard shortcut

## Phase 5: Views & Filters (Tickets #36-43)

### **Ticket #36: Today View**
- Create dedicated Today view page
- Filter tasks due today or overdue
- Group by project or priority
- Show overdue section at top
- Add motivational header/greeting
- Display daily productivity stats

### **Ticket #37: Upcoming View**
- Create Upcoming/Next 7 Days view
- Group tasks by date (Today, Tomorrow, dates)
- Show date headers with day names
- Display no tasks message for empty days
- Add "Upcoming" to main navigation
- Implement date range picker (7/14/30 days)

### **Ticket #38: Labels & Filters View**
- Create all labels overview page
- Show tasks grouped by label
- Display label count and color
- Add filter by multiple labels
- Implement "no label" filter
- Create label management from this view

### **Ticket #39: Custom Filter Builder**
- Create Filter model for saved filters
- Build query builder UI component
- Support operators: AND, OR, NOT
- Implement filter by: date, project, label, priority, assigned, keyword
- Create filter preview while building
- Add filter syntax guide/help

### **Ticket #40: Saved Filters**
- Implement save filter functionality
- Display saved filters in sidebar
- Create filter management page
- Allow editing filter queries
- Support filter favoriting
- Add filter sharing (generate link)

### **Ticket #41: Board View (Kanban)**
- Create board view layout component
- Display sections as columns
- Implement horizontal scrolling
- Add drag-and-drop between columns
- Create "Add Task" at bottom of columns
- Toggle between list and board view

### **Ticket #42: Calendar View**
- Integrate calendar component (FullCalendar or react-big-calendar)
- Display tasks on calendar grid
- Support month, week, day views
- Enable drag-to-reschedule on calendar
- Add task creation by clicking dates
- Show task details on calendar event click

### **Ticket #43: View Preferences & Settings**
- Create view settings panel
- Save view preferences per user
- Implement default view selection
- Add density options (compact/comfortable)
- Create view-specific filters
- Remember last viewed project/filter

## Phase 6: Collaboration Features (Tickets #44-52)

### **Ticket #44: User Profiles**
- Create user profile model extensions
- Build profile page with editable info
- Add avatar upload functionality
- Display user info in header
- Create account settings page
- Implement email preferences

### **Ticket #45: Project Sharing**
- Create project_members join table
- Build share project modal
- Implement invite by email
- Add user search for existing users
- Show shared status on projects
- Create "Shared with me" sidebar section

### **Ticket #46: Role-Based Permissions**
- Define roles: owner, admin, member, viewer
- Implement permission checks in API
- Create role assignment UI
- Enforce permissions in frontend
- Add role explanations/tooltips
- Handle permission denied states

### **Ticket #47: Task Assignment**
- Add assignee_id to task model
- Create assignee picker component
- Display assignee avatar on task items
- Filter tasks by assignee ("Assigned to me")
- Show unassigned tasks section
- Add assignment notifications

### **Ticket #48: @Mentions in Comments**
- Parse @mentions from comment text
- Create mention picker dropdown
- Link mentions to user profiles
- Send notifications on mention
- Highlight mentions in rendered text
- Support @project and @task mentions

### **Ticket #49: Activity Log**
- Create activity/audit log model
- Track all task and project changes
- Build activity feed component
- Display in project/task sidebars
- Filter by user or action type
- Show relative timestamps (2 hours ago)

### **Ticket #50: Real-time Collaboration Updates**
- Implement presence system (who's viewing)
- Show real-time task updates from others
- Display "User X is editing" indicators
- Handle concurrent edit conflicts
- Add collaborative cursors (optional)
- Show online/offline status

### **Ticket #51: Email Notifications**
- Set up email service (Resend, SendGrid)
- Create email templates for notifications
- Implement notification preferences
- Send emails for: assignments, mentions, comments
- Add digest emails (daily/weekly summary)
- Include unsubscribe links

### **Ticket #52: Team Workspaces**
- Create workspace model (multi-tenant)
- Build workspace switcher in navigation
- Implement workspace invitation flow
- Separate personal vs team workspaces
- Add workspace settings and management
- Handle workspace data isolation

## Phase 7: Productivity & Analytics (Tickets #53-58)

### **Ticket #53: Karma Points System**
- Create karma tracking model
- Calculate points for task completion
- Assign points by task attributes (priority, etc.)
- Build karma display in header
- Create karma history/log
- Add daily/weekly goals

### **Ticket #54: Productivity Dashboard**
- Create dashboard page/view
- Build completed tasks chart (daily/weekly)
- Show tasks by project breakdown (pie chart)
- Display completion streaks
- Add productivity trends over time
- Show current week summary

### **Ticket #55: Task Statistics**
- Calculate total tasks (active, completed)
- Show completion rate percentages
- Display average completion time
- Create project-level statistics
- Add label usage statistics
- Build personal insights section

### **Ticket #56: Completion Streaks**
- Track daily task completion
- Calculate current and longest streaks
- Build streak calendar visualization
- Show streak in karma section
- Add streak maintenance reminders
- Celebrate streak milestones

### **Ticket #57: Goals & Targets**
- Create goals model (daily/weekly targets)
- Build goal setting interface
- Track progress toward goals
- Display goal completion indicators
- Send goal reminder notifications
- Show goal history and achievements

### **Ticket #58: Productivity Insights & Tips**
- Analyze user patterns and habits
- Generate personalized insights
- Show most productive times/days
- Identify underutilized labels/projects
- Suggest optimizations
- Create weekly review summary

## Phase 8: Integrations & Extensions (Tickets #59-65)

### **Ticket #59: Email to Task**
- Generate unique email address per user
- Set up email receiving service (SendGrid Inbound)
- Parse incoming emails to tasks
- Extract title from subject, body as description
- Support email attachments
- Add email-to-task instructions page

### **Ticket #60: Google Calendar Integration**
- Implement OAuth for Google Calendar
- Build calendar connection flow
- Sync tasks to calendar as events
- Support two-way sync (calendar to tasks)
- Handle sync conflicts and updates
- Add calendar sync settings

### **Ticket #61: iCal Feed**
- Generate user-specific iCal URLs
- Create iCal feed endpoint
- Include tasks as calendar events
- Support filtered feeds (by project/label)
- Add subscribe instructions
- Handle feed authentication

### **Ticket #62: Import from Other Apps**
- Build import wizard UI
- Support CSV file format import
- Parse common formats (Todoist, Wunderlist, Asana)
- Map fields to internal structure
- Handle import errors and validation
- Show import preview before confirming

### **Ticket #63: Export Functionality**
- Create export modal with options
- Support CSV export format
- Export tasks by project or filter
- Include all task metadata
- Generate JSON backup export
- Add automatic backup downloads

### **Ticket #64: Browser Extension Setup**
- Create browser extension project (Chrome/Firefox)
- Build quick add popup
- Implement web page clip to task
- Add keyboard shortcut in browser
- Sync with main app via API
- Publish to extension stores

### **Ticket #65: Webhook & API Access**
- Create public API documentation
- Generate user API tokens
- Build webhook configuration UI
- Support webhook triggers (task created, completed)
- Implement rate limiting
- Add API usage dashboard

## Phase 9: Polish & Optimization (Tickets #66-75)

### **Ticket #66: Keyboard Shortcuts**
- Implement global keyboard shortcut handler
- Add shortcuts for common actions:
  - Quick add (Q), Search (/)
  - Navigation (G+T for Today, G+U for Upcoming)
  - Task actions (E edit, Del delete, Space complete)
- Create shortcuts help modal (?)
- Support custom shortcut configuration
- Show shortcuts in tooltips

### **Ticket #67: Drag & Drop Polish**
- Enhance drag and drop for tasks
- Add visual feedback during drag
- Support multi-task drag
- Implement drag to reorder
- Add drop zones highlighting
- Handle drag between projects/sections

### **Ticket #68: Undo/Redo System**
- Implement undo stack
- Add undo notifications with action
- Support undo for: delete, complete, move
- Add keyboard shortcuts (Ctrl/Cmd+Z)
- Create redo functionality
- Show undo history (optional)

### **Ticket #69: Offline Mode**
- Implement service worker
- Cache static assets
- Store data in IndexedDB
- Queue mutations while offline
- Show offline indicator
- Sync changes when online

### **Ticket #70: Performance Optimization**
- Implement virtual scrolling for large lists
- Add lazy loading for projects/tasks
- Optimize database queries with indexes
- Implement caching strategy (Redis)
- Add request debouncing and throttling
- Measure and optimize bundle size

### **Ticket #71: Responsive Design Refinement**
- Optimize for mobile breakpoints
- Create mobile-friendly navigation (bottom bar)
- Adjust modals for small screens
- Test on various screen sizes
- Implement touch gestures where appropriate
- Add mobile-specific optimizations

### **Ticket #72: Animations & Transitions**
- Add smooth transitions for task operations
- Implement completion animations
- Create loading skeletons
- Add page transition animations
- Polish modal entrance/exit
- Implement micro-interactions

### **Ticket #73: Theme System Enhancement**
- Create multiple color themes
- Add theme customization (accent colors)
- Build theme preview
- Support custom color schemes
- Add theme marketplace/gallery (optional)
- Persist theme preferences

### **Ticket #74: Error Handling & Validation**
- Implement global error boundary
- Create user-friendly error messages
- Add form validation feedback
- Handle API errors gracefully
- Implement retry mechanisms
- Add error reporting (Sentry)

### **Ticket #75: Testing & Documentation**
- Write unit tests for critical functions
- Add integration tests for API routes
- Create E2E tests for key user flows
- Write component tests (React Testing Library)
- Build user documentation/help center
- Create developer documentation

## Optional Enhancement Tickets

### **Ticket #76: Pomodoro Timer**
- Build timer component
- Integrate with task tracking
- Add timer controls (start, pause, reset)
- Track time spent per task
- Show time statistics
- Add timer preferences (work/break durations)

### **Ticket #77: Task Templates**
- Create task template model
- Build template creation UI
- Add template library/browser
- Implement "Create from Template"
- Support parameterized templates
- Share templates between users

### **Ticket #78: Habit Tracking**
- Create habit model (recurring goals)
- Build habit tracker UI
- Display habit calendar/streak
- Add habit reminders
- Show habit completion statistics
- Integrate with productivity dashboard

### **Ticket #79: Time Tracking**
- Add time tracking to tasks
- Build time entry interface
- Show total time logged
- Create time reports
- Support manual and timer-based entry
- Add time tracking visualizations

### **Ticket #80: Smart Scheduling**
- Analyze task patterns
- Suggest optimal due dates
- Auto-schedule tasks based on availability
- Detect task overload
- Recommend task distribution
- Add ML-based prioritization suggestions

---

## Implementation Notes

**Technology Stack Recommendations:**
- **Framework**: Next.js 14+ with App Router
- **Database**: PostgreSQL (via Supabase or Vercel Postgres)
- **ORM**: Prisma or Drizzle
- **Auth**: NextAuth.js or Clerk
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand + React Query
- **Real-time**: Supabase Realtime or Pusher
- **File Storage**: Vercel Blob or AWS S3
- **Email**: Resend or SendGrid

**Development Best Practices:**
- Commit after each completed ticket
- Write tests as you build
- Keep components small and reusable
- Use TypeScript strictly
- Document complex logic
- Review accessibility (WCAG 2.1)
- Optimize for performance continuously

**Suggested Order of Execution:**
Follow the phases sequentially (1→9), but within each phase, you can parallelize tickets that don't depend on each other. Critical path: Tickets #1-18 should be completed first to have a functional MVP.

This gives you **75 core tickets** plus **5 optional enhancements** that can be built sequentially to recreate Todoist as a full-featured web app!