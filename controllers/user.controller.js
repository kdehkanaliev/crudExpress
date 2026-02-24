import { readFile, writeFile } from "../utils/user.utils.js";

let getUsers = (req, res) => {
  try {
    let data = readFile();
    let nima = req.query.search;
    console.log(nima);

    if (!req.query.age && !req.query.search) {
      return res.json(data);
    } else if (nima) {
      return res.json({
        message: "user sucsesfully searched",
        searchedUser: data.filter((val) => val.name.includes(req.query.search)),
      });
    } else {
      res.json({
        message: "users successfully filtered",
        filteredUsers: data.filter((val) => val.age == req.query.age),
      });
      return;
    }
  } catch (error) {
    throw error;
  }
};

let getUserById = (req, res) => {
  try {
    let id = +req.params.id;
    if (!readFile().find((val) => val.id == id))
      throw new Error("IDdagi user topilmadi");
    res.json(readFile().find((val) => val.id == id));
  } catch (error) {
    throw error;
  }
};

let postUser = (req, res) => {
  try {
    let users = readFile();
    let { name, email, age } = req.body;
    if (!name || !email || !age)
      throw new Error("Malumotlar toliq toldirilmagan");
    if (
      typeof name != "string" ||
      !email.includes("@") ||
      typeof age != "number" ||
      age <= 0
    ) {
      throw new Error("validation Err");
    }

    let userId = 0;
    users.push(1);
    if (users.length === 1) {
      userId += 1;
      users.splice(users.length - 2, 1);
    } else {
      userId += users[users.length - 2].id + 1;
      users.splice(users.length - 1, 1);
      if (users.find((val) => val.name == name))
        throw new Error("Ism oldin ishlatilgan");
      if (users.find((val) => val.email == email))
        throw new Error("Email oldin ishlatilgan");
    }

    console.log(userId);
    let id = userId;
    let newUser = {
      id,
      name: name,
      email: email,
      age: age,
    };
    users.push(newUser);
    writeFile(users);
    res.status(201).json(newUser);
  } catch (error) {
    throw error;
  }
};

let updateUser = (req, res) => {
  try {
    let id = +req.params.id - 1;
    let data = readFile();
    if (!data[id]) throw new Error("Kiritilgan IDda user topilmadi");
    let forUpdata = req.body;
    data[id].name = forUpdata.name;
    data[id].email = forUpdata.email;
    data[id].age = forUpdata.age;
    writeFile(data);
    res.status(201).json({
      message: "user successfull updata",
      data: data[id],
    });
  } catch (error) {
    throw error;
  }
};

let deleteUser = (req, res) => {
  try {
    let data = readFile();
    let id = +req.params.id;
    let index = data.findIndex((val) => val.id == id);
    if (index === -1) {
      return res.status(404).json({ error: "ID noto‘g‘ri" });
    }
    let deletedUser = data.splice(index, 1);
    writeFile(data);
    res.status(200).json({
      message: "User successfully deleted",
      deletedUser: deletedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

let filterUsers = (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
};

export { getUsers, getUserById, postUser, updateUser, deleteUser, filterUsers };
