// ManaidFinals.js
$(document).ready(function () {
    let currentQuestion = 0;
    let score = 0;
    let poet = 0;
    let soldier = 0;
    let king = 0;

    /*  
        // for copypasting
    {
            question: "Question",
            options: ["Option", "Option", "Option"],
         
        },

     */

    const questions = [
        {
            question: "Choose a line from a Hozier song",
            options: ["Each day you’d rise me, know that I would gladly be the Icarus to your certainty, my sunlight.",
             "Ain’t it a gentle sound, the rolling in the graves? Ain’t it like thunder under earth, the sound it makes? Ain’t it exciting you, the rumble where you lay?",
              "Still, the mind, rejecting this new empty space, fills it with something or someone. No closer could I be to god or why he would do what he’s done."]
            
        },

        {
            question: "Choose a fear",
            options: ["What will come in time, and what won’t no matter how much time passes", 
                "That I’m destined for something I don’t want.", 
                "That everything I ever failed relied on luck I didn’t have. That I did everything I could, all for luck to take it away in the end."
                 ]
         
        },
        

        {
            question: "You meddle into other people’s personal affairs and try to help. Others, however, have expressed their dislike for it, and don’t want you to do so. You continue to meddle. What does this make you?",
            options: ["A hero.", "A nuisance.", "Devoted."],
         
        },

        {
            question: "Choose a line from a BTS song",
            options: ["Never mind. It won’t be easy but have this engraved in your heart. If you think you’re gonna crash, accelerate even harder you idiot.",
             "They want you in fear. How dare you express your thoughts? Fold it back like origami.", 
             "My shadow, I named him ‘hesitation’ and called him so. After he became it, he never once hesitated."],
         
        },

        {
            question: "Choose a line from a Mitski song",
            options: ["It’s just that I fell in love with a war and nobody told me that it ended.",
             "Mom, am I still young? Can I dream for a few months more?", 
             "Oh hunter, if you didn’t want the beautiful so badly, perhaps you would have found it in your spirit singing softly."],
         
        },

         {
            question: "What does love do?",
            options: ["It rules over all.", "It gives more than it takes.", "It takes more than it gives."],
         
        },

        {
            question: "What is shame?",
            options: ["God’s first gift to me. Everyday, I am reminded of some otherworldly being that sees my every move, and writes a line under the column of either good or evil. Every step, every look, every almost word that comes out of my mouth; a line. Shame comes from the idea of the tally. What have I done that has increased my number for evil that I didn’t think could? How many nails do I need in my limbs to make up for it? If you tell me, that finally, I am more good than evil, then I will stand here, unmoving, unwilling to risk changing that.",
             "A second voice. I am asked, “Are you alright?” and my stomach says, “Please tie my hands behind my back so I may stop destroying myself,” and the second voice, whose only wish is to keep you palpable and pleasant, says, “Yes.“", 
             "The thing that keeps me up at night. The shadow that follows me into bed and sleeps with me. The thing in my stomach that makes me vomit up everything that tries to nurture me."],
         
        },

        {
            question: "Choose a quote from the game Disco Elysium",
            options: ["All the gifts your parents gave you, all the love and patience of your friends, you drowned in a neurotoxin. You let misery win. And it will keep on winning til you die — or overcome it.",
             "Brother, you already were a ghost. Up there, screaming — along with all of them. Scaring each other. Haunting each other. It's the living who are ghosts. The dead are silent. They don't rattle windows or write letters in blood. The living do.", 
             "The limbed and headed machine of pain and undignified suffering is firing up again. It wants to walk the desert. Hurting. Longing. Dancing to disco music.",
             "It's the world, Harry-boy. And you're made of it. Every day you're out there you make more of yourself from it. I'm afraid you can't be unmade now."],
         
        },

         {
            question: "What do you want to do to the world?",
            options: ["Change it.", "Curse it.", "Understand it."],
         
        },

        {
            question: "What does the world do to you?",
            options: ["What hasn’t it done to me?", 
                "It puts its weight on my shoulders.",
                 "Nothing. The world does something for everyone else, but not me."],
         
        },

        
    ];

function displayQuestion() {
 
    $("#result-container").hide();

    const question = questions[currentQuestion];
    $("#question").text(question.question);

    const optionsList = $("#options");
    optionsList.empty();

    question.options.forEach(function (option) {
        optionsList.append(`<li>${option}</li>`);
    });

    
    $("#next-btn").hide();

    // Update the progress counter
    $("#progress-counter").text(`${currentQuestion + 1}/${questions.length}`);
}

function showResult() {
   
    
    $("#question-container").hide();

    $("#result-container").show();
    if (poet >= soldier && poet >= king){
        console.log(soldier);
        console.log(poet);
        console.log(king);
        $("#result").text(`POET`);
        $("#result-desc").text('hi');
    }
    else if (soldier >= poet && soldier >= king){
        console.log(soldier);
        console.log(poet);
        console.log(king);
        $("#result").text(`SOLDIER`);
          $("#result-desc").text('hi');
    }
    else if (king >= poet && king >= soldier){
         console.log(soldier);
        console.log(poet);
        console.log(king);
        $("#result").text(`KING`);
          $("#result-desc").text('hi');
    }
   
}

/*  
    // for copypasting
    else if (selectedOption === "What")
    {
            
        } 

        */


    $("#quiz-container").on("click", "li", function () {
        const selectedOption = $(this).text();

        
             if (selectedOption === "Each day you’d rise me, know that I would gladly be the Icarus to your certainty, my sunlight.") 
        {
            soldier+=3;
            poet+=1;
        }

        else if (selectedOption === "Ain’t it a gentle sound, the rolling in the graves? Ain’t it like thunder under earth, the sound it makes? Ain’t it exciting you, the rumble where you lay?") 
        {
            king+=3;
            soldier+=1;
        }

        else if (selectedOption === "Still, the mind, rejecting this new empty space, fills it with something or someone. No closer could I be to god or why he would do what he’s done."){
            poet+=3;
            king+=1;
        }
 
      
        else if (selectedOption === "What will come in time, and what won’t no matter how much time passes"){
            poet+=2;
        }

          else if (selectedOption === "That I’m destined for something I don’t want")
    {
           soldier+=2; 
        } 

        else if (selectedOption === "That everything I ever failed relied on luck I didn’t have. That I did everything I could, all for luck to take it away in the end." ){

            king+=2;
        }

         else if (selectedOption === "A hero.")
    {
            king+=2;
            poet+=3;
        }

         else if (selectedOption === "A nuisance.")
    {
            soldier+=3;
            king+=2;
        }

         else if (selectedOption === "Devoted.")
    {
            king+=3;
            poet+=2;
        }

        else if (selectedOption === "My shadow, I named him ‘hesitation’ and called him so. After he became it, he never once hesitated."){
            king+=3;
            poet+=1;
        }

        else if (selectedOption === "Never mind. It won’t be easy but have this engraved in your heart. If you think you’re gonna crash, accelerate even harder you idiot."){
            poet+=3;
            soldier+=1;
        }

        else if (selectedOption === "They want you in fear. How dare you express your thoughts? Fold it back like origami."){
            soldier+=3;
            king+=1;
        }

        else if (selectedOption === "It’s just that I fell in love with a war and nobody told me that it ended."){
            poet+=3;
            soldier+=1;
        }

        else if (selectedOption === "Mom, am I still young? Can I dream for a few months more?"){
            king +=3;
            soldier+=1;
        }

        else if (selectedOption === "Oh hunter, if you didn’t want the beautiful so badly, perhaps you would have found it in your spirit singing softly."){
            soldier +=3;
            king +=1;
        }

        else if (selectedOption === "It rules over all."){
            poet+=3;
        }

        else if (selectedOption === "It gives more than it takes."){
            poet+=3;
        }

        else if (selectedOption === "It takes more than it gives."){
            king+=3;
            soldier+=3;
        }

        else if (selectedOption === "God’s first gift to me. Everyday, I am reminded of some otherworldly being that sees my every move, and writes a line under the column of either good or evil. Every step, every look, every almost word that comes out of my mouth; a line. Shame comes from the idea of the tally. What have I done that has increased my number for evil that I didn’t think could? How many nails do I need in my limbs to make up for it? If you tell me, that finally, I am more good than evil, then I will stand here, unmoving, unwilling to risk changing that.")
        {
            poet+=3;
            soldier+=1;
        }

        else if (selectedOption === "A second voice. I am asked, “Are you alright?” and my stomach says “Please tie my hands behind my back so I may stop destroying myself,” and the second voice, whose only wish is to keep you palpable and pleasant, says, “Yes.”"){
            king+=3;
            poet+=1;
        }

        else if (selectedOption === "The thing that keeps me up at night. The shadow that follows me into bed and sleeps with me. The thing in my stomach that makes me vomit up everything that tries to nurture me."){
            king +=1;
            soldier+=3;
        }

        else if (selectedOption === "All the gifts your parents gave you, all the love and patience of your friends, you drowned in a neurotoxin. You let misery win. And it will keep on winning til you die — or overcome it."){
            soldier+=2;
            king+=1;
        }

        else if (selectedOption === "Brother, you already were a ghost. Up there, screaming — along with all of them. Scaring each other. Haunting each other. It's the living who are ghosts. The dead are silent. They don't rattle windows or write letters in blood. The living do."){
            poet+=2;
            king+=1;
        }

        else if (selectedOption === "The limbed and headed machine of pain and undignified suffering is firing up again. It wants to walk the desert. Hurting. Longing. Dancing to disco music."){
            king+=2;
            poet+=1;
        }

        else if (selectedOption === "It's the world, Harry-boy. And you're made of it. Every day you're out there you make more of yourself from it. I'm afraid you can't be unmade now."){
            king+=1;
            poet+=1;
            soldier+=1;
        }

        else if (selectedOption === "Change it."){
            king+=2;
            poet+=1;
        }

        else if (selectedOption === "Curse it."){
            soldier+=2;
            king+=1;
        }

        else if (selectedOption === "Understand it."){
            poet+=3;
        }

        else if (selectedOption === "What hasn’t it done to me?"){
            poet+=2;
            soldier+=1;
        }

        else if (selectedOption === "It puts its weight on my shoulders."){
            king+=3;
        }

        else if (selectedOption === "Nothing. The world does something for everyone else, but not me."){
          soldier+=3;
        }
        

        currentQuestion++;
           if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
     

    });

    // Initial display
    displayQuestion();
});

$(document).ready(function () {
    $("#about-btn").on("click", function () {
        $("#about-popup").fadeIn();
    });

    $("#close-btn").on("click", function () {
        $("#about-popup").fadeOut();
    });
});

