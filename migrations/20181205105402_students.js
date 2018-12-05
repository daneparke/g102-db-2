
exports.up = (knex, Promise) => {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.string('name')
        student.string('previous_occupation')
        student.decimal('hometown_lat', null)
        student.decimal('hometown_long', null)
        student.string('useless_superpower')
        student.string('fave_animal')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('students')

};
