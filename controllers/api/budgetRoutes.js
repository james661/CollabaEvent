const router = require("express").Router();
const { Budget } = require("../../models"); // Import the Budget model

// API POST route to create a new budget entry
router.post("/", async (req, res) => {
  try {
    const { amount, description, event_id } = req.body;

    const event = await Event.findByPk(event_id);
    if (!event) {
      return res.status(400).json({ error: "Invalid event_id" });
    }
    // Create a new budget entry in the database
    const newBudget = await Budget.create({
      amount,
      description,
      event_id,
    });

    res.status(201).json(newBudget);
  } catch (error) {
    console.error("Error creating budget entry:", error);
    res.status(500).json({ error: "Error creating budget entry" });
  }
});

//api route to get a budget for an event
router.get("/", async (req, res) => {
  try {
    // Find all budget entries in the database
    const budgets = await Budget.findAll();

    res.json(budgets);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching budgets:", error);
    res.status(500).json({ error: "Error fetching budgets" });
  }
});


module.exports = router;
