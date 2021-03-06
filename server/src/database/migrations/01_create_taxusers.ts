import { Knex } from 'knex'; 
export async function up(knex: Knex) {
  return knex.schema.createTable('taxusers', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('taxusers');
}