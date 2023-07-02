import {createAdt} from './create-adt.js';


const getAtds = () => Array.from(
  {length: 10},
  (_,adtIndex)=> createAdt(adtIndex+1));
getAtds();
