create table user(
	email varchar(30) primary key,
    pw varchar(20) not null,
    nick varchar(10) not null unique,
    score float(2,1)
);

create table restaurant(
	id int auto_increment primary key,
    name varchar(50) not null unique,
    business_hour varchar(50),
    score float(2,1)
);

create table category(
	id int auto_increment primary key,
    food_category varchar(10) not null unique,
    restaurant_id int,
    foreign key (restaurant_id) references restaurant(id)
);

create table matching(
	id int auto_increment primary key,
    timeslot date,
    max_people int,
    create_time date not null,
    create_user varchar(30) not null,
    memo varchar(50),
    category_id int,
    foreign key (category_id) references category(id)
);

create table chatroom (
	user_id varchar(30),
    match_id int,
    foreign key (user_id) references user(email),
    foreign key (match_id) references matching(id)
);

create table checkyet(
	id int auto_increment primary key,
    user_id varchar(30),
    create_time date not null,
    restaurant_name varchar(50) not null unique,
    food_category varchar(10) not null unique,
    menu varchar(20),
    cost int,
    business_hour varchar(50),
    foreign key (user_id) references user(email)
);








