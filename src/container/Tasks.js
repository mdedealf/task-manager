import { Result } from "antd";
import { useState } from "react";
import ButtonStyled from "../components/button/styled";
import CardList from "../components/card/CardList";
import Check from "../components/Form/Checkbox";
import InputField from "../components/Form/Input";
import Header from "../components/header/Header";
import Empty from "../components/state/Empty";
import { ContainerWrapper, FormContainer } from "../components/wrapper/styled";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Hello Reminder",
      date: "dd-mm-yyy",
      reminder: false,
    },
  ]);
  const [buttonName, setButtonName] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const addNewTask = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100000) + 1;

    const createNewTask = { id, ...tasks, text, date, reminder };
    setTasks([...tasks, createNewTask]);

    setText("");
    setDate("");
    setReminder(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleAddTaskButton = () => {
    setButtonName(!buttonName);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <ContainerWrapper>
      <Header
        title="Create Your Reminder!"
        btnTitle={!buttonName ? "Add" : "Cancel"}
        color="white"
        bgColor={!buttonName ? "orange" : "red"}
        onClick={toggleAddTaskButton}
      />
      {buttonName ? (
        <>
          <FormContainer onSubmit={addNewTask}>
            <InputField
              placeholder="Write a note you need to reminder!"
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              required
            />
            <InputField
              placeholder="dd-mm-yyy"
              type="text"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <Check
              title="Reminder"
              value={reminder}
              defaultChecked
              onChange={(e) => {
                setReminder(e.target.checked);
              }}
            />
            <ButtonStyled
              color="white"
              bgColor="blue"
              block={true}
              onClick={() => {}}
            >
              Save new reminder
            </ButtonStyled>
          </FormContainer>
        </>
      ) : null}
      {tasks.length > 0 ? (
        <CardList tasks={tasks} onClick={deleteTask} onToggle={toggleTask} />
      ) : (
        <>
          <Empty text="No Reminder! Click Add to create a new one.." />
          <Result status="404" />
        </>
      )}
    </ContainerWrapper>
  );
};

export default Task;
