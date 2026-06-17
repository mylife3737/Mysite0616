# Aqua Glow Pool Service: Updated Policies Integration Handover

This documentation outlines the design architecture, directory structure, files, and step-by-step instructions required to integrate the **SOP Policy Operations & Dispatch Desk** module into your existing React & Tailwind application.

---

## 📂 1. Directory Structure

All files are isolated inside a single modular directory to facilitate safe drag-and-drop merging:

```text
src/
└── pages/
    └── UpdatedPolicies/
        ├── types.ts              # Common TypeScript structures & guidelines interfaces
        ├── backofficeData.ts     # Pre-configured phone books, supplier rates, & checklists
        ├── SOPWorkbench.tsx      # Sandbox editor for transforming raw sticky notes into SOP cards
        ├── PublishedManual.tsx   # Premium visual document viewer with inline live editing
        ├── DispatchDesk.tsx      # Multi-tab back-office viewer & Contract Estimate calculator
        └── index.tsx             # Dispatch center page wrapper & Master React state router
```

---

## ⚙️ 2. Core Dependencies

Before merging, ensure your target project has the following npm packages installed in `package.json`:

*   `lucide-react` (For icons used throughout all components)
*   `motion` (Imported from `motion/react` for elegant slide-in tab transitions and notifications)
*   Tailwind CSS (Styled entirely using standard utility classes)

---

## 📄 3. File Summaries & Contents

### A. Core Types (`/src/pages/UpdatedPolicies/types.ts`)
Defines the standard operational blueprint for a compiled standard operating procedure card:

```typescript
export interface PolicyItem {
  id: string;
  category: string;
  title: string;
  vibe: string;
  objective: string;
  rules: string[];
  footerText: string;
  lastUpdated: string;
}
```

---

### B. Dynamic Reference Data (`/src/pages/UpdatedPolicies/backofficeData.ts`)
Contains pre-configured operational constants for the back-office phone list, supplier invoices, checklist registers, and calculators.

---

### C. SOP Designer Workbench (`/src/pages/UpdatedPolicies/SOPWorkbench.tsx`)
Features the raw scribbles presets block, the live custom input sandbox, and the visual compiler simulating AI-tone transformations (`Firm & Professional`, `Warm & Explanatory`, `Legal SOP Style`, `Direct & Playful`). It allows route managers to formalize notes and print them or publish them to the active booklet.

---

### D. The PDF/Paper Binder Booklet (`/src/pages/UpdatedPolicies/PublishedManual.tsx`)
A clean screen simulating physical letterhead paper. Features:
*   Search filter by name, section tag, or department parameters
*   Toggleable in-place inline live editor (all changes sync instantly to local storage memory)
*   **Print Direct Layout**: Custom CSS margins for printing physical SOP checklist sheets
*   Clipboard exporter format

---

### E. Dispatch Reference Desk (`/src/pages/UpdatedPolicies/DispatchDesk.tsx`)
Provides a rapid-lookup operational console with:
*   Critical action status level indicator flags
*   Checkable daily routine checklists
*   **Interactive Quote Estimator**: Range sliders for calculating custom weekly water volume contracts, standard dispatch trip distances, or commercial sq-footage.

---

### F. Page Entry Wrapper Router (`/src/pages/UpdatedPolicies/index.tsx`)
Handles master React states, synchronizes active SOP additions/updates/deletions directly to browser memory via `localStorage`, monitors pump alerts, and coordinates tab navigation seamlessly.

---

## 🛠️ 4. Quick Merging Guide

Follow these steps to plug the module into your existing React interface cleanly:

1.  **Drop-in Folder**: Copy the entire `/src/pages/UpdatedPolicies` folder directly into your project's page or view directory.
2.  **Verify Utils Import**: Check imports at the top of the components referencing `cn` utility styling helpers:
    *   Currently resolved as: `import { cn } from '../../utils';`
    *   Adjust this path relative to your own Tailwind merge project (e.g., standard `../../lib/utils` or equivalent helpers).
3.  **Add Route Navigation**: Update your global router file (e.g., `App.tsx` or `main.tsx`) to register the view path:
    ```typescript
    import UpdatedPolicies from './pages/UpdatedPolicies';
    
    // Within your router config:
    <Route path="/policies" element={<UpdatedPolicies />} />
    ```
4.  **Local Storage Persistence**: The active guidelines save automatically under the key `'business_policies'`. On initial load, it falls back cleanly to the pre-seeded dispatch and operations safety templates.
