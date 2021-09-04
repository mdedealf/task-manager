import { CardTitleWrapper, CardListContainer } from "./styled";
import { CloseOutlined } from "@ant-design/icons";

const CardList = ({ tasks, onClick, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <CardListContainer
          $reminder={task.reminder}
          key={task.id}
          onDoubleClick={() => onToggle(task.id)}
        >
          <CardTitleWrapper>
            {task.text}{" "}
            <CloseOutlined
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() => onClick(task.id)}
            />
          </CardTitleWrapper>
          <p>{task.date}</p>
        </CardListContainer>
      ))}
    </>
  );
};

export default CardList;
