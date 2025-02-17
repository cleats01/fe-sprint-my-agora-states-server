const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    let data = discussionsData;
    if (req.query.page) {
      if (req.query.limit) {
        if (req.query.limit > discussionsData.length || req.query.limit < 0) {
          return res.status(200).json([]);
        } else if (isNaN(+req.query.limit)) {
          return res.status(400).json();
        }
        data = discussionsData.slice((req.query.page-1)*req.query.limit, req.query.page*req.query.limit);
        return res.status(200).json(data);
      } else {
        data = discussionsData.slice(0,10);
        return res.status(200).json(data);
      }
    } else {
      if (req.query.limit) {
        if (req.query.limit > discussionsData.length || req.query.limit < 0) {
          return res.status(200).json([]);
        } else if (isNaN(+req.query.limit)) {
          return res.status(400).json();
        }
        data = discussionsData.slice(0,req.query.limit);
        return res.status(200).json(data);
      } else {
        data = discussionsData.slice(0,10);
        return res.status(200).json(data);
      }
    }
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    if (discussionsData.filter(el=>el.id===+req.params.id).length) {
      let data = discussionsData.filter(el=>{
        return (el.id===+req.params.id);
      })[0];
      return res.status(200).json(data);
    } else {
      return res.status(404).json();
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
