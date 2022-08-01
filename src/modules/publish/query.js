const CREATE = `
INSERT INTO publishers (publisher_name, publisher_job, publisher_date, publisher_time, publisher_type, publisher_link, publisher_title, publisher_description, publisher_text, publisher_photos, contact1, contact2)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;
`

const PUT = `
    update publishers
    set publisher_verify = 'verified'
    where publisher_id = $1 returning *
`

const GET = `
select p.* from publishers as p where p.publisher_id = $1;
`

const DELETE = `
    update publishers
    set publisher_verify = 'cancelled'
    where publisher_id = $1 returning *
`

export default {CREATE, PUT, DELETE, GET}