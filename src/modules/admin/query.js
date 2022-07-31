const AWAIT = `
select p.* from publishers as p where p.publisher_verify = 'unverified' group by p.publisher_id;
`;

const ACCEPTED = `
select p.* from publishers as p where p.publisher_verify = 'verified' group by p.publisher_id;
`;

const REJECTED = `
select p.* from publishers as p where p.publisher_verify = 'cancelled' group by p.publisher_id;
`;

export default { AWAIT, ACCEPTED, REJECTED};
