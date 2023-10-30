import { CardWidget } from "../CardWidget/CardWidget";

export const Navbar = () => {
  return (
    <div>
      <h6>TiendaGamer 🎮</h6>
      <ul>
        <li>
          <a href="#">Periféricos</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Monitores</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Juegos</a>
        </li>
      </ul>
        <a href="#">🛒</a>
      <CardWidget />
    </div>
  );
};
// const Navbar = () => {
//   return (
//     <div>

//     </div>
//   )
// }
