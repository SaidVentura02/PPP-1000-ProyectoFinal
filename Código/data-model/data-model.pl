/*
* @author ffloresh@unah.hn
* @version 0.3.0
* @date 2026/11/16
* @since 2026/11/14
* Base de conocimientos para el proyecto
*/

% Definicion de Turistas turista(nombre, edad, dni, nacionalidad)
turista('Fares Flores',      19, 0801200703468, honduras).
turista('Pedro Gonzalez',    60, 0501196602368, honduras).
turista('Sara Flores',       19, 0801200709697, honduras).
turista('Maria Serrano',     45, 1001198101239, honduras).
turista('Juan Ramirez',      30, 0101199602368, honduras).
turista('Antonio Maldonado', 75, 0801195102738, honduras).
turista('Camila Maldonado',  50, 0801197604418, honduras).
turista('Valeria Maldonado', 20, 0802200609601, honduras).
turista('Mateo Alvarez',     18, 0704202002368, honduras).
turista('Carlos Alvarez',    35, 0704199102368, honduras).
turista('Carlos Mendoza',    28, 0801199812345, honduras).
turista('Ana Morales',       34, 1492837401928, mexico).
turista('Luis Gomez',        41, '54829103R',     espana).
turista('Maria Cruz',        23, 0501200304821, honduras).
turista('Javier Ruiz',       30, 9604120987654, mexico).
turista('Valeria Castillo',  27, 1145608923412, espana).
turista('Diego Silva',       45, 3294810293847, mexico).
turista('Camila Vargas',     29, '10207849J',     espana).
turista('Mateo Rojas',       37, 7284910456123, honduras).
turista('Elena Navarro',     31, 2489120495101, mexico).
turista('Daniel Madrid',     30, '09003884M', espana).
turista('Naroa Balderas',     18, '17396925R', espana).
turista('Alexia Duque',     52, '31728444J', espana).
turista('Borja Navarro',     26, '75639868K', espana).
turista('Pau Cubarsi',     27, '48757690J', espana).

% Grupo de turistas con un maximo de 5 personas
grupo_turista5(A, B, C, D, E):-
    turista(A, _, DniA, _),
    turista(B, _, DniB, _), DniA \= DniB,
    turista(C, _, DniC, _), DniC \= DniA, DniC \= DniB,
    turista(D, _, DniD, _), DniD \= DniA, DniD \= DniB, DniD \= DniC,
    turista(E, _, DniE, _), DniE \= DniA, DniE \= DniB, DniE \= DniC, DniE \= DniD.
    
% Grupo de turistas con un maximo de 10 personas
grupo_turista10(A, B, C, D, E, F, G, H, I, J):-
    turista(A, _, DniA, _),
    turista(B, _, DniB, _), DniA \= DniB,
    turista(C, _, DniC, _), DniC \= DniA, DniC \= DniB,
    turista(D, _, DniD, _), DniD \= DniA, DniD \= DniB, DniD \= DniC,
    turista(E, _, DniE, _), DniE \= DniA, DniE \= DniB, DniE \= DniC, DniE \=DniD,
    turista(F, _, DniF, _), DniF \= DniA, DniF \= DniB, DniF \= DniC, DniF \=DniD, DniF \=DniE,
    turista(G, _, DniG, _), DniG \= DniA, DniG \= DniB, DniG \= DniC, DniG \=DniD, DniG \=DniE, DniG \=DniF,
    turista(H, _, DniH, _), DniH \= DniA, DniH \= DniB, DniH \= DniC, DniH \=DniD, DniH \=DniE, DniH \=DniF, DniH \=DniG,
    turista(I, _, DniI, _), DniI \= DniA, DniI \= DniB, DniI \= DniC, DniI \=DniD, DniI \=DniE, DniI \=DniF, DniI \=DniG, DniI \=DniH,
    turista(J, _, DniJ, _), DniJ \= DniA, DniJ \= DniB, DniJ \= DniC, DniJ \=DniD, DniJ \=DniE, DniJ \=DniF, DniJ \=DniG, DniJ \=DniH, DniJ \=DniI.

%Tipo de transporte
transporte(camioneta).
transporte('bus pequeño'). 

%Definicion de Tipos de Destinos
tipo_destino('Cultural').
tipo_destino('Naturaleza/Aire libre').

% Definicion de destinos destino(nombre, tiempo_limite, tipo_destino)
destinos('Parque Nacional El Picacho', tiempo_limite, 'Naturaleza/Aire Libre').
destinos('Basilica de Suyapa', tiempo_limite, 'Cultural').
destinos('Cerro Juana Lainez', tiempo_limite, 'Naturaleza/Aire Libre').

%Definicion de guias guia(id_guia, nombre, grupo_turista5).

guia('G-01', Juan, grupo_turista10(A, B, C, D, E, F, G, H, I, J), transporte('bus pequeño')):-
    grupo_turista10(A, B, C, D, E, F, G, H, I, J).
guia('G-02', Guadalupe, grupo_turista5(K, L, M, N, O), transporte(camioneta).):-
    grupo_turista5(K, L, M, N, O).
guia('G-03', Rodrigo, grupo_turista5(P, Q, R, S, T), transporte(camioneta).):-
    grupo_turista5(P, Q, R, S, T).
guia('G-04', Antonio, grupo_turista5(U, V, W, X, Y), transporte(camioneta).):-
    grupo_turista5(U, V, W, X, Y).
    
%Se define la lista de guias y su respectivo grupo de turistas para la jornada.
itinerario(guia('G-01', Juan, grupo_turista10(A, B, C, D, E, F, G, H, I, J)), 
           guia('G-02', Guadalupe, grupo_turista5(K, L, M, N, O)),
		   guia('G-03', Rodrigo, grupo_turista5(P, Q, R, S, T)),
		   guia('G-04', Antonio, grupo_turista5(U, V, W, X, Y))):-
    	  grupo_turista10(A, B, C, D, E, F, G, H, I, J),
          grupo_turista5(K, L, M, N, O),
          grupo_turista5(P, Q, R, S, T),
          grupo_turista5(U, V, W, X, Y),
    		A\=K,A\=L,A\=M,A\=N,A\=O,A\=P,A\=Q,A\=R,A\=S,A\=T,A\=U,A\=V,A\=W,A\=X,A\=Y,
    		B\=K,B\=L,B\=M,B\=N,B\=O,B\=P,B\=Q,B\=R,B\=S,B\=T,B\=U,B\=V,B\=W,B\=X,B\=Y,
    		C\=K,C\=L,C\=M,C\=N,C\=O,C\=P,C\=Q,C\=R,C\=S,C\=T,C\=U,C\=V,C\=W,C\=X,C\=Y,
    		D\=K,D\=L,D\=M,D\=N,D\=O,D\=P,D\=Q,D\=R,D\=S,D\=T,D\=U,D\=V,D\=W,D\=X,D\=Y,
    		E\=K,E\=L,E\=M,E\=N,E\=O,E\=P,E\=Q,E\=R,E\=S,E\=T,E\=U,E\=V,E\=W,E\=X,E\=Y,
    		F\=K,F\=L,F\=M,F\=N,F\=O,F\=P,F\=Q,F\=R,F\=S,F\=T,F\=U,F\=V,F\=W,F\=X,F\=Y,
    		G\=K,G\=L,G\=M,G\=N,G\=O,G\=P,G\=Q,G\=R,G\=S,G\=T,G\=U,G\=V,G\=W,G\=X,G\=Y,
    		H\=K,H\=L,H\=M,H\=N,H\=O,H\=P,H\=Q,H\=R,H\=S,H\=T,H\=U,H\=V,H\=W,H\=X,H\=Y,
    		I\=K,I\=L,I\=M,I\=N,I\=O,I\=P,I\=Q,I\=R,I\=S,I\=T,I\=U,I\=V,I\=W,I\=X,I\=Y,
    		J\=K,J\=L,J\=M,J\=N,J\=O,J\=P,J\=Q,J\=R,J\=S,J\=T,J\=U,J\=V,J\=W,J\=X,J\=Y,
    		K\=A,K\=B,K\=C,K\=D,K\=E,K\=F,K\=G,K\=H,K\=I,K\=J,K\=P,K\=Q,K\=R,K\=S,K\=T,K\=U,K\=V,K\=W,K\=X,K\=Y,
    		L\=A,L\=B,L\=C,L\=D,L\=E,L\=F,L\=G,L\=H,L\=I,L\=J,L\=P,L\=Q,L\=R,L\=S,L\=T,L\=U,L\=V,L\=W,L\=X,L\=Y,
    		M\=A,M\=B,M\=C,M\=D,M\=E,M\=F,M\=G,M\=H,M\=I,M\=J,M\=P,M\=Q,M\=R,M\=S,M\=T,M\=U,M\=V,M\=W,M\=X,M\=Y,
    		N\=A,N\=B,N\=C,N\=D,N\=E,N\=F,N\=G,N\=H,N\=I,N\=J,N\=P,N\=Q,N\=R,N\=S,N\=T,N\=U,N\=V,N\=W,N\=X,N\=Y,
    		O\=A,O\=B,O\=C,O\=D,O\=E,O\=F,O\=G,O\=H,O\=I,O\=J,O\=P,O\=Q,O\=R,O\=S,O\=T,O\=U,O\=V,O\=W,O\=X,O\=Y,
    		P\=A,P\=B,P\=C,P\=D,P\=E,P\=F,P\=G,P\=H,P\=I,P\=J,P\=K,P\=L,P\=M,P\=N,P\=O,P\=U,P\=V,P\=W,P\=X,P\=Y,
    		Q\=A,Q\=B,Q\=C,Q\=D,Q\=E,Q\=F,Q\=G,Q\=H,Q\=I,Q\=J,Q\=K,Q\=L,Q\=M,Q\=N,Q\=O,Q\=U,Q\=V,Q\=W,Q\=X,Q\=Y,
    		R\=A,R\=B,R\=C,R\=D,R\=E,R\=F,R\=G,R\=H,R\=I,R\=J,R\=K,R\=L,R\=M,R\=N,R\=O,R\=U,R\=V,R\=W,R\=X,R\=Y,
    		S\=A,S\=B,S\=C,S\=D,S\=E,S\=F,S\=G,S\=H,S\=I,S\=J,S\=K,S\=L,S\=M,S\=N,S\=O,S\=U,S\=V,S\=W,S\=X,S\=Y,
    		T\=A,T\=B,T\=C,T\=D,T\=E,T\=F,T\=G,T\=H,T\=I,T\=J,T\=K,T\=L,T\=M,T\=N,T\=O,T\=U,T\=V,T\=W,T\=X,T\=Y,
    		U\=A,U\=B,U\=C,U\=D,U\=E,U\=F,U\=G,U\=H,U\=I,U\=J,U\=K,U\=L,U\=M,U\=N,U\=O,U\=P,U\=Q,U\=R,U\=S,U\=T,
    		V\=A,V\=B,V\=C,V\=D,V\=E,V\=F,V\=G,V\=H,V\=I,V\=J,V\=K,V\=L,V\=M,V\=N,V\=O,V\=P,V\=Q,V\=R,V\=S,V\=T,
    		W\=A,W\=B,W\=C,W\=D,W\=E,W\=F,W\=G,W\=H,W\=I,W\=J,W\=K,W\=L,W\=M,W\=N,W\=O,W\=P,W\=Q,W\=R,W\=S,W\=T,
    		X\=A,X\=B,X\=C,X\=D,X\=E,X\=F,X\=G,X\=H,X\=I,X\=J,X\=K,X\=L,X\=M,X\=N,X\=O,X\=P,X\=Q,X\=R,X\=S,X\=T,
    		Y\=A,Y\=B,Y\=C,Y\=D,Y\=E,Y\=F,Y\=G,Y\=H,Y\=I,Y\=J,Y\=K,Y\=L,Y\=M,Y\=N,Y\=O,Y\=P,Y\=Q,Y\=R,Y\=S,Y\=T.
    

%Definicion de un horario para visita horario(guia, hora_entrada, hora_salida)
horario('G-01', '7:00 AM', '7:50 AM').
horario('G-02', '8:00 AM', '8:50 AM').
horario('G-03', '10:00 AM', '10:50 AM').
horario('G-04', '11:00 AM', '11:50 AM').

%Definicion de una visita a un destino (horario, destino)
visita(horario('G-01', '7:00 AM', '7:50 AM'), 'Parque Nacional El Picacho').
visita(horario('G-02', '8:00 AM', '8:50 AM'), 'Cerro Juana Lainez').
visita(horario('G-03', '10:00 AM', '10:50 AM'), 'Basilica de Suyapa').
visita(horario('G-04', '11:00 AM', '11:50 AM'), 'Basilica de Suyapa').

%Definicion de una ruta
%La ruta necesita un horario por cada visita. Son tres grupos y tres guias, por lo que son tres visitas
ruta(horario1, horario2, horario3, horario4, horario5, horario6, horario7, horario8, horario9). 

estacion(nombre, cada_hora).
