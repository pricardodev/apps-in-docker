/*Criando banco de dados*/
create database email_sender;
/*Criando a conexão com banco criado*/
\c email_sender

create table emails {
    id serial not null,
    date timestamp not null default current_timestamp,
    assunto varchar(100) not null,
    mensagem varchar(250) not null
}