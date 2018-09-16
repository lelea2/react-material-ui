const enzyme = require("enzyme");
const Adapter = require('enzyme-adapter-react-16');

// Adding jquery to global namespace
// global.$ = global.jQuery = $;

enzyme.configure({ adapter: new Adapter() });