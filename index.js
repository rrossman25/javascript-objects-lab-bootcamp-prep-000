let recipes = {eggs:2, salt: '1 tsp', butter:'8 cups'};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] =value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  let obj = Object.assign({}, object);
  obj[key] =value;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  let obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteObjectByKey (obj, key){
  delete obj[key];
  return obj;
}