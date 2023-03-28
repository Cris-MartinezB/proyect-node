const express = require('express');
const WorkoutRouter = require("./routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/routes/workouts", WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});