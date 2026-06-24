# 🍕 PizzaCraft - Online Pizza Ordering System

A modern, full-featured pizza ordering web application built with **Angular 20**, **TypeScript**, **Tailwind CSS**, and **Angular Material M3**. Order delicious pizzas with real-time cart management, filtering, and a responsive user interface.

## 🎯 Features

### Core Functionality
- **Browse Menu**: View 12 different pizza varieties with images, descriptions, and prices
- **Advanced Filtering**: Filter pizzas by:
  - Vegetarian/Non-Vegetarian
  - Price range (₹100-₹600)
  - Base type (Thin Crust, Multigrain, Regular, Flat Bread)
  - Cheese type (Cheese burst, Cheese topping, No cheese)
- **Add to Cart**: Quick add-to-cart with instant notifications
- **Shopping Cart**: Manage items with:
  - Quantity adjustment (+ and -)
  - Item removal
  - Real-time order summary with tax calculation
  - Empty state messaging
- **Pizza Details**: Click any pizza to view:
  - Full description
  - Available attributes
  - Price and vegetarian status
  - Quick add-to-cart from detail page

### User Experience
- **Snackbar Notifications**: Toast notifications when items are added to cart with 3-second duration
- **Real-time Updates**: Cart badge displays total item count dynamically
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern dark-themed UI with purple accent colors
- **Material Design**: Google Material M3 design system implementation
- **Smooth Animations**: Material animations on component interactions

### Technical Features
- **Standalone Components**: Modern Angular 20 standalone architecture (no NgModules)
- **Signals API**: Reactive state management using Angular Signals for high performance
- **Lazy Loading**: Routes lazy-loaded for optimized bundle size
- **Type Safety**: Full TypeScript with strict mode enabled
- **Build Optimization**: esbuild-based build with @angular/build

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | 20.x | Frontend framework |
| **TypeScript** | 5.8 | Programming language |
| **Tailwind CSS** | 3.4 | Utility-first CSS |
| **Angular Material** | 20.x (M3) | UI components & design system |
| **RxJS** | 7.x | Reactive programming |
| **Node.js** | 22.18.0 | Runtime |

---

## 📋 System Requirements

- **Node.js**: v22.18.0 or higher
- **npm**: v10.x or higher
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

---

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/poojakedar/my-pizza-online-order.git
   cd my-pizza-online-order
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:4200/menu`
   - The app will auto-reload when you make code changes

---

## 📦 Available Commands

### Development
```bash
npm start
# Runs the app in development mode at http://localhost:4200
# Watches for file changes and auto-reloads
```

### Production Build
```bash
npm run build
# Creates optimized production build in dist/ directory
# Includes minification, tree-shaking, and code splitting
```

### Testing
```bash
npm test
# Runs unit tests with Karma test runner
```

### E2E Testing
```bash
npm run e2e
# Runs end-to-end tests with Protractor
```

---

## 📁 Project Structure

```
my-pizza-online-order/
├── src/
│   ├── app/
│   │   ├── app.config.ts              # Application configuration with providers
│   │   ├── app.routes.ts              # Routing configuration with lazy loading
│   │   ├── app.component.ts           # Root component (standalone)
│   │   │
│   │   ├── pizza.ts                   # Pizza data model/interface
│   │   ├── pizza.service.ts           # Pizza data service with Signals
│   │   ├── cart.service.ts            # Cart state management service
│   │   │
│   │   ├── pizza-header/              # Header navigation component
│   │   │   ├── pizza-header.component.ts
│   │   │   ├── pizza-header.component.html
│   │   │   └── pizza-header.component.css
│   │   │
│   │   ├── pizza-main-layout/         # Menu/home page component
│   │   │   ├── pizza-main-layout.component.ts
│   │   │   ├── pizza-main-layout.component.html
│   │   │   └── pizza-main-layout.component.css
│   │   │
│   │   ├── pizza-detail/              # Individual pizza detail page
│   │   │   ├── pizza-detail.component.ts
│   │   │   ├── pizza-detail.component.html
│   │   │   └── pizza-detail.component.css
│   │   │
│   │   └── cart/                      # Shopping cart page component
│   │       ├── cart.component.ts
│   │       ├── cart.component.html
│   │       └── cart.component.css
│   │
│   ├── styles.scss                    # Global styles with Material M3 theme
│   ├── index.html                     # HTML entry point
│   ├── main.ts                        # Bootstrap entry point
│   └── ...config files
│
├── angular.json                       # Angular CLI configuration
├── tsconfig.json                      # TypeScript configuration (ES2022, strict mode)
├── tailwind.config.js                 # Tailwind CSS customization
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

---

## 🎨 Design & Styling

### Color Scheme
- **Primary Color**: Purple (#8b5cf6) - Main accent throughout the app
- **Secondary Color**: Dark background (#111118) - Main background
- **Accent Color**: Yellow - Used in Material M3 tertiary
- **Tertiary**: Material M3 default colors for interactive elements

### Dark Theme
The entire application uses a modern dark theme with:
- Dark card backgrounds (#1e1f2e)
- Light text for contrast
- Purple accent colors for call-to-action elements
- Material M3 design tokens

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🔄 State Management

### Signals API (Angular Signals)
The application uses Angular Signals for reactive state management:

```typescript
// Pizza Filter State
const filters = signal<PizzaFilter>({ ... });
const filteredPizzas = computed(() => {
  // Computed values automatically update when dependencies change
});

// Cart State
const items = signal<CartItem[]>([]);
const totalItems = computed(() => items().reduce(...));
const totalPrice = computed(() => items().reduce(...));
```

### Benefits
- ✅ Fine-grained reactivity
- ✅ Automatic change detection optimization
- ✅ No subscription leaks
- ✅ Excellent performance

---

## 🛒 Shopping Cart Features

### Add to Cart
- Click "Add to cart" button on any pizza
- Toast notification appears: "✓ [Pizza Name] added to cart"
- Cart badge updates instantly

### Manage Cart
1. **View Cart**: Click cart icon in header or notification's "View Cart" button
2. **Adjust Quantities**: Use +/- buttons to change item quantities
3. **Remove Items**: Click trash icon to remove pizza
4. **Clear Cart**: Remove all items at once

### Order Summary
- **Subtotal**: Sum of all items
- **Delivery**: FREE (always)
- **Tax**: 5% of subtotal automatically calculated
- **Total**: Subtotal + Tax

---

## 🔐 Modern Angular Features

### Standalone Components
All components are standalone (no NgModules):
```typescript
@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ...],
  templateUrl: './pizza.component.html'
})
```

### Lazy Loading Routes
Routes are lazy-loaded for optimized initial bundle:
```typescript
{ path: 'cart', loadComponent: () => import('./cart/cart.component') }
```

### Type-Safe Templates
TypeScript with strict mode ensures compile-time safety:
```typescript
// tsconfig.json
"strict": true
"moduleResolution": "bundler"
"target": "ES2022"
```

---

## 🚀 Recent Modernization (v6 → v20)

This application was recently upgraded from Angular 6 to Angular 20 with:

✅ **Standalone Components** - No NgModules needed
✅ **Signals API** - Fine-grained reactivity
✅ **Angular Material M3** - Modern design system
✅ **Tailwind CSS 3.4** - Utility-first styling
✅ **esbuild** - Lightning-fast builds
✅ **TypeScript 5.8** - Latest language features
✅ **Lazy Loading** - Optimized routing
✅ **External Templates** - Separated HTML/CSS files

---

## 📱 Pizza Menu (Sample)

The application includes 12 hand-picked pizzas:

| Pizza | Type | Base | Price |
|-------|------|------|-------|
| Margherita | Veg | Thin Crust | ₹200 |
| Farmhouse | Veg | Multigrain | ₹300 |
| Pepperoni | Non-Veg | Regular | ₹400 |
| Veggie Delight | Veg | Flat Bread | ₹299 |
| Paneer Tikka | Veg | Thin Crust | ₹350 |
| BBQ Chicken | Non-Veg | Flat Bread | ₹450 |
| Garden Fresh | Veg | Thin Crust | ₹250 |
| Chicken Supreme | Non-Veg | Multigrain | ₹499 |
| Spicy Paneer | Veg | Thin Crust | ₹320 |
| Mediterranean | Veg | Flat Bread | ₹380 |
| Zesty Chicken | Non-Veg | Regular | ₹420 |
| Cheesy Corn | Veg | Multigrain | ₹270 |

---

## 🔧 Configuration Files

### `angular.json`
- Build configuration for @angular/build
- Defines development and production builds
- Asset paths and styles configuration

### `tsconfig.json`
- TypeScript strict mode enabled
- ES2022 target for modern JavaScript
- Module resolution set to "bundler" for esbuild

### `tailwind.config.js`
- Custom color palette with pizza-themed colors
- Extends default Tailwind configuration
- Responsive utilities enabled

### `styles.scss`
- Material M3 theme definition
- Global CSS resets
- Dark theme implementation
- Custom scrollbar styling

---

## 🐛 Troubleshooting

### App won't start?
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### Port 4200 already in use?
```bash
# Use alternate port
ng serve --port 4300
```

### Build fails?
```bash
# Clear Angular cache
rm -rf .angular/cache
npm run build
```

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👤 Author

**Pooja Kedar**  
GitHub: [@poojakedar](https://github.com/poojakedar)

---

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Google Material Design for the beautiful component library
- Tailwind CSS for utility-first styling
- Community for inspiration and feedback

---

## 📞 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review component comments for implementation details

Happy Pizza Ordering! 🍕
