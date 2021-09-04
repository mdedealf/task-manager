import { useState } from "react";
import CardList from "../components/card/CardList";
import Header from "../components/header/Header";
import { ContainerWrapper } from "../components/wrapper/styled";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Mencuci baju saya",
      date: "23 August 2021",
      reimnder: true,
    },
    {
      id: 2,
      text: "Ngoding Chill",
      date: "26 August 2021",
      reimnder: true,
    },
  ]);

  const addTask = () => {
    console.log("Add");
  };

  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <ContainerWrapper>
      <Header
        title="Create Your Reminder!"
        btnTitle="Add"
        color="white"
        bgColor="orange"
        onClick={addTask}
      />
      <CardList tasks={tasks} onClick={deleteTask} />
    </ContainerWrapper>
  );
};

export default Task;
