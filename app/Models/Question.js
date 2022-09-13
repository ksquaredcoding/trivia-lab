
export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get Template() {
    return /*html*/`
      <div class="col-md-3 my-3">
        <div class="card">
          <h3>${this.category}</h3>
          <p>${this.difficulty}</p>
          <p>${this.type}</p>
            <div class="card-body">
             <h4>${this.question}</h4>
             <div>
             <button class="btn btn-primary" type="button" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[0]}')">${this.incorrect_answers[0]}</button>
             <button class="btn btn-primary" type="button" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[1]}')">${this.incorrect_answers[1]}</button>
             <button class="btn btn-primary" type="button" onclick="app.questionsController.selectAnswer('${this.incorrect_answers[2]}')">${this.incorrect_answers[2]}</button>
             <button class="btn btn-primary" type="button" onclick="app.questionsController.selectAnswer('${this.correct_answer}')">${this.correct_answer}</button>
             </div>
          </div>
        </div>
      </div>
    `
  }
}