import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Circle, CircleCheckBig, Trash2 } from "lucide-react";
import React from "react";
import useUpdateTodo from "../../../hooks/useUpdateTodo.js";

const Todo = ({ todo, setTodos, setTodoToDelete, handleOpenDeleteDialog }) => {
  const { title, description, isCompleted } = todo;

  const { updateTodo, isUpdatingTodo } = useUpdateTodo(setTodos);

  const handleUpdate = async (todo) => {
    await updateTodo(todo);
  };

  const handleDelete = async (todo) => {
    setTodoToDelete(todo);
    handleOpenDeleteDialog();
  };

  return (
    <Card sx={{ width: 250 }}>
      <Stack justifyContent={"space-between"} boxSizing={"border-box"}>
        <CardContent
          sx={{
            paddingBlockEnd: 0,
            position: "relative",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            mt={1}
          >
            {title}
          </Typography>
          <Typography variant="body1" my={2}>
            {description}
          </Typography>
          <Typography
            variant="body1"
            color={isCompleted ? "green" : "red"}
            sx={{ position: "absolute", top: 5, left: 5 }}
          >
            {isCompleted ? (
              <CircleCheckBig color="rgb(103, 172, 0)" />
            ) : (
              <Circle color="rgb(184, 184, 184)" />
            )}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <LoadingButton
            size="medium"
            variant="contained"
            loading={isUpdatingTodo}
            onClick={() => handleUpdate(todo)}
          >
            {isCompleted ? "Undo" : "Mark as Done"}
          </LoadingButton>
          <LoadingButton
            size="medium"
            variant="contained"
            color="error"
            onClick={() => handleDelete(todo)}
          >
            <Trash2 />
          </LoadingButton>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default Todo;
