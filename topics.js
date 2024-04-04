let score = 0;
        document.getElementById('score').innerText = "Score: " + score;

        async function fetchQuestions(category) {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${encodeURIComponent(category)}&type=multiple`);
                const data = await response.json();
                displayQuestions(data.results);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        }

        function displayQuestions(questions) {
            const main = document.querySelector('main');
            main.innerHTML = '';

            questions.forEach(question => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h2>${question.question}</h2>
                    <ul>
                        ${question.incorrect_answers.map(answer => `<li>${answer}</li>`).join('')}
                        <li>${question.correct_answer}</li>
                    </ul>
                `;
                main.appendChild(div);
            });
        }