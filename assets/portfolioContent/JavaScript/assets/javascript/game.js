///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array with question, options and answers 
var card = $("#quiz-area");

let questions = [
  {
    question:
      "How do you figure out how long it will take to double your money?",
    answers:
      [
        "read the investing almanac",
        "ask your teacher",
        "the Rule of 72",
        "just Guess",
        "don't know",
      ],
    correctAnswer: "the Rule of 72" //Rule of 72
  },

  {
    question:
      "What investing option allows you to make the most money?",
    answers:
      [
        "saving bond",
        "stocks",
        "matual funds",
        "money markets",
        "don't know",
      ],
    correctAnswer: "stocks" //stocks
  },

  {
    question:
      "Who insures your stocks?",
    answers:
      [
        "FDIC",
        "NCUA",
        "your brojer",
        "no one, that is the risk you take",
        "don't know",
      ],
    correctAnswer: "no one, that is the risk you take" // no one
  },

  {
    question:
      "What is a maturity date?",
    answers:
      [
        "the age your mother lets you start dating",
        "the day retirement funds are released",
        "the date on which a debt becomes due for payment",
        "the date your bond is issued",
        "don't know",
      ],
    correctAnswer: "the date on which a debt becomes due for payment" //date on which a debt becomes due
  },

  {
    question:
      "What is a fixed rate?",
    answers:
      [
        "a loan in which the interest rate does not change during the entire term of the loan",
        "the amount a financial institution charges your for bouncing a check",
        "the length of a bond agreement",
        "a rate that has been broken and then glued together",
        "don't know",
      ],
    correctAnswer: "a loan in which the interest rate does not change during the entire term of the loan"// loan in which the interest rate doesn't change 
  },


  {
    question:
      "A dividend is?",
    answers:
      [
        "the amount of money a savings bond is worth",
        "the total amount of money you have in investments",
        "stock share earnings",
        "money your stock broker makes on fees",
        "don't know",
      ],
    correctAnswer: "stock share earnings"// stock share earnings
  },

  {
    question:
      "What is the best investment option for long term savings?",
    answers:
      [
        "savings bond",
        "stocks",
        "saving account",
        "money markets",
        "don't know",
      ],
    correctAnswer: "stocks"//stocks
  },

  {
    question:
      "When should you start saving for retirement?",
    answers:
      [
        "when you get your first job",
        "when you get married",
        "when you have children",
        "as soon as possible",
        "don't know",
      ],
    correctAnswer: "as soon as possible"//as SOON AS POSSIBLE 
  }
];


// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function () {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function () {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function () {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function () {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
  game.start();
});

$(document).on("click", "#done", function () {
  game.done();
});









