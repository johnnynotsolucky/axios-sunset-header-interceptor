export const ifThen = (p, x) => {
  if (p()) {
    return x();
  }
};

export const split = pattern => x => x.split(pattern);

export const paramsToObject = (acc, [key, value]) => ({
  ...acc,
  [key]: JSON.parse(value)
});

export const matchRelation = relation => ({ params }) =>
  params && params.rel === relation;

export const hasKey = (key, o) => () => !!o[key];
