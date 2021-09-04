import { useState } from "react";
import CardList from "../components/card/CardList";
import InputField from "../components/Form/Input";
import Header from "../components/header/Header";
import Empty from "../components/state/Empty";
import { ContainerWrapper } from "../components/wrapper/styled";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Belajar menjadi orang yang baik dan ikhlas membantu sesama",
      date: "23 August 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Ngoding Chill",
      date: "26 August 2021",
      reminder: false,
    },
  ]);

  const addTask = () => {
    console.log("Add");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
        btnTitle="Add"
        color="white"
        bgColor="orange"
        onClick={addTask}
      />
      <InputField placeholder="Input What you need to reminder!" />
      <InputField placeholder="Date & time" />
      {tasks.length > 0 ? (
        <CardList tasks={tasks} onClick={deleteTask} onToggle={toggleTask} />
      ) : (
        <Empty text="No Data" />
      )}
    </ContainerWrapper>
  );
};

export default Task;
