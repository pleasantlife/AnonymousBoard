import _ from 'lodash';
import keywordSubscriberRepository from '../repository/keywordSubscriberRepository.js';

export default {
  keywordMatching(body) {
    const regExp = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
    let words = body.replace(regExp, ' ').replace(/ +/g, '|');
    if (words.substr(-1) === '|') {
      words = words.slice(0, words.length - 1);
    }
    return words;
  },

  async sendMessage(subscribers) {
    // TODO: Send alarm
    const messages = _.map(subscribers, (item) => {
      return {
        subscriberId: item.id,
        message: `${item.subscriber}님이 등록한 키워드에 새 글(댓글)이 등록되었습니다.`,
      };
    });
    return messages;
  },

  async sendKeywordAlarm(bodyData) {
    const keywords = this.keywordMatching(bodyData);
    const subscribers = await keywordSubscriberRepository.findSubscriberByKeyword(keywords);
    await this.sendMessage(subscribers);
  },
};
