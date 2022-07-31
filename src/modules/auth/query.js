const LOGIN = `
    SELECT a.* FROM admins AS a WHERE a.username = $1 and a.password = crypt($2, a.password)
`;



export default {
  LOGIN
};