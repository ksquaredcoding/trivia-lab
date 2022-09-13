import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js";
import { questionServer } from "./AxiosService.js";

class QuestionsService {

  async getQuestion() {
    const res = await questionServer.get('api.php', {
      params: {
        amount: 1,
        difficulty: 'easy'
      }
    })
    console.log('pls', res);
    debugger
    appState.questions = res.data.results.map(rawData => new Question(rawData))
    console.log(appState.questions);
  }
}

export const questionsService = new QuestionsService