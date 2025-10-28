# Ticket #2: Database Schema Design & Setup

### Description

Design and set up the database schema for the todoist application with proper relationships and constraints.

### Approach

Using **Supabase** as the database provider with direct client integration (no ORM initially) for:

- Faster development and setup
- Built-in authentication and real-time features
- Simpler architecture for initial development
- Can add Prisma/Drizzle later if complex queries are needed

### Tasks

1. **Database Setup & Configuration**
   - ✅ Choose Supabase as database provider
   - ✅ Create Supabase project and get connection details
   - ✅ Add Supabase environment variables to .env.example
   - ✅ Install @supabase/supabase-js client library

2. **Database Schema Design**
   - Design users table (id, email, name, created_at, updated_at)
   - Design projects table (id, name, description, user_id, color, created_at, updated_at)
   - Design tasks table (id, title, description, completed, due_date, priority, project_id, user_id, created_at, updated_at)
   - Design labels table (id, name, color, user_id, created_at, updated_at)
   - Design task_labels junction table (task_id, label_id)
   - Design filters table (id, name, filter_criteria, user_id, created_at, updated_at)
   - Design comments table (id, content, task_id, user_id, created_at, updated_at)

3. **Database Implementation**
   - Create all tables in Supabase dashboard
   - Set up Row Level Security (RLS) policies for all tables
   - Create database indexes for performance optimization
   - Set up foreign key relationships and constraints

4. **Client Setup & TypeScript Integration**
   - Create Supabase client configuration file
   - Set up TypeScript types for database tables
   - Create database utility functions (CRUD operations)
   - Add database connection error handling
   - Test database connection and basic operations

### Priority

High - Foundation ticket

### Dependencies

Ticket #1 (Project Setup)

### Estimated Effort

**Task 1**: 30 minutes
**Task 2**: 1 hour  
**Task 3**: 1.5 hours
**Task 4**: 1 hour

**Total**: 4 hours (each task can be a separate PR)
