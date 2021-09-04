import { CardTitleWrapper, CardListContainer } from "./styled";
import { CloseOutlined } from "@ant-design/icons";

const CardList = ({ tasks, onClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <CardListContainer key={task.id}>
          <CardTitleWrapper>
            {task.text}{" "}
            <CloseOutlined
              style={{ color: "red", cursor: "pointer" }}
              onClick={onClick}
            />
          </CardTitleWrapper>
          <p>{task.date}</p>
        </CardListContainer>
      ))}
    </>
  );
};

export default CardList;
