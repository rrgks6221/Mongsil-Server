'use strict';

const Sequelize = require('../index');
const { Op } = require('sequelize');

module.exports = {
  findAllcategory: async () => {
    try {
      const noun = await Sequelize.BigCategory.findAll({
        attributes: ['name'],
        where: {
          name: {
            [Op.ne]: '동사/형용사',
          },
        },
      });
      const verbAndAdjective = await Sequelize.Category.findAll({
        attributes: ['name'],

        where: {
          bigCategoryId: 4,
        },
      });
      return { noun, verbAndAdjective };
    } catch (err) {
      throw err;
    }
  },
};
