var answers = {};

// conceitual + expert
const Paired_Comparison = new Map()
const respostas = new Map()
Paired_Comparison.set('question1', 1)
Paired_Comparison.set('question2', 1)
Paired_Comparison.set('question3', 0)
Paired_Comparison.set('question4', 0)
Paired_Comparison.set('question5', 0)

const UX_expert_evaluation = new Map()
UX_expert_evaluation.set('question1', 1)
UX_expert_evaluation.set('question2', 1)
UX_expert_evaluation.set('question3', 0)
UX_expert_evaluation.set('question4', 0)
UX_expert_evaluation.set('question5', 0)

// -----------------------------------------------
// conceitual + um
const Affect_Grid = new Map()
Affect_Grid.set('question1', 1)
Affect_Grid.set('question2', 2)
Affect_Grid.set('question3', 0)
Affect_Grid.set('question4', 0)
Affect_Grid.set('question5', 0)

const Private_Camera = new Map()
Private_Camera.set('question1', 1)
Private_Camera.set('question2', 2)
Private_Camera.set('question3', 0)
Private_Camera.set('question4', 0)
Private_Camera.set('question5', 0)

const Conversation = new Map()
Conversation.set('question1', 1)
Conversation.set('question2', 2)
Conversation.set('question3', 0)
Conversation.set('question4', 0)
Conversation.set('question5', 0)

const Sentence_Completion = new Map()
Sentence_Completion.set('question1', 1)
Sentence_Completion.set('question2', 2)
Sentence_Completion.set('question3', 0)
Sentence_Completion.set('question4', 0)
Sentence_Completion.set('question5', 0)
// -----------------------------------------------
// conceitual + grupo
const Product_Semantic_Analysis = new Map()
Product_Semantic_Analysis.set('question1', 1)
Product_Semantic_Analysis.set('question2', 3)
Product_Semantic_Analysis.set('question3', 0)
Product_Semantic_Analysis.set('question4', 0)
Product_Semantic_Analysis.set('question5', 0)
// -----------------------------------------------
// conceitual + par
const Co_Discovery = new Map()
Co_Discovery.set('question1', 1)
Co_Discovery.set('question2', 4)
Co_Discovery.set('question3', 0)
Co_Discovery.set('question4', 0)
Co_Discovery.set('question5', 0)
// ---------------------------------------------
// Protótipo Inicial + Expert 
const Immersion = new Map()
Immersion.set('question1', 2)
Immersion.set('question2', 1)
Immersion.set('question3', 0)
Immersion.set('question4', 0)
Immersion.set('question5', 0)

const Property_checklist = new Map()
Property_checklist.set('question1', 2)
Property_checklist.set('question2', 1)
Property_checklist.set('question3', 0)
Property_checklist.set('question4', 0)
Property_checklist.set('question5', 0)
// ---------------------------------------------
// Protótipo Inicial + um
const Emocards = new Map()
Emocards.set('question1', 2)
Emocards.set('question2', 2)
Emocards.set('question3', 0)
Emocards.set('question4', 0)
Emocards.set('question5', 0)

const Semi_Structured_experience_interview = new Map()
Semi_Structured_experience_interview.set('question1', 2)
Semi_Structured_experience_interview.set('question2', 2)
Semi_Structured_experience_interview.set('question3', 0)
Semi_Structured_experience_interview.set('question4', 0)
Semi_Structured_experience_interview.set('question5', 0)

// ---------------------------------------------
// Protótipo Inicial + grupo

const Group_based_expert_walkthrough = new Map()
Group_based_expert_walkthrough.set('question1', 2)
Group_based_expert_walkthrough.set('question2', 3)
Group_based_expert_walkthrough.set('question3', 0)
Group_based_expert_walkthrough.set('question4', 0)
Group_based_expert_walkthrough.set('question5', 0)

// ---------------------------------------------
// Protótipo Inicial + par

// semi structured experience interview

// ---------------------------------------------
// Protótipo Funcional + expert

//Immersion, Paired Comparison, Property Checklist, UX expert evaluation

// ---------------------------------------------
// Protótipo Funcional + um

const Attrakdiff = new Map()
Attrakdiff.set('question1', 3)
Attrakdiff.set('question2', 2)
Attrakdiff.set('question3', 0)
Attrakdiff.set('question4', 0)
Attrakdiff.set('question5', 0)

const Long_term_dairy_study = new Map()
Long_term_dairy_study.set('question1', 3)
Long_term_dairy_study.set('question2', 2)
Long_term_dairy_study.set('question3', 0)
Long_term_dairy_study.set('question4', 0)
Long_term_dairy_study.set('question5', 0)

// ---------------------------------------------
// Protótipo Funcional + grupo

//Group-based expert walkthrough

// Protótipo Funcional + par

//Co-discovery, Private Camera Conversation, Semi-Structured experience interview

//Completo + expert

//Paired Comparison, UX expert evaluation


//---------------------------------
//Completo + um

const product_experience_tracker = new Map()
product_experience_tracker.set('question1', 4)
product_experience_tracker.set('question2', 2)
product_experience_tracker.set('question3', 0)
product_experience_tracker.set('question4', 0)
product_experience_tracker.set('question5', 0)

//---------------------------------
//Completo + grupo

const Living_Lab_Method = new Map()
Living_Lab_Method.set('question1', 4)
Living_Lab_Method.set('question2', 3)
Living_Lab_Method.set('question3', 0)
Living_Lab_Method.set('question4', 0)
Living_Lab_Method.set('question5', 0)

//---------------------------------
//Completo + par

//Co-discovery, Private Camera Conversation, Semi-Structured experience interview

var tecnicas = [Paired_Comparison, UX_expert_evaluation, Affect_Grid, Private_Camera, Conversation,Sentence_Completion,Product_Semantic_Analysis,Co_Discovery,Immersion,Property_checklist,Emocards,Semi_Structured_experience_interview,Group_based_expert_walkthrough,Attrakdiff,Long_term_dairy_study,product_experience_tracker,Living_Lab_Method];
var iguais = []
var nomes = ''


// -----------------------------------------------
const Paired_Comparison_informacao = new Map()
Paired_Comparison_informacao.set(0, 'Paired Comparison')

const UX_expert_evaluation_informacao = new Map()
UX_expert_evaluation_informacao.set(1, 'UX expert evaluation')

const Affect_Grid_informacao = new Map()
Affect_Grid_informacao.set(2, 'Affect Grid')

const Private_Camera_informacao = new Map()
Private_Camera_informacao.set(3, 'Private Camera conversation')

const  Conversation_informacao = new Map()
Conversation_informacao.set(4, 'Conversation')

const  Sentence_Completion_informacao = new Map()
Sentence_Completion_informacao.set(5, 'Sentence Completion')

const  Product_Semantic_Analysis_informacao = new Map()
Product_Semantic_Analysis_informacao.set(6, 'Product Semantic Analysis')

const  Co_Discovery_informacao = new Map()
Co_Discovery_informacao.set(7, 'Co Discovery')

const  Immersion_informacao = new Map()
Immersion_informacao.set(8, 'Immersion')

const  Property_checklist_informacao = new Map()
Property_checklist_informacao.set(9, 'Property checklist')

const  Emocards_informacao = new Map()
Emocards_informacao.set(10, 'Emocards')

const  Semi_Structured_experience_interview_informacao = new Map()
Semi_Structured_experience_interview_informacao.set(11, 'Semi Structured experience interview')

const  Group_based_expert_walkthrough_informacao = new Map()
Group_based_expert_walkthrough_informacao.set(12, 'Group based expert walkthrough')

const  Attrakdiff_informacao = new Map()
Attrakdiff_informacao.set(13, 'Attrakdiff')

const  Long_term_dairy_study_informacao = new Map()
Long_term_dairy_study_informacao.set(14, 'Long term dairy study')

const  product_experience_tracker_informacao = new Map()
product_experience_tracker_informacao.set(15, 'Product experience tracker ')

const  Living_Lab_Method_informacao = new Map()
Living_Lab_Method_informacao.set(16, 'Living Lab Method')

var informacao = [Paired_Comparison_informacao,UX_expert_evaluation_informacao,Affect_Grid_informacao,Private_Camera_informacao,Conversation_informacao, Sentence_Completion_informacao,Product_Semantic_Analysis_informacao,Co_Discovery_informacao,Immersion_informacao,Property_checklist_informacao,Emocards_informacao,Semi_Structured_experience_interview_informacao,Group_based_expert_walkthrough_informacao,Attrakdiff_informacao,Long_term_dairy_study_informacao,product_experience_tracker_informacao,Living_Lab_Method_informacao]
var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        respostas.set('question' + question_number, parseInt(event.target.value))
        console.log(nomes)
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    } else if(totalScore() > 7){
        var score_info = "Parabéns! Você está bem de segurança!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');console.log(iguais[0])
var submit5 = document.getElementById('submit5');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('40%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
})

const mapsAreEqual = (m1, m2) => m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));


submit5.addEventListener('click', function(){

    for (var i = 0; i < tecnicas.length; i++) {
        if(mapsAreEqual(respostas, tecnicas[i]) == true){
         iguais[i] = informacao[i]
         nomes = nomes + " |" + iguais[i].get(i)

         }
    }


        document.getElementById("printtotalscore").innerHTML = nomes;
        console.log("aaaaaaaaaaaaaaaaaaa")
        console.log(nomes)
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}