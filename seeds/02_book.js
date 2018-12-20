
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {
          id: 1,
          "Book_Title": "Python In A Nutshell",
          "Book_Genre": "Python",
          "Book_Description": "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920012610/lrg.jpg",

        },
        {
          id: 2,
          "Book_Title": "Think Python",
          "Book_Genre": "Python",
          "Book_Description": "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920025696/lrg.jpg",

        },
        {
          id: 3,
          "Book_Title": "Learning React Native",
          "Book_Genre": "JavaScript",
          "Book_Description": "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920085270/lrg.jpg",

        },
        {
          id: 4,
          "Book_Title": "You Don't Know JS: ES6 & Beyond",
          "Book_Genre": "JavaScript",
          "Book_Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920033769/lrg.jpg",

        },
        {
          id: 5,
          "Book_Title": "You Don't Know JS: Scope & Closures",
          "Book_Genre": "JavaScript",
          "Book_Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920026327/lrg.jpg",

        },
        {
          id: 6,
          "Book_Title": "You Don't Know JS: Async & Performance",
          "Book_Genre": "JavaScript",
          "Book_Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.",
          "Book_Cover_URL": "https://covers.oreillystatic.com/images/0636920033752/lrg.jpg",

        }



      ]);
    });
};
