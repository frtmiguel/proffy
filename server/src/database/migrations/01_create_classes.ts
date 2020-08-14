import knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id') //referenciar o campo id dentro da tabela users na linha abaixo
            .inTable('users')
            .onUpdate('CASCADE') // define o que vai acontecer se o id do usuário for alterado
            .onDelete('CASCADE'); //se o professor for deletado da plataforma, as aulas também serão deletadas
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('classes'); 
}