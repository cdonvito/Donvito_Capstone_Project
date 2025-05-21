const {
  client,
  createTables,
  createUser,
  fetchUsers,
  createProduct,
  fetchProducts,
  createUserProduct,
  fetchUserProducts,
} = require("./db");
const { productsToCreate } = require("./productSeed");
const { usersToCreate } = require("./userSeed");
require("dotenv").config();

async function seed() {
  await client.connect();

  await createTables();
  console.log("tables created");

  const [craig, madie, penny, scooby, comb, spray, bag] = await Promise.all([
    createUser(
      "craigdonvito",
      "password123",
      true,
      "Craig Donvito",
      "donvitocraig@gmail.com",
      "123 Coding Lane",
      "",
      ""
    ),
    createUser(
      "madiewilson",
      "abc123",
      false,
      "Madie Wilson",
      "test@gmail.com",
      "345 Hacker Way",
      "",
      ""
    ),
    createUser(
      "penny",
      "ruffabc",
      false,
      "Penny",
      "",
      "456 Hacker Way",
      "",
      ""
    ),
    createUser(
      "scooby",
      "123bark",
      false,
      "Scooby",
      "",
      "567 Coding Lane",
      "",
      ""
    ),
    createProduct(
      "Comb Set",
      "Our professional-grade comb set keeps your dog looking its best.",
      "comb_set.jpg",
      "Small",
      "1 Small 8 oz",
      "Grooming",
      9.67,
      115
    ),
    createProduct(
      "Deodorizing Spray",
      "Our professional-grade deodorizing spray keeps your dog looking its best.",
      "deodorizing_spray.jpg",
      "Large",
      "1 Large 32 oz",
      "Grooming",
      19.84,
      75
    ),
    createProduct(
      "Waterproof Bag",
      "Our professional-grade waterproof bag keeps your dog looking its best.",
      "waterproof_bag.jpg",
      "Medium",
      "1 Medium 16 oz",
      "Grooming",
      16.25,
      2
    ),
  ]);

  console.log("users created");
  console.log(await fetchUsers());

  console.log("products created");
  console.log(await fetchProducts());

  const [user_product] = await Promise.all([
    createUserProduct(craig.id, comb.id, 3),
    createUserProduct(madie.id, spray.id, 2),
    createUserProduct(penny.id, bag.id, 1),
    createUserProduct(scooby.id, spray.id, 4),
  ]);

  console.log("user products created");
  console.log(await fetchUserProducts(craig.id));

  // Seed full list of products
  for (i = 0; i < productsToCreate.length; i++) {
    console.log(productsToCreate[i]);
    await createProduct(
      productsToCreate[i].name,
      productsToCreate[i].description,
      productsToCreate[i].img_url,
      productsToCreate[i].size,
      productsToCreate[i].includes,
      productsToCreate[i].category,
      productsToCreate[i].price,
      productsToCreate[i].stock
    );
  }

  // Seed full list of users
  for (i = 0; i < usersToCreate.length; i++) {
    console.log(usersToCreate[i]);
    await createUser(
      usersToCreate[i].username,
      usersToCreate[i].password,
      usersToCreate[i].is_admin,
      usersToCreate[i].name,
      usersToCreate[i].email_address,
      usersToCreate[i].mailing_address,
      usersToCreate[i].phone_number,
      usersToCreate[i].billing_address
    );
  }

  await client.end();
}

seed();
