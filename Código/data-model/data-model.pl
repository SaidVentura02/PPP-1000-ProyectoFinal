/*
* @author ffloresh@unah.hn, said.ventura@unah.hn iadiazr@unah.hn
* @version 0.2.3
* @date 2026/11/26
* @since 2026/11/14
* Base de conocimientos para el proyecto
*/

% Definicion de Turistas turista(nombre, edad, dni, nacionalidad, numero_grupo)
turista('Fares Flores', 19, 0801200703468, honduras, grupo_1).
turista('Pedro Gonzalez', 60, 0501196602368, honduras, grupo_1).
turista('Sara Flores', 19, 0801200709697, honduras, grupo_1).
turista('Maria Serrano', 45, 1001198101239, honduras, grupo_2).
turista('Juan Ramirez', 30, 0101199602368, honduras, grupo_1).
turista('Antonio Maldonado', 75, 0801195102738, honduras, grupo_1).
turista('Camila Maldonado', 50, 0801197604418, honduras, grupo_2).
turista('Valeria Maldonado', 20, 0802200609601, honduras, grupo_2).
turista('Mateo Alvarez', 18, 0704202002368, honduras, grupo_3).
turista('Carlos Alvarez', 35, 0704199102368, honduras, grupo_3).
turista('Carlos Mendoza', 28, 0801199812345, honduras, grupo_2).
turista('Ana Morales', 34, 1492837401928, mexico, grupo_2).
turista('Luis Gomez', 41, '54829103R', espana, grupo_3).
turista('Maria Cruz', 23, 0501200304821, honduras, grupo_2).
turista('Javier Ruiz', 30, 9604120987654, mexico, grupo_2).
turista('Valeria Castillo', 27, 1145608923412, espana, grupo_3).
turista('Diego Silva', 45, 3294810293847, mexico, grupo_2).
turista('Camila Vargas', 29, '10207849J', espana, grupo_4).
turista('Mateo Rojas', 37, 7284910456123, honduras, grupo_2).
turista('Elena Navarro', 31, 2489120495101, mexico, grupo_2).
turista('Daniel Madrid', 30, '09003884M', espana, grupo_4).
turista('Naroa Balderas', 18, '17396925R', espana, grupo_4).
turista('Alexia Duque', 52, '31728444J', espana, grupo_3).
turista('Borja Navarro', 26, '75639868K', espana, grupo_4).
turista('Pau Cubarsi', 27, '48757690J', espana, grupo_4).

% Definicion de Guia guia(nombre, numero_grupo)
guia('Juan', grupo_1).
guia('Guadalupe', grupo_2).
guia('Rodrigo', grupo_3).
guia('Antonio', grupo_4).

%Definicion de Transporte transporte(tipo_transporte)
transporte(camioneta).
transporte('bus pequeño').
transporte('bus grande').

%Definicion de Tipos de Destinos tipo_destino(tipo_destino)
tipo_destino('Cultural').
tipo_destino('Naturaleza').
tipo_destino('Religioso').

% Definicion de Destinos destino(nombre, tipo_destino)
destino('Parque Nacional El Picacho', tipo_destino('Naturaleza')).
destino('Basilica de Suyapa', tipo_destino('Religioso')).
destino('Cerro Juana Lainez', tipo_destino('Naturaleza')).
destino('Antigua Casa Presidencial', tipo_destino('Cultural')).

% Definicion de Grupo grupo(numero_grupo, guia, turista, destino, transporte)
grupo(grupo_1, X, Y, destino('Basilica de Suyapa',_), transporte('bus pequeño')):-
    turista(X,_,_,_,grupo_1),
    guia(Y, grupo_1).
grupo(grupo_2, X, Y, destino('Cerro Juana Lainez',_), transporte('bus pequeño')):-
    turista(X,_,_,_,grupo_2),
	guia(Y, grupo_2).
grupo(grupo_3, X, Y, destino('Parque Nacional El Picacho',_), transporte('bus grande')):-
    turista(X,_,_,_,grupo_3),
    guia(Y, grupo_3).
grupo(grupo_4, X, Y, destino('Antigua Casa Presidencial',_), transporte(camioneta)):-
    turista(X,_,_,_,grupo_4),
    guia(Y, grupo_4).

%Definicion de un horario para visita horario(guia, hora_llegada, hora_salida)
horario(guia('Juan', grupo_1), '7:00 AM', '7:50 AM').
horario(guia('Guadalupe', grupo_2), '8:00 AM', '8:50 AM').
horario(guia('Rodrigo', grupo_3), '10:00 AM', '10:50 AM').
horario(guia('Antonio', grupo_4), '11:00 AM', '11:50 AM').

% Definición de franja de horario franja(numero_franja, hora_llegada, hora_salida)
franja(1, '7:00 AM', '7:50 AM').
franja(2, '8:00 AM', '8:50 AM').
franja(3, '10:00 AM', '10:50 AM').
franja(4, '11:00 AM', '11:50 AM').

% Definicion de parada en un destino parada(numero_grupo, numero_franja, destino)
parada(grupo_1, 1, 'Basilica de Suyapa').
parada(grupo_1, 2, 'Cerro Juana Lainez').
parada(grupo_1, 3, 'Parque Nacional El Picacho').
parada(grupo_1, 4, 'Antigua Casa Presidencial').

parada(grupo_2, 1, 'Cerro Juana Lainez').
parada(grupo_2, 2, 'Parque Nacional El Picacho').
parada(grupo_2, 3, 'Antigua Casa Presidencial').
parada(grupo_2, 4, 'Basilica de Suyapa').

parada(grupo_3, 1, 'Parque Nacional El Picacho').
parada(grupo_3, 2, 'Antigua Casa Presidencial').
parada(grupo_3, 3, 'Basilica de Suyapa').
parada(grupo_3, 4, 'Cerro Juana Lainez').

parada(grupo_4, 1, 'Antigua Casa Presidencial').
parada(grupo_4, 2, 'Basilica de Suyapa').
parada(grupo_4, 3, 'Cerro Juana Lainez').
parada(grupo_4, 4, 'Parque Nacional el Picacho').

% Definicion de asignar un transporte a un grupo
transporte_grupo(grupo_1, 'bus pequeño').
transporte_grupo(grupo_2, 'bus pequeño').
transporte_grupo(grupo_3, 'bus grande').
transporte_grupo(grupo_4, camioneta).

% Definicion de choque
% Dos grupos chocan si estan en el mismo destino en la misma franja 
choque(Franja, Destino, Grupo1, Grupo2):-
    parada(Grupo1, Franja, Destino),
    parada(Grupo2, Franja, Destino),
    Grupo1 \= Grupo2.

% Itinerario completo ruta(grupo, guia, franja, destino, transporte, llegada, salida)
ruta(Grupo, Guia, Franja, Destino, Transporte, Llegada, Salida):-
    parada(Grupo, Franja, Destino),
    franja(Franja, Llegada, Salida),
    guia(Guia, Grupo),
    transporte_grupo(Grupo, Transporte).
    











