import React, { useReducer } from "react";
import DynamicField from "../forms/components/DynamicField";

function fieldReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FIELD": {
      return [
        ...state,
        {
          value: "",
          Component: DynamicField,
        },
      ];
    }
    case "REMOVE_FIELD": {
      const { fieldIndex } = payload;

      if (state.length === 1) {
        return state;
      }

      return state.filter((field, index) => index !== fieldIndex);
    }
    case "UPDATE_FIELD": {
      const { fieldIndex, value } = payload;
      return state.map((field, index) => {
        if (index === fieldIndex) {
          return { ...field, value };
        }
        return field;
      });
    }
    default: {
      return state;
    }
  }
}

const useDynamicFields = (
  name,
  initialState = [{ value: "", Component: DynamicField }]
) => {
  const [state, setState] = useReducer(fieldReducer, initialState);

  const setInput = (index) => (e) => {
    e.preventDefault();
    setState({
      type: "UPDATE_FIELD",
      payload: { fieldIndex: index, value: e.target.value },
    });
  };

  const removeField = (index) => (e) => {
    e.preventDefault();
    setState({
      type: "REMOVE_FIELD",
      payload: { fieldIndex: index },
    });
  };

  const addField = (e) => {
    e.preventDefault();
    setState({ type: "ADD_FIELD" });
  };
  return [state, setInput, addField, removeField];
};

export default useDynamicFields;
