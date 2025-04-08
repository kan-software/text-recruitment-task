# LiveChat Canned Responses - Frontend Recruitment Task

## Overview

This repository contains a take-home task for frontend engineering candidates at `Text, Inc.` The codebase is extracted from `LiveChat's` production application, specifically the `Canned Responses` management section. The code has been intentionally modified and certain functionalities have been removed to create specific challenges for candidates to solve.

## Background

Canned Responses is a feature that allows `LiveChat` agents to save and reuse frequently used messages. This task focuses on the management interface for these responses, particularly dealing with performance optimization when handling large datasets client-side.

## Important Notes

- The application uses mock data (found in `initial-state.ts`) instead of a real backend API

```typescript
interface CannedResponse {
  id: string;
  modificationTimestamp: number;
  tags: string[];
  text: string;
  createdBy: string;
  isPrivate?: boolean;
  avatarUrl: string;
}
```

- The data volume is intentionally large to test optimization skills
- Current performance issues exist (slow initial load, search input lag)
- Some features are intentionally non-functional (unless specified in acceptance criteria)
- The project uses `LiveChat's` Design System (documentation available at https://design.livechat.com/)

## Prerequisites

- Node.js (v18 or higher)
- `npm` or `yarn`

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm ci
```

3. Run the development server:

```bash
npm run dev
```

4. Open the application in your browser:

```bash
http://localhost:5173/
```

## Task Requirements

The candidate should implement the following features according to these acceptance criteria:

### 1. Response Count in Filter Tabs

`Given` the user is viewing the canned responses list  
`When` looking at the filter tabs (All/Shared/Private)  
`Then` each tab should display the count of responses in parentheses  
`And` these counts should update when search/filtering is applied  
Example: `All (1000)`, `Shared (542)`, `Private (458)`

### 2. Search Functionality

`Given` the user enters text in the search input  
`When` typing any phrase  
`Then` the list should filter responses matching the criteria:

- Match in author name, content, or tags (OR condition)
- Case-insensitive partial matching
- Results should update in real-time
- Performance should be optimized for smooth user experience

### 3. Tag Click Behavior

`Given` the user clicks on any tag in a canned response  
`When` the tag is clicked  
`Then` the search input should be populated with the tag's value  
`And` previous search term (if any) should be cleared  
`And` the list should filter according to the selected tag

### 4. Performance Optimization

`Given` the application is handling large datasets  
`When` users perform any action (scrolling, searching, filtering)  
`Then` the interface should remain responsive  
`And` operations should be optimized for performance  
`And` the candidate should implement appropriate optimization strategies

### 5. Optional Enhancement

`Given` the user has entered a search term  
`When` viewing the filtered results  
`Then` matching portions of text should be highlighted in:

- Author names
- Response content
- Tags

## Technical Guidelines

- External libraries are allowed but should be used judiciously
- Full framework solutions that solve entire problems should be avoided
- Code should follow clean architecture principles with clear separation of concerns and maintainable patterns
- There is no single "correct" approach to performance optimization - candidates should implement and document their chosen strategy, as long as it delivers tangible improvements for end users

## Evaluation Criteria

- Code quality and organization
- Performance optimization techniques, with documented evidence
- Problem-solving approach
- Understanding of React.js best practices
- UI/UX considerations in implementation

## Submission Guidelines

1. Create a new repository (public or private) in your preferred version control service (`GitHub`, `GitLab`, etc.)
2. Import the provided codebase (from the zip file) as your initial commit
3. Implement your solution in a new branch
4. Create a pull request in your repository that includes all your changes
5. Your repository should include:

   - All implemented features
   - Pull request description with:
     - Brief description of your implementation
     - Performance optimization strategies used
     - Any trade-offs you made
     - Evidence of performance improvements (if applicable)

6. Share with us:
   - Pull request URL (so we can review the diff between original and final code)
   - If using a private repository, please grant access to username given during the interview process

Note: Please ensure your initial commit contains the unmodified codebase to help us review your changes effectively.
