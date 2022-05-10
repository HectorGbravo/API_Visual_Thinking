/**
 * @api {get} localhost:3000/ 1. Visual Thinking API welcome!
 * @apiName Visual Thinking API
 * @apiGroup studentControllers
 * @apiVersion 1.0.0
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/
 * 
 *     HTTP/1.1 200 OK
 *      "Welcome to the Student Visual Thinking API"
 */

/**
 * @api {get} localhost:3000/v1/students 2. Endpoint: getStudents()
 * @apiName getStudents()
 * @apiGroup studentControllers
 * @apiVersion 1.0.0
 * 
 * 
 * @apiSuccess {Objects[]} students Datos de los estudiantes
 * @apiSuccess {Number} previousCoures Cursos previos que tomó el estudiante
 * @apiSuccess {Boolean} haveCertification Valor que es true cuando tiene certificación el estudiante
 
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/v1/students
 * 
 *     HTTP/1.1 200 OK
 *      [
 *"students": [
 *   {
 *     "id": "6264d5d89f1df827eb84bb23",
 *     "name": "Warren",
 *     "email": "Todd@visualpartnership.xyz",
 *     "credits": 508,
 *     "enrollments": [
 *       "Visual Thinking Intermedio",
 *      "Visual Thinking Avanzado"
 *    ],
 *    "previousCourses": 1,
 *     "haveCertification": true
 *   },
 *   {
 *     "id": "6264d5d85cf81c496446b67f",
 *     "name": "Lucinda",
 *     "email": "Sexton@visualpartnership.xyz",
 *     "credits": 677,
 *     "enrollments": [
 *       "Visual Thinking Avanzado"
 *     ],
 *     "previousCourses": 6,
 *     "haveCertification": true
 *   },
 *   {
 *     "id": "6264d5d8cda17de0d2e9f236",
 *     "name": "Fuentes",
 *     "email": "Sharlene@visualpartnership.xyz",
 *     "credits": 210,
 *     "enrollments": [
 *       "Visual Thinking Avanzado"
 *    ],
 *     "previousCourses": 10,
 *     "haveCertification": true
 *   },
 *   {
 *     "id": "6264d5d8878a117a9c57c5c4",
 *     "name": "Claudia",
 *     "email": "Howell@visualpartnership.xyz",
 *     "credits": 227,
 *     "enrollments": [
 *       "Visual Thinking Avanzado"
 *     ],
 *     "previousCourses": 5,
 *     "haveCertification": true
 *   },
 *   {
 *     "id": "6264d5d8dd1a0be4e249c662",
 *     "name": "Phillips",
 *     "email": "Camacho@visualpartnership.xyz",
 *     "credits": 973,
 *     "enrollments": [
 *       "Visual Thinking Intermedio"
 *     ],
 *     "previousCourses": 8,
 *     "haveCertification": false
 *   },
 *   {
 *     "id": "6264d5d8dd01ab97ddedbba5",
 *     "name": "Taylor",
 *     "email": "Haynes@visualpartnership.xyz",
 *     "credits": 652,
 *     "enrollments": [
 *       "Visual Thinking Avanzado"
 *     ],
 *     "previousCourses": 5,
 *     "haveCertification": true
 *   },
 *   {
 *     "id": "6264d5d89d03e25451f124e5",
 *     "name": "Mindy",
 *     "email": "Alfreda@visualpartnership.xyz",
 *     "credits": 830,
 *     "enrollments": [
 *       "Visual Thinking Intermedio",
 *       "Visual Thinking Avanzado"
 *    ],
 *     "previousCourses": 9,
 *     "haveCertification": false
 *   }
* ]
*/

/**
 * @api {get} /v1/mailCertificated 3. Endpoint: mailsHaveCertification()
 * @apiName mailsHaveCertification()
 * @apiGroup studentControllers
 * @apiVersion 1.0.0 
 *  
 * 
 * @apiSuccess {Objects[]} mailCertificated Listado de estudiantes con certificación.
 * 
 * @apiSuccessExample Sucess-Response:
 *      localhost:3000/v1/mailCertificated
 * 
 *      HTTP/1.1 200 OK
 * 
 * {
 * "mailCertificated": [
 *   "Todd@visualpartnership.xyz",
 *   "Sexton@visualpartnership.xyz",
 *   "Sharlene@visualpartnership.xyz",
 *   "Howell@visualpartnership.xyz",
 *   "Haynes@visualpartnership.xyz",
 *   "Montoya@visualpartnership.xyz",
 *   "Benton@visualpartnership.xyz",
 *   "Dionne@visualpartnership.xyz",
 *   "Mcpherson@visualpartnership.xyz",
 *   "Gracie@visualpartnership.xyz",
 *   "Ila@visualpartnership.xyz",
 *   "Dorthy@visualpartnership.xyz",
 *   "Mcfarland@visualpartnership.xyz",
 *   "Maryann@visualpartnership.xyz",
 *   "Alana@visualpartnership.xyz",
 *   "Rosemary@visualpartnership.xyz",
 *   "Keith@visualpartnership.xyz",
 *   "Delaney@visualpartnership.xyz",
 *   "Ball@visualpartnership.xyz",
 *   "Sally@visualpartnership.xyz",
 *   "Antoinette@visualpartnership.xyz",
 *   "Juliette@visualpartnership.xyz",
 *   "Harding@visualpartnership.xyz",
 *   "Dixon@visualpartnership.xyz",
 *   "Beulah@visualpartnership.xyz",
 *   "Moses@visualpartnership.xyz",
 *   "Shields@visualpartnership.xyz",
 *   "Jewell@visualpartnership.xyz",
 *   "Hays@visualpartnership.xyz"
 * ]
 *}
 * 
*/

/**
 * @api {get} /v1/studentsCredits 4. Endpoint: filterStudentsByCredits()
 * @apiName filterStudentsByCredits()
 * @apiGroup studentControllers
 * @apiVersion 1.0.0 
 
 * 
 * @apiSuccess {Objects[]} students Datos de los estudiantes
 * @apiSuccess {Number} previousCourses Cursos previos que tomó el estudiante
 * @apiSuccess {Boolean} haveCertification Valor que es true cuando tiene certificación el estudiante
 * 
 * @apiSuccessExample Sucess-Response:
 *     localhost:3000/v1/studentsCredits
 * 
 *     HTTP/1.1 200 OK
 * {
  "students": [
    {
      "id": "6264d5d89f1df827eb84bb23",
      "name": "Warren",
      "email": "Todd@visualpartnership.xyz",
      "credits": 508,
      "enrollments": [
        "Visual Thinking Intermedio",
        "Visual Thinking Avanzado"
      ],
      "previousCourses": 1,
      "haveCertification": true
    },
    {
      "id": "6264d5d85cf81c496446b67f",
      "name": "Lucinda",
      "email": "Sexton@visualpartnership.xyz",
      "credits": 677,
      "enrollments": [
        "Visual Thinking Avanzado"
      ],
      "previousCourses": 6,
      "haveCertification": true
    },
    {
      "id": "6264d5d8dd1a0be4e249c662",
      "name": "Phillips",
      "email": "Camacho@visualpartnership.xyz",
      "credits": 973,
      "enrollments": [
        "Visual Thinking Intermedio"
      ],
      "previousCourses": 8,
      "haveCertification": false
    },
    {
      "id": "6264d5d8dd01ab97ddedbba5",
      "name": "Taylor",
      "email": "Haynes@visualpartnership.xyz",
      "credits": 652,
      "enrollments": [
        "Visual Thinking Avanzado"
      ],
      "previousCourses": 5,
      "haveCertification": true
    },
    {
      "id": "6264d5d89d03e25451f124e5",
      "name": "Mindy",
      "email": "Alfreda@visualpartnership.xyz",
      "credits": 830,
      "enrollments": [
        "Visual Thinking Intermedio",
        "Visual Thinking Avanzado"
      ],
      "previousCourses": 9,
      "haveCertification": false
    }
 *]
*}
*/
