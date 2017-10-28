'use strict';
require('handlebars');
const { technologies } = require('./technologies.json');
let techgrid = require('../partials/technologies.hbs');
let technologyGrid = techgrid({ technologies });
$('#techGrid').append(technologyGrid);
