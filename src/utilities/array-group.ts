export const transformArrayToObject = (data) => {
  return data?.reduce((acc, cur) => {
    const key = `${cur.createdIn}+${cur.dateCreated?.substring(0, 10)}+${
      cur.createdBy
    }`;
    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }
    return acc;
  }, {});
};
