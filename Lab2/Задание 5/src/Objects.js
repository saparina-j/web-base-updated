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
    const clone = JSON.parse(JSON.stringify(obj));
    clone.id = i;
    clones.push(clone);
  }

  return clones;
}
