define(['./logger-9c715805'], function (logger) { 'use strict';

  logger.fetchApi('/posts').then(data => {
    data.forEach(item => {
      logger.log(item);
    });
  });

});
