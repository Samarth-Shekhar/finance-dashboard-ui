# Finance Dashboard UI

🟢 **Live Demo:** [https://finance-dashboard-ui-three-inky.vercel.app/](https://finance-dashboard-ui-three-inky.vercel.app/)
This project is a clean, interactive, and responsive finance dashboard built with React and Vanilla CSS. It features a modern dark mode design with glassmorphic elements and neon green accents, allowing users to track their financial activity seamlessly. 

## Overview of Approach

The application was designed specifically with a modern, dark-themed aesthetic prioritizing minimalism and high contrast to ensure critical financial metrics stand out.

I structured the layout by dividing the screen into three main sections:
1. **Sidebar Navigation**: For global app routing (represented visually).
2. **Main Dashboard Area**: To display high-level metrics, analytical charts (Balance Trend and Categorical Spending), and targeted insights.
3. **Right Panel**: A dedicated timeline/activity section for transaction history, providing a calendar-like context.

### Technologies Used
- **React**: For component-based UI architecture.
- **Vanilla CSS**: Used for complete styling control via CSS variables, flexbox/grid layout systems, and custom micro-animations (hover effects, glassmorphic backgrounds). Avoiding external UI frameworks ensures a highly tailored application.
- **Recharts**: For rendering the responsive, customizable data visualizations.
- **Lucide-React**: For clean, modern vector icons.

### Key Features Implemented
- **Dashboard Overview**: Includes a responsive `Balance Trend` area chart and a categorical `Spending Breakdown` bar chart.
- **Summary Metrics Grid**: Displays total balance, income, expenses, and savings with percentage change indications.
- **Interactive Transactions Section**: A scrollable transaction list that supports search/filtering by name.
- **Basic Role-Based UI (RBAC) Simulation**: Users can toggle between "Viewer" and "Admin" mode from the top right of the main dashboard. When Admin mode is enabled, additional administrative actions (e.g., adding a data snapshot) become visible.
- **Insights Section**: Highlights the highest spending category and monthly improvements.

## Setup Instructions

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Finance Dashboard UI"
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## UI/UX Considerations

- **Color Palette & Glassmorphism**: Utilizes an almost-black background paired with a neon green primary accent (`#c5f04a`) and subtle background transparency mapping (`rgba(255, 255, 255, 0.05)`) to replicate depth without clutter.
- **Responsiveness**: Flex-based layout structure ensures it naturally adapts to various window contexts, gracefully handling overflow with custom hidden scrollbars.
- **Empty States & Interactions**: Includes hover states for buttons, inputs, and list items to keep the dashboard feeling alive and reactive.
