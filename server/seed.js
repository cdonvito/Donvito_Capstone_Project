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

async function seed() {
  await client.connect();

  await createTables();
  console.log("tables created");

  const [craig, madie, penny, scooby, bone, dentalTreat, dogBedLarge] =
    await Promise.all([
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
        "Bone",
        "bone.jpg",
        "Large",
        "1 Large Dog Bone",
        "Treats",
        12,
        100
      ),
      createProduct(
        "Dental Treat",
        "dental_treat.jpg",
        "Large",
        "1 Large Dental Treat",
        "Treats",
        3,
        150
      ),
      createProduct(
        "Dog Bed",
        "dog_bed_large.jpg",
        "Large",
        "1 Large Dog Bed",
        "Beds",
        40,
        10
      ),
    ]);

  console.log("users created");
  console.log(await fetchUsers());

  console.log("products created");
  console.log(await fetchProducts());

  const [user_product] = await Promise.all([
    createUserProduct(craig.id, bone.id, 3),
    createUserProduct(madie.id, dentalTreat.id, 2),
    createUserProduct(penny.id, dogBedLarge.id, 1),
    createUserProduct(scooby.id, dentalTreat.id, 4),
  ]);

  console.log("user products created");
  console.log(await fetchUserProducts(craig.id));

  // Seed full list of products
  for (i = 0; i < productsToCreate.length; i++) {
    console.log(productsToCreate[i]);
    await createProduct(
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
