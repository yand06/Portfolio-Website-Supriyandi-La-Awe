import type { Project } from "@/types";
import uiMobileHome from "@/assets/HOME.png";
import uiMobile1 from "@/assets/1.png";
import uiMobile2 from "@/assets/2.png";
import uiMobile3 from "@/assets/3.png";
import uiMobile4 from "@/assets/4.png";
import uiMobile5 from "@/assets/5.png";
import uiMobile6 from "@/assets/6.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Agenin Project (Web App)",
    subtitle: "Multi-Level Marketing & Commission Management System",
    description:
      "A comprehensive full-stack MLM platform with user registration via referral codes, automated commission calculations, wallet management, and hierarchical tiered sales structure (tree structure) for tracking downlines and parent users.",
    liveUrl: "#",
    githubUrl: "https://github.com/yand06?tab=repositories",
    heroImage: uiMobileHome,
    overview:
      "Agenin is a sophisticated Multi-Level Marketing (MLM) system designed to manage user registrations, referral tracking, commission calculations, and wallet transactions. The platform implements a tiered sales structure where users can invite downlines through referral codes, earning commissions from their transactions. Built with modern enterprise technologies, the system features secure authentication with phone number validation, real-time commission processing with support for both percentage-based and fixed-amount commissions, wallet balance management, transaction history tracking, and comprehensive admin controls for configuring commission rules. The platform is designed to handle complex hierarchical relationships while maintaining data integrity and providing audit logs for all user actions.",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Microservice",
      "PostgreSQL",
      "Tailwind CSS",
      "Apache Kafka",
      "Docker",
      "REST API",
    ],
    features: [
      "User registration with unique phone number validation and optional referral code system",
      "Secure authentication and session management with password hashing",
      "Automated commission calculation supporting both percentage and fixed-amount models",
      "Real-time wallet and commission balance tracking with transaction history",
      "Hierarchical tiered sales structure (tree structure) for managing parent-downline relationships",
      "Admin dashboard for configuring commission settings and managing users",
      "Comprehensive audit logs for tracking all user actions and system events",
      "Mock payment API integration for commission processing",
      "Referral code generation and tracking system",
      "Multi-level downline commission distribution",
      "Transaction status management (Pending, Completed, Failed)",
      "Secure fund transfers with password verification",
    ],
    screenshots: [
      uiMobile1,
      uiMobile2,
      uiMobile3,
      uiMobile4,
      uiMobile5,
      uiMobile6,
    ],
    reflection:
      "Building the Agenin project was an enriching experience in developing enterprise-grade MLM systems. The biggest challenge was implementing the hierarchical tree structure to accurately track multi-level relationships and ensure commission calculations propagated correctly through the parent-child chain. Designing a scalable database schema in PostgreSQL that could efficiently query tree structures while maintaining referential integrity required careful planning. Integrating Apache Kafka for asynchronous commission processing ensured the system remained responsive even under high transaction volumes. The project deepened my understanding of distributed systems, event-driven architecture, and complex business logic implementation. Implementing secure authentication with phone number validation and creating a flexible commission configuration system taught me the importance of building adaptable solutions. The use of Docker for containerization and Spring Boot for the backend provided valuable experience in modern microservices architecture. This project demonstrates my ability to handle complex business requirements, implement sophisticated data structures, and build scalable, production-ready applications.",
  },
  {
    id: "2",
    title: "Cash Flow Management System (Desktop App)",
    subtitle: "Personal Finance Desktop Tracker",
    description:
      "A desktop-based personal finance management application for Windows, built using Java (Swing) with Apache NetBeans and MySQL. Features comprehensive budgeting, transaction tracking, and data visualization in a professional, modern UI.",
    liveUrl: "",
    githubUrl: "https://github.com/yand06/Tracker-Cash-Flow-Desktop-App",
    heroImage:
      "https://raw.githubusercontent.com/yand06/Tracker-Cash-Flow-Desktop-App/refs/heads/main/UI/DASHBOARD.png",
    overview:
      "Cash Flow Management System is a desktop application developed using Java Swing and Apache NetBeans IDE, utilizing MySQL as the database engine. This app is designed specifically for desktop use, providing users with an intuitive dashboard to track incomes, manage budgets per category, and maintain transaction histories. The system supports multi-category income & expense management, CRUD for all data, and offers live reporting of remaining budgets per transaction.",
    technologies: ["Java Swing", "Apache NetBeans", "MySQL", "JDBC"],
    features: [
      "Modern Desktop UI using Java Swing",
      "Sticky Sidebar navigation (Dashboard, Income, Budgeting, Transaction, About)",
      "Comprehensive dashboard: summary of total income, expense, breakdown by category & percentage",
      "Income management: supports multiple categories (Year Salary, Month Salary, Gaji Bulanan, Freelance, Bonus, Investasi, Passive Income, Day Salary)",
      "Budgeting module: per-category budgeting input and live summary",
      "Transaction management: add, update, delete transactions; transaction type (Income/Expense), live remaining budget calculation",
      "All data stored securely on MySQL, accessed via JDBC",
      "Monthly chart visualization for income/expense/budgeting (bar or line chart via Java libraries)",
      "Export data to Excel from Transaction page",
      "CRUD for all modules (add, update, delete for income, budget, transaction)",
      "Consistent professional blue-themed desktop UI, optimized for focus and usability",
    ],
    screenshots: [
      "https://raw.githubusercontent.com/yand06/Tracker-Cash-Flow-Desktop-App/refs/heads/main/UI/DASHBOARD.png",
      "https://raw.githubusercontent.com/yand06/Tracker-Cash-Flow-Desktop-App/refs/heads/main/UI/INCOME-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Tracker-Cash-Flow-Desktop-App/refs/heads/main/UI/BUDGETING-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Tracker-Cash-Flow-Desktop-App/refs/heads/main/UI/TRANSACTION-PAGE.png",
    ],
    reflection:
      "Building this project strengthened expertise in developing rich-client desktop applications using Java Swing and database integration with MySQL. Managing live financial calculations, synchronizing UI state with persistent data, and implementing multi-section dashboards taught valuable software architecture and OOP design lessons. Close coupling of UI responsiveness with real database updates offered deep insights into concurrency and desktop state management best practices.",
  },
  {
    id: "3",
    title: "Resi Tracker Sheet (Desktop App)",
    subtitle: "Shipment Tracking & Logistics Management",
    description:
      "A desktop application for real-time tracking and management of shipment receipts and logistics processes, built using Java Swing, Apache NetBeans, and MySQL. Features category-based tracking, status filtering, reporting, and admin management.",
    liveUrl: "",
    githubUrl: "https://github.com/supriyandi/resitracker-desktop",
    heroImage:
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/DASHBOARD.png",
    overview:
      "Resi Tracker Sheet is a logistics management desktop application, developed for Windows with Java Swing and Apache NetBeans IDE, and powered by MySQL for reliable data storage. The app helps track shipment receipts and manage logistics processes in real time, supporting packing, pickup, return, cancel, reporting, and admin modules. Its modern, clean UI presents critical summary information and offers advanced filtering/reporting for operational clarity.",
    technologies: ["Java Swing", "Apache NetBeans", "MySQL", "JDBC"],
    features: [
      "Desktop UI with sidebar navigation (Dashboard, Packing, Pick Up, Retur, Cancel, Laporan, Admin)",
      "Dashboard summary with statistics for scans, packing, pickup, cancel, and retur processes",
      "Packing module for entering and managing packing receipts",
      "Pick Up module for recording and tracking pickup details",
      "Retur (Return) and Cancel modules for exception tracking (no resi, scan, scanned by)",
      "Admin management: add/edit/delete admin users",
      "Advanced filtering by process, destination, scanned by, and date",
      "Report module with table, print, and export to Excel functionality",
      "MYSQL database for persistence, accessed via JDBC",
      "Paginated tables and search integrated in all modules",
      "Consistent professional UI, green/gray theme, fully optimized for desktop",
      "CRUD for all master data (admin, proses, resi, etc)",
      "Real-time scan logging and status updates",
    ],
    screenshots: [
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/DASHBOARD.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/PACKING-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/PICKUP-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/RETUR-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/CANCEL-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/REPORT-PAGE.png",
      "https://raw.githubusercontent.com/yand06/Resi-Tracker-Sheet-Desktop-App/refs/heads/main/UI/ADMIN-PAGE.png",
    ],
    reflection:
      "Developing the Resi Tracker Sheet sharpened skills in desktop UI design and database handling with JDBC. This project required careful design for robust CRUD operations, efficient table filtering, and live process monitoring across different logistics workflows. Integrating paginated tables, advanced admin management, and real-time reporting provided deep experience in desktop information systems for operational logistics. The desktop-centric architecture ensures speed and data reliability for operational teams.",
  },
];
