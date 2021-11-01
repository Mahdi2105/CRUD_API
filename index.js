// get the instance of sequelize
const {
  connection,
  Restaurant,
  Menu,
  MenuItem,
} = require("./sequelize_connect");
const express = require("express");
const app = express();
const port = 3010;

// support req.body parsing
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/api/restaurants", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const restaurants = await Restaurant.findAll({});

    // 200 = success
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const rest_ID = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });

    // 200 = success
    res.status(200).send(rest_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/api/restaurants", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const restaurant = await Restaurant.create(req.body);

    // 201 = created a resource
    res.status(201).send(restaurant);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/api/restaurants/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const updateR_ID = await Restaurant.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(updateR_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.delete("/api/restaurants/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const deleteR_ID = await Restaurant.destroy({
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(deleteR_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/menus", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menus = await Menu.findAll({});

    // 200 = success
    res.status(200).send(menus);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menu_ID = await Menu.findOne({
      where: {
        id: req.params.id,
      },
    });

    // 200 = success
    res.status(200).send(menu_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menu = await Menu.create(req.body);

    // 201 = created a resource
    res.status(201).send(menu);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/api/menus/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const updateM_ID = await Menu.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(updateM_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const deleteM_ID = await Menu.destroy({
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(deleteM_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/menuItems", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menuItems = await MenuItem.findAll({});

    // 200 = success
    res.status(200).send(menuItems);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/menuItems/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menuItem_ID = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });

    // 200 = success
    res.status(200).send(menuItem_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/api/menuItems", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menuItem = await MenuItem.create(req.body);

    // 201 = created a resource
    res.status(201).send(menuItem);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/api/menuItems/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const updateMI_ID = await MenuItem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(updateMI_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.delete("/api/menuItems/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const deleteMI_ID = await MenuItem.destroy({
      where: {
        id: req.params.id,
      },
    });
    // 200 = success
    res.status(200).send(deleteMI_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/api/restaurants/:id/menus", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const restaurantEX = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });

    const theMenu = await Menu.create(req.body);

    restaurantEX.addMenu(theMenu);

    // 200 = success
    res.status(200).send(theMenu);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/api/menus/:id/menuItems", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const menuEX = await Menu.findOne({
      where: {
        id: req.params.id,
      },
    });

    const theMenuItem = await MenuItem.create(req.body);

    menuEX.addMenuItem(theMenuItem);

    // 200 = success
    res.status(200).send(theMenuItem);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    // force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log("Sequelize connected"))
  .catch((e) => console.log(`Caught error: ${e}`));

app.listen(port, () => console.log(`Express server running on port ${port}`));