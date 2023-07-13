const router = require("express").Router();
const { Event } = require("../../models"); // Import the Event model

// API GET route to fetch all events
router.get("/", async (req, res) => {
  console.log("John 1");
  try {
    // Fetch all events from the database
    const events = await Event.findAll();
    console.log(events);
    // Send the events as a JSON response
  if (events.length === 0) {
    console.log("John 3");
    res.status(404).json({ message: "No events found!" });
    return;
  }
    res.json(events);
    console.log("John 4");
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Error fetching events" });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     // Extract the event data from the request body
//     const { event_name, description, start_date, end_date, user_id } = req.body;

//     // Creates a new event record in the database
//     const newEvent = await Event.create({
//       event_name,
//       description,
//       start_date,
//       end_date,
//       user_id,
//     });

//     res.status(201).json(newEvent);
//   } catch (error) {

//     console.error("Error creating event:", error);
//     res.status(500).json({ error: "Error creating event" });
//   }
// });


//  module.exports = router;

