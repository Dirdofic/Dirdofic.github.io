const database = {
  numerals: {
    name: "Числительные",
    tasks: [
      
      { type: "choice", question: "Родительный падеж:", content: "сорок", options: ["сорока", "сороков"], correct: "сорока" },
      { type: "choice", question: "Дательный падеж:", content: "сорок", options: ["сорока", "сорокам"], correct: "сорокам" },
      { type: "choice", question: "Творительный падеж:", content: "сорок", options: ["сороками", "сорока"], correct: "сороками" },
      { type: "choice", question: "Предложный падеж:", content: "сорок", options: ["о сорока", "о сороках"], correct: "о сорока" },
      
      { type: "choice", question: "Родительный падеж:", content: "девяносто", options: ["девяноста", "девяностов"], correct: "девяноста" },
      { type: "choice", question: "Дательный падеж:", content: "девяносто", options: ["девяносту", "девяностам"], correct: "девяносту" },
      { type: "choice", question: "Творительный падеж:", content: "девяносто", options: ["девяноста", "девяностами"], correct: "девяностами" },
      
      { type: "choice", question: "Родительный падеж:", content: "сто", options: ["ста", "стов"], correct: "ста" },
      { type: "choice", question: "Дательный падеж:", content: "сто", options: ["сту", "ста"], correct: "ста" },
      { type: "choice", question: "Предложный падеж:", content: "сто", options: ["о ста", "о стое"], correct: "о ста" },

      
      { type: "choice", question: "Родительный падеж:", content: "пятьдесят", options: ["пятидесяти", "пятьдесяти"], correct: "пятидесяти" },
      { type: "choice", question: "Дательный падеж:", content: "пятьдесят", options: ["пятидесяти", "пятидесятам"], correct: "пятидесяти" },
      { type: "choice", question: "Творительный падеж:", content: "пятьдесят", options: ["пятьюдесятью", "пятьюдесятями"], correct: "пятьюдесятью" },
      { type: "choice", question: "Предложный падеж:", content: "пятьдесят", options: ["о пятидесяти", "о пятьдесятах"], correct: "о пятидесяти" },

      { type: "choice", question: "Родительный падеж:", content: "шестьдесят", options: ["шестидесяти", "шестьдесяти"], correct: "шестидесяти" },
      { type: "choice", question: "Творительный падеж:", content: "шестьдесят", options: ["шестьюдесятью", "шестьюдесятями"], correct: "шестьюдесятью" },

      { type: "choice", question: "Родительный падеж:", content: "семьдесят", options: ["семидесяти", "семьдесяти"], correct: "семидесяти" },
      { type: "choice", question: "Дательный падеж:", content: "семьдесят", options: ["семидесяти", "семидесятам"], correct: "семидесяти" },
      { type: "choice", question: "Творительный падеж:", content: "семьдесят", options: ["семьюдесятью", "семьюдесятями"], correct: "семьюдесятью" },

      { type: "choice", question: "Родительный падеж:", content: "восемьдесят", options: ["восьмидесяти", "восемьдесяти"], correct: "восьмидесяти" },
      { type: "choice", question: "Творительный падеж:", content: "восемьдесят", options: ["восьмьюдесятью", "восемьюдесятью"], correct: "восьмьюдесятью" },

      
      { type: "choice", question: "Родительный падеж:", content: "двести", options: ["двухсот", "двустов"], correct: "двухсот" },
      { type: "choice", question: "Дательный падеж:", content: "двести", options: ["двумстам", "двухстам"], correct: "двумстам" },
      { type: "choice", question: "Творительный падеж:", content: "двести", options: ["двумястами", "двухстами"], correct: "двумястами" },
      { type: "choice", question: "Предложный падеж:", content: "двести", options: ["о двухстах", "о двустах"], correct: "о двухстах" },

      { type: "choice", question: "Родительный падеж:", content: "триста", options: ["трёхсот", "тристов"], correct: "трёхсот" },
      { type: "choice", question: "Дательный падеж:", content: "триста", options: ["трёмстам", "трёмстами"], correct: "трёмстам" },
      { type: "choice", question: "Творительный падеж:", content: "триста", options: ["тремястами", "трёмстами"], correct: "тремястами" },

      { type: "choice", question: "Родительный падеж:", content: "четыреста", options: ["четырёхсот", "четырехстов"], correct: "четырёхсот" },
      { type: "choice", question: "Дательный падеж:", content: "четыреста", options: ["четырёмстам", "четырёхстам"], correct: "четырёмстам" },
      { type: "choice", question: "Творительный падеж:", content: "четыреста", options: ["четырьмястами", "четырьмистами"], correct: "четырьмястами" },

      { type: "choice", question: "Родительный падеж:", content: "пятьсот", options: ["пятисот", "пятьсот"], correct: "пятисот" },
      { type: "choice", question: "Дательный падеж:", content: "пятьсот", options: ["пятистам", "пятьстам"], correct: "пятистам" },
      { type: "choice", question: "Творительный падеж:", content: "пятьсот", options: ["пятьюстами", "пятьюстами"], correct: "пятьюстами" },
      { type: "choice", question: "Предложный падеж:", content: "пятьсот", options: ["о пятистах", "о пятьстах"], correct: "о пятистах" },

    
      { type: "choice", question: "Сборное числительное:", content: "... студентов", options: ["трое", "три"], correct: "трое" },
      { type: "choice", question: "Сборное числительное:", content: "... детей", options: ["двое", "два"], correct: "двое" },
      { type: "choice", question: "Выберите правильную форму:", content: "... брата", options: ["оба", "обе"], correct: "оба" },
      { type: "choice", question: "Выберите правильную форму:", content: "... сестры", options: ["оба", "обе"], correct: "обе" },
      { type: "choice", question: "Родительный падеж:", content: "оба", options: ["обоих", "обоех"], correct: "обоих" },
      { type: "choice", question: "Родительный падеж:", content: "обе", options: ["обоих", "обеих"], correct: "обеих" }
    ]
  },
  orthography: {
    name: "Орфография",
    tasks: [
      { type: "choice", question: "Выберите правильное написание:", content: "пр_вет", options: ["и", "е"], correct: "и" },
      { type: "input", question: "Вставьте пропущенную букву:", content: "к_рова", correct: "о" }
    ]
  }
};

let currentTopic = null;
let currentTasks = [];
let currentIndex = 0;
let selectedOption = null;
let selectedVowelIndex = null;


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initTopics() {
  const topicsDiv = document.getElementById('topicsList');
  topicsDiv.innerHTML = '';
  
  for (const key in database) {
    const btn = document.createElement('button');
    btn.className = 'topic-btn';
    btn.textContent = database[key].name;
    btn.onclick = () => selectTopic(key);
    topicsDiv.appendChild(btn);
  }
  
  document.getElementById('topic-screen').classList.remove('hidden');
  document.getElementById('task-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
}

function selectTopic(topicKey) {
  currentTopic = topicKey;
  
  currentTasks = shuffleArray([...database[topicKey].tasks]);
  currentIndex = 0;
  
  document.getElementById('topic-screen').classList.add('hidden');
  document.getElementById('task-screen').classList.remove('hidden');
  loadTask();
}

function loadTask() {
  if (currentIndex >= currentTasks.length) {
    initTopics();
    return;
  }
  
  const task = currentTasks[currentIndex];
  document.getElementById('questionText').textContent = task.question;
  
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
  
  if (task.type === 'choice') {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word';
    wordDiv.textContent = task.content;
    contentDiv.appendChild(wordDiv);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    task.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => selectOption(btn, opt);
      optionsDiv.appendChild(btn);
    });
    contentDiv.appendChild(optionsDiv);
    
  } else if (task.type === 'input') {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word';
    wordDiv.textContent = task.content;
    contentDiv.appendChild(wordDiv);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'answerInput';
    input.placeholder = '?';
    input.oninput = function() {
      selectedOption = this.value;
      document.getElementById('checkBtn').disabled = !this.value;
    };
    contentDiv.appendChild(input);
    
  } else if (task.type === 'stress') {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word';
    
    for (let i = 0; i < task.content.length; i++) {
      const char = task.content[i];
      const span = document.createElement('span');
      span.textContent = char;
      
      if ('аеёиоуыэюя'.includes(char.toLowerCase())) {
        span.className = 'vowel';
        span.dataset.index = i;
        span.onclick = () => selectVowel(span, i);
      }
      
      wordDiv.appendChild(span);
    }
    contentDiv.appendChild(wordDiv);
  }
  
  selectedOption = null;
  selectedVowelIndex = null;
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('result-screen').classList.add('hidden');
}

function selectOption(btn, option) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedOption = option;
  document.getElementById('checkBtn').disabled = false;
}

function selectVowel(span, index) {
  document.querySelectorAll('.vowel').forEach(v => v.classList.remove('selected'));
  span.classList.add('selected');
  selectedVowelIndex = index;
  document.getElementById('checkBtn').disabled = false;
}

function checkAnswer() {
  const task = currentTasks[currentIndex];
  let isCorrect = false;
  
  if (task.type === 'choice' || task.type === 'input') {
    let userAnswer = task.type === 'input' 
      ? document.getElementById('answerInput').value.trim() 
      : selectedOption;
    isCorrect = userAnswer.toLowerCase() === task.correct.toLowerCase();
  } else if (task.type === 'stress') {
    isCorrect = selectedVowelIndex === task.correct;
  }
  
  const resultDiv = document.getElementById('resultMessage');
  resultDiv.className = isCorrect ? 'correct' : 'incorrect';
  
  if (task.type === 'stress') {
    const correctWord = task.content.split('');
    correctWord[task.correct] = correctWord[task.correct].toUpperCase();
    resultDiv.innerHTML = isCorrect 
      ? '✓ Правильно!' 
      : `✗ Ошибка! Правильно: ${correctWord.join('')}`;
  } else {
    resultDiv.innerHTML = isCorrect 
      ? '✓ Правильно!' 
      : `✗ Ошибка! Правильный ответ: ${task.correct}`;
  }
  
  document.getElementById('task-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
}

function nextTask() {
  currentIndex++;
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('task-screen').classList.remove('hidden');
  loadTask();
}

initTopics();