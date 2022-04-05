import style from "./Tasks.module.css";
import SubTasks from "../SubTasks/SubTasks";
import AddSubTaskInput from "../SubTasks/AddSubTaskInput";
import Notes from "../Notes/Notes";
import TaskTitleInput from "./TaskTitleInput";
import Tags from "../Tags/Tags";
import Timelines from "../Timelines/Timelines";
const Tasks = ({ board_id, card_id, task, borderColor }) => {
  return (
    <div className={style.task_container}>
      <TaskTitleInput
        borderColor={borderColor}
        title={task.title}
        exec={task.exec}
      />
      <div className={style.task_details}>
        <h3 className={style.subtask_info}>Подзадачи:</h3>
        <ul>
          {task.subtasks?.map((subTask) => (
            <SubTasks
              board_id={board_id}
              card_id={card_id}
              task_id={task.id}
              key={subTask.id}
              subTask={subTask}
            />
          ))}
          <li>
            <AddSubTaskInput
              board_id={board_id}
              card_id={card_id}
              task_id={task.id}
              isSubtasks={task.subtasks?.length > 0}
            />
          </li>
        </ul>
        <h3 className={style.subtask_info}>Заметки:</h3>
        <Notes notes={task.notes} />
        <h3 className={style.subtask_info}>Теги:</h3>
        <Tags tags={task.tags} />
        <h3 className={style.subtask_info}>Временные рамки:</h3>
        <Timelines timelines={task.timelines} />
      </div>
    </div>
  );
};
export default Tasks;
