import logo from "../../assets/logo.png";

import Tomate from "../../assets/frutas/Tomate.png";
import Pepino from "../../assets/frutas/Pepino.png";
import Batata from "../../assets/frutas/Batata.png";
import Abobora from "../../assets/frutas/Abóbora.png";
import Brocolis from "../../assets/frutas/Brócolis.png";

const cesta = {
  topo: {
    titulo: "Detalhe da Cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao:
      "Uma cesta de productos seleccionados da fazendo direito para sua cozinha",
    preco: "R$ 50,00",
    boton: "Comprar",
  },
  itens: {
    nome: "Itens da Cesta",
    lista: [
      {
        nome: "Tomate",
        imagen: Tomate,
      },
      {
        nome: "Pepino",
        imagen: Pepino,
      },
      {
        nome: "Batata",
        imagen: Batata,
      },
      {
        nome: "Abóbora",
        imagen: Abobora,
      },
      {
        nome: "Brócoli",
        imagen: Brocolis,
      },
    ],
  },
};

export default cesta;
