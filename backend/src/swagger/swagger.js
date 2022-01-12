/**
 * @swagger
 * /:
 *  get:
 *    tags: [Users]
 *    summary: usuarios
 *    description: Listado de usuarios
 *    parameters:
 *       - in: query
 *         name: index
 *         required: true
 *         description: Index del usuario logueado.
 *         schema:
 *           type: integer
 *           example: -1
 *    responses:
 *       200:
 *         description: Listado de usuarios
 */

/**
 * @swagger
 * /register:
 *  post:
 *    tags: [Users]
 *    summary: usuarios.
 *    description : Listado de usuarios.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: usuario  a crear
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - phoneNumber
 *            - address 
 *            - email
 *            - password
 *          properties:
 *            name:
 *              description: Nombre del usuario
 *              type: string
 *              example: juangomez
 *            phoneNumber:
 *              description: Telefono del usuario
 *              type: string
 *              example: 221 1234567
 *            address:
 *              description: Dirección de envio
 *              type: string
 *              example: La Plata, Calle 7 # 1234
 *            email:
 *              description: Correo electrónico del usuario 
 *              type: email
 *              example: juangomez@gmail.com
 *            password:
 *              description: Contraseña
 *              type: password
 *              example: 1234
 *    responses:
 *      201:
 *       description: Usuario registrado
 *      401:
 *       description: Usuario no registrado
 *      
 */

/**
 * @swagger
 * /login:
 *  post:
 *    tags: [Users]
 *    summary: usuarios.
 *    description : Listado de usuarios.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: usuario
 *        description: usuario  a crear
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              description: Correo electrónico del usuario 
 *              type: email
 *              example: juangomez@gmail.com
 *            password:
 *              description: Contraseña
 *              type: password
 *              example: 1234
 *    responses:
 *      201:
 *       description: Usuario logeado
 *      401:
 *       description: Usuario no logeado
 *      
 */

/**
 * @swagger
 * /products/:id:
 *  get:
 *    tags: [Products]
 *    summary: Productos
 *    description: Listado de productos
 *    parameters:
 *       - in: query
 *         name: index
 *         required: true
 *         description: Index del producto.
 *         schema:
 *           type: integer
 *           example: -1
 *    responses:
 *       200:
 *         description: Listado de productos
 */

/**
 * @swagger
 * /products/:id:
 *  post:
 *    tags: [Products]
 *    summary: Productos.
 *    description : Listado de Productos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: products
 *        description: producto a crear
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - price
 *          properties:
 *            name:
 *              description: Nombre del producto
 *              type: string
 *              example: Hamburguesa clasica
 *            price:
 *              description: Precio del producto
 *              type: string
 *              example: 250
 *    responses:
 *      201:
 *       description: Producto Creado
 *      401:
 *       description: Error
 *      
 */

/**
 * @swagger
 * /products/:id/:idProduct:
 *  put:
 *    summary: Modificación de producto segun ID.
 *    description : Modificación de producto segun ID.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: name that need to be updated
 *        required: true
 *        type: integer
 *      - in: body
 *        name: Productos
 *        description: usuario  a modificar
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            name:
 *              description: nombre del producto
 *              type: string
 *            price:
 *              description: Precio del producto 
 *              type: string
 *    responses:
 *      201:
 *       description: Agregado del producto 
 *      
 */

