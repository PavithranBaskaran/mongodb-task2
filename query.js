// Find all the topics and tasks which are thought in the month of October

db.topics.find({ month: "October" });

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({
  $and: [
    {
      date: { $gt: "2020-10-15" },
    },
    {
      date: { $lt: "2020-10-31" },
    },
  ],
});

// Find all the company drives and students who are appeared for the placement.
db.companydrives.find(
  {},
  {
    company: 1,
    appearedstudents: 1,
  }
);
// Find the number of problems solved by the user in codekata
db.users.find({},{codekata:1})

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({menteesCount: {$gt:15}})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
