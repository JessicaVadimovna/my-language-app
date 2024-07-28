import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class WordStore {
  words = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    try {
      const response = await axios.get('https://itgirlschool.justmakeit.ru/api/words');
      this.words = response.data;
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  }

  async deleteWord(id) {
    try {
      await axios.delete(`https://itgirlschool.justmakeit.ru/api/words/${id}`);
      this.words = this.words.filter((word) => word.id !== id);
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  }

  async updateWord(id, updatedWord) {
    try {
      await axios.put(`https://itgirlschool.justmakeit.ru/api/words/${id}`, updatedWord);
      this.words = this.words.map((word) => (word.id === id ? updatedWord : word));
    } catch (error) {
      console.error('Error updating word:', error);
    }
  }

  async addWord(newWord) {
    try {
      const response = await axios.post('https://itgirlschool.justmakeit.ru/api/words', newWord);
      this.words.push(response.data);
    } catch (error) {
      console.error('Error adding word:', error);
    }
  }
}

export default new WordStore();




