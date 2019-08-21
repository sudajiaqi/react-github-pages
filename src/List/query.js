import * as queryString from 'query-string';

const getQueryParams = (pathName) => {
  const params = queryString.parse(pathName);

  return {
    ...params,
    page: params.page ? parseInt(params.page, 10) : 1,
  };
};

const getValue = (value, defaultValue) => (value === defaultValue ? null : value);

const getQueryString = (params) => {
  const newParams = {
    ...params,
    page: getValue(params.page, 1),
  };

  const filteredParams = {};
  Object.keys(newParams).forEach((key) => {
    if (newParams[key] != null) {
      filteredParams[key] = newParams[key];
    }
  });
  return queryString.stringify(filteredParams);
};

const Query = {
  parse: getQueryParams,
  stringify: getQueryString,
};

export default Query;
