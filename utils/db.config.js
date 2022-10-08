const mongoose = require("mongoose");

const DB = async () => {
  try {
    // const connection = await mongoose.connect(process.env.MONGOURI2, {
    //   useCreateIndex: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // });
    const connection = await mongoose.connect("mongodb://localhost:27017/youtube", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = DB;