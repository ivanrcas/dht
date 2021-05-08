// Temp
import OldSelect from './OldSelect.js';

export { Select } from './Select.js';
export { Label } from './Label.js';
export { Range } from './Range.js';
export { TextArea } from './TextArea.js';
export { TextInput } from './TextInput.js';
export { DropdownMenu } from './DropdownMenu.js';
export { OldSelect };

// Desactivar click derecho
document.oncontextmenu = function(){return false}

//Desactivar seleccion de texto
document.onselectstart = function() {return false;}
document.onmousedown = function() {return false;}
