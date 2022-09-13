import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawQuestion() {
  let template = ''
  appState.questions.forEach(q => template += q.Template)
  console.log(template);
  setHTML('questions', template)
}
export class QuestionsController {
  constructor() {
    this.getQuestion()
    appState.on('questions', _drawQuestion)
  }

  async getQuestion() {
    try {
      await questionsService.getQuestion()
    } catch (error) {
      console.error('getQuestion', error)
      Pop.error(error)
    }
  }

  selectAnswer(answer) {
    if (answer == appState.questions[0].correct_answer) {
      Pop.success('Correct!')
      appState.questions.splice(0, 1)
      this.getQuestion()
    } else {
      Pop.error('Wrong!')
    }
  }

}