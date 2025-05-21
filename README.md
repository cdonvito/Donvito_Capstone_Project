# Donvito_Capstone_Project

# Netlify Deploy Link: https://waggletopia.netlify.app/

This project's purpose is to demonstrate our knowledge obtained during our Fullstack Academy bootcamp.
This website is an e-commerce site for "Waggle Topia", a dog product supply store.

## Functionality

### As a user (not logged in), you can:

- Access the website via the internet to browse and purchase products.
- View all available products.
- View the details for an individual product, including descriptions, photos, price, etc.
- Create an account if you do not already have one.
- Log in to your account if you already have one.
- See loading indicators and error messages to manage your expectations.

### As a user (logged in), you can:

- Maintain a persistent cart to revisit and pick up where you left off.
- Ensure only you can edit your cart contents.
- Add products to your cart.
- Edit your cart:
  - Change the quantity of any product.
  - Remove products.
- “Check out” items in your cart to complete a purchase.
- View your order history, including past items and the prices at purchase.
- View and delete your user profile information.

### As an administrator, you can:

- View a list of all products.
- Add, edit, and remove products (exclusive to administrators).
- View a list of all users, including relevant user information.
- Create and edit products with name, description, price, and one or more photos.
- Manage product categories.
- Manage stock status/quantity for each product:
  - Deduct stock automatically when a purchase is made.
  - Notify customers if they attempt to purchase more than the available inventory.

### As an engineer, I:

- Seed the database with realistic dummy data to simulate various user scenarios.
- Preload hundreds of products for testing.
- Secure all user data to prevent unauthorized manipulation.

## Running the App Locally

To run this project on your machine:

1. **Clone the repository**

   git clone git@github.com:cdonvito/Donvito_Capstone_Project.git
   cd Donvito_Capstone_Project

2. **Install server dependencies**

   npm install  
   npm install @prisma/client bcryptjs cors dotenv express jsonwebtoken morgan nodemon pg uuid

3. **Install client (React) dependencies**

   cd client/waggletopia  
   npm install @reduxjs/toolkit react react-dom react-redux react-router-dom  
   cd ../../

4. **Create a .env file** in the project root with:

   DATABASE_URL="YOUR_LOCAL_URL"

5. **Start the dev server**

   npm run dev

6. **View the app**

   Click the localhost link printed in the terminal to open Waggle Topia in your browser.
