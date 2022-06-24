# Proyecto interdisciplinario
## Primer cuatrimestre. Propuesta de trabajo                                                
### Grupo: **12**  División: **5ºB informática**   

#### Integrantes:  
- Martín Seijo Rosario
- Puelman Lara
- Stagno Victoria
- Toscano Trillo Oriana  
___  



**Título de la propuesta:** Camino al Desarrollo Sustentable:Aprende sobre la Agenda 2030

### Descripción de la propuesta:

En el presente trabajo desarrollaremos una aplicación web que permita a los usuarios aprender sobre los ODS y la Agenda 2030, puntualmente aplicado a la experiencia/situación nacional. Mediante el juego, buscamos evaluar la interiorización de los conocimientos, a partir de una serie de preguntas (trivia) que aumentan gradualmente en especificidad y complejidad. Estos cuestionarios serán de respuesta múltiple; en caso de responder erróneamente, no se sumará el puntaje correspondiente.  

El puntaje total no será acumulable con partidas anteriores, y el top de puntajes más altos se mostrará en una tabla de rankings (se muestra / registra en la base de datos el puntaje MÁS alto que usuario haya conseguido, sobreescribiendo puntajes menores).   

En cuanto a la base de datos, construiremos las siguientes tablas:  
- Tabla usuarios: guarda nombre, contraseña, si es o no administrador (bool), id, y puntaje total.
- Tabla preguntas: guarda pregunta, id, y número de nivel al que pertenece
- Tabla respuestas: guarda respuesta, id, id de pregunta a la que corresponde y un booleano que indique si la respuesta es correcta o incorrecta.
  
En cuanto al diseño de la interfaz, diseñamos los siguientes bocetos en diagrams.io: [Bocetos de la interfaz](https://drive.google.com/file/d/1S2DAb8B-5S2qTo1Ra5DOhwINeXf-MtvH/view?usp=sharing).  
Para la base de datos diseñamos estos bocetos: [Base de Datos - Proyecto](https://drive.google.com/file/d/15zUt-EUuNS-mehXxwX8Fq1oyrmf2P36r/view?usp=sharing).  
Estos diseños nos guiarán en la estructura general, no eliminamos la posibilidad de hacer algunas modificaciones a medida que avanzamos. 


#### Funcionalidad: 
- Un solo jugador
- Tres niveles,que se volverán progresivamente más complicados. En el primer nivel habrá 4 preguntas, en el segundo 9, y en 	el tercero 5.
- Base de Datos. 3 tablas: Preguntas; Respuestas; Usuarios(puntaje total, contraseña, cantidad de partidas jugadas).
- Ranking de jugadores.
- Agregado y modificación de preguntas, a través de un usuario administrador.
- Opcionales (sólo ideas, entendemos que podría ser complicada su implementación)
  - Variedad de avatares seleccionables por el usuario (3 variedades)
  - Logros (3 logros, cada uno por obtener el mayor puntaje posible por ODS)  

___  

#### Tareas:  
1. Investigación y redacción de preguntas y sus respuestas
2. Diseño de imagen y de la UI 
3. Diseño de diálogos e historia
4. Diseño de la base de datos
4. Funciones de interacción con la base (Flask) 
5. Front-end del juego (HTML, CSS, JS)
6. Testeo 
7. Puesta en producción  

#### Responsabilidades:
**1. 7. 8. 3.** Martin Seijo  
**4. 7. 5. 8.** Puelman  
**1. 5. 8. 3.** Stagno  
**2. 6. 8.** Toscano  
___  

### ENTREGAS:  
#### Primer entregable (30/6)  
- Maquetación HTML, CSS básico
- Preguntas y respuestas
- Base de datos (estructura y completada con lo mínimo indispensable)
- Historia/diálogos BÁSICO (estructura general)
- Definir sistema de puntajes (no estructuras lógicas)

#### Segundo entregable (7/7)  
- API en flask de preguntas, respuestas y usuarios
- Front-end completo y funcional de inicio de sesión e interfaz general/principal del juego en conjunto con back-end
- Pruebas de juego
- Diálogos e historia definidos e implementados

#### Tercer entregable (14/7)  
- Juego completo en línea




