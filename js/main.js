'use strict';

let handlebars = require('handlebars');
let $ = require('jquery');

const { technologies } = require('../technologies.json');

let grid = require('../partials/technologies.hbs');

let technologyGrid = grid({ technologies });
$('#techGrid').append(technologyGrid);
