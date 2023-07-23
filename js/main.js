import {getAtds} from './create-adt.js';
import {CreateAdts} from './create-adt-element.js';
import {disabledForms, enabledForms} from './loadForm.js';

disabledForms();
enabledForms();
CreateAdts(getAtds());
