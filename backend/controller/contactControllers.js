const contactDb = require("../model/usersModel");

exports.handleAddNewContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const contactExist = await contactDb.findOne({ phone });
  if (contactExist) return res.status(400).json({ message: "contact already exist" });

  try {
    await contactDb.create({
      name,
      email,
      phone,
      message,
    });
    return res.status(201).json({ message: "Cntact registerd successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.handleDeleteContact = async (req, res) => {
  let deleteContact = await contactDb.findByIdAndDelete({});
  res.json(allHoldings);

    try {
    const { id } = req.params;
    let deleteContact = await contactDb.findByIdAndDelete({id});
    res.status(200).json({ message: "contact deleted", deleteContact });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.handleViewContact = async (req, res) => {
  let allContact = await contactDb.find({});
  res.json(allContact);
};


