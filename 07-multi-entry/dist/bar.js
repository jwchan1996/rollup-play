define(['./logger-9c715805'], function (logger) { 'use strict';

  logger.fetchApi('/photos?albumId=1').then(data => {
    data.forEach(item => {
      logger.log(item);
    });
  });

});
