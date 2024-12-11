import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { defaultTodo } from "../../utils/general.js";
import useAddTodo from "../../hooks/useAddTodo.js";
import axios from "axios";

const AddTodoForm = ({ fetchTodos, page, limit }) => {
  // let [newTodo, setNewTodo] = useState(defaultTodo);
  let [newTodo, setNewTodo] = useState({
    "title": "",
    "description": "",
    "activity": "",
    "date": "",
    "strStatus": ""
  });

  const { addTodo, isAddingTodo } = useAddTodo(
    fetchTodos,
    page,
    limit,
    setNewTodo
  );

  let isValidateInputs =
    newTodo.title.length < 10 || newTodo.description.length < 15;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp1 = await addTodo({ ...newTodo });
      console.log("newTodo display");

      const resp = axios.post("http://localhost:3000/api/todos", newTodo);
      console.log(resp);
    }
    catch (ex) {
      console.log("catch me ", ex);
      // console.log(ex);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexGrow: 1,
        height: "70px",
        gap: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="title"
        name="title"
        label="Todo Title"
        variant="outlined"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        error={newTodo.title.length > 0 && newTodo.title.length < 10}
        helperText={
          newTodo.title.length > 0 && newTodo.title.length < 10
            ? "Title must be at least 10 characters"
            : ""
        }
        sx={{
          width: "30%",
        }}
      />
      <TextField
        id="description"
        name="description"
        label="Todo Description"
        variant="outlined"
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
        error={
          newTodo.description.length > 0 && newTodo.description.length < 15
        }
        helperText={
          newTodo.description.length > 0 && newTodo.description.length < 15
            ? "Description must be at least 15 characters"
            : ""
        }
        sx={{
          flexGrow: 1,
        }}
      />
      <LoadingButton
        loading={isAddingTodo}
        variant="contained"
        size="large"
        type="submit"
        disabled={isValidateInputs}
        sx={{
          p: "14px",
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      >
        Add Todo
      </LoadingButton>
    </Box>
  );
};

export default AddTodoForm;
