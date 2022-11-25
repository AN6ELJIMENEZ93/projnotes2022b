// Importando los tramos de rutas
import homeRouter from '../domains/home/homeRouter';
import userRouter from '../domains/user/userRouter';


// Funcion de enrutado principal
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // Agregando enrutaod de User
  app.use('/user', userRouter)
};

export default { addRoutes };