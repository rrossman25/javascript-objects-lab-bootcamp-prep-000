let recipes = {eggs:2, salt: '1 tsp', butter:'8 cups'};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] =value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value{
  let obj = {};
  object.assign(obj, object);
  obj[key] =value;
  return obj;
}