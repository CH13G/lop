export function ellipisName(str) {
  return str && `*${str.substr(1)}`;
}

export function ellipisPID(tel) {
  return tel && tel.replace(/^(\d{4})\d+(\d{4})$/, (match, $1, $2) => `${$1}****${$2}`);
}

export function ellipisPIDs(tel) {
  return tel && tel.replace(/^(\d{5})\d+(\d{5})$/, (match, $1, $2) => `${$1}****${$2}`);
}

export function ellipisCompany(company) {
  return company && `${company.substr(0, 2)}*****公司`;
}
