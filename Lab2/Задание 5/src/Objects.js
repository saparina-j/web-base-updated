export function personUpdate(data) {
  if (data.gender === 'female') {
    delete data.age;
  } else if (data.gender === 'male') {
    if (!('income' in data)) {
      data.income = 100000;
    }
  }

  return data;
}


export function objectFieldsList(obj1, obj2, obj3) {
  const fields = new Set([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3),
  ]);

  return Array.from(fields).sort();
}


export function objectClone(obj, count) {
  const clones = [];

  for (let i = 0; i < count; i++) {
    const clone = deepClone(obj);
    clone.id = i;
    clones.push(clone);
  }

  return clones;
}

function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const result = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
}
