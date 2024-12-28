import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
const CreateTask = () => {
  return (
    <>
      {/* Container Div  */}
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        {/* Navbar*/}
        <Title />
        <TodoForm />
      </div>
    </>
  );
};

export default CreateTask;
