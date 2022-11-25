// Importando el Router de Express
import { Router } from 'express';
// Importando el controlador
import userController from './userController';
// Creando una isntancia del enrutador
const router = new Router();

// GET 'user/register
router.get(['/register'], userController.showRegisterForm);

// Exporto este tramo de ruta
export default router;