// Cargando las variables de entorno
import configKeys from '../../config/configKeys';

// Creando los Actions Methods
// GET "/"
// GET "/user/register"
const showRegisterForm = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {};

  // 2. Madamos a generar la vista con el Template Engine
  res.render('user/register', viewModel);
};


// Exportando el Controlador
export default { showRegisterForm };