import { Container } from "./styles";
import todo from "../assets/todo.svg";

export function Header() {
  return (
    <Container>
      <div>
        <img src={todo} alt="Logo do site" />
        <strong>
          To<span>Do</span>
        </strong>
      </div>
    </Container>
  );
}
