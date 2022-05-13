import bugModel from '../Models/bugModel'

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 23456789,
      name: "Crash on load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Angelo Bennett",
      creator: "John Doe",
      priority: "1",
      time: "11:50",
    })
  );

  data.push(
    new bugModel({
      _id: 23456789,
      name: "Wont Load",
      details: "Screen goes black",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "Angelo Bennett",
      creator: "John Doe",
      priority: "3",
      time: "11:50",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priorty - b.priorty;
  });

  return sorted;
}
